import { createAdminClient } from "@/lib/supabase/admin"
import { ADMIN_SOURCES } from "@/features/admin/catalog"
import {
  dayKeyEndIso,
  dayKeyStartIso,
  dayKeysBetween,
  formatLagosDayRange,
  formatLagosMonthYear,
  lagosDayKey,
} from "@/features/admin/format"

export type DailyPoint = { date: string; count: number }

export type SourcePeriodCount = {
  id: string
  label: string
  count: number
}

export type RangeStats = {
  from: string
  to: string
  rangeDays: number
  grandTotal: number
  current: {
    count: number
    avgPerDay: number
    daily: DailyPoint[]
    bySource: SourcePeriodCount[]
    peak: DailyPoint | null
  }
  previous: {
    count: number
    daily: DailyPoint[]
  }
  comparison: {
    delta: number
    pctChange: number
  }
}

function isDayKey(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value)
}

function previousPeriod(fromKey: string, toKey: string) {
  const days = dayKeysBetween(fromKey, toKey)
  const rangeDays = days.length
  const previousEnd = new Date(`${fromKey}T12:00:00Z`)
  previousEnd.setUTCDate(previousEnd.getUTCDate() - 1)
  const previousStart = new Date(previousEnd)
  previousStart.setUTCDate(previousStart.getUTCDate() - (rangeDays - 1))

  return {
    from: lagosDayKey(previousStart),
    to: lagosDayKey(previousEnd),
    rangeDays,
  }
}

async function fetchTimestamps(table: string, fromIso: string, toIso: string): Promise<string[]> {
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from(table)
    .select("created_at")
    .gte("created_at", fromIso)
    .lte("created_at", toIso)
    .limit(5000)

  if (error) {
    throw new Error(error.message)
  }

  return (data ?? [])
    .map((row) => (typeof row.created_at === "string" ? row.created_at : ""))
    .filter(Boolean)
}

async function countAll(table: string): Promise<number> {
  const supabase = createAdminClient()
  const { count, error } = await supabase.from(table).select("*", { count: "exact", head: true })
  if (error) {
    throw new Error(error.message)
  }
  return count ?? 0
}

function buildDailySeries(timestamps: string[], fromKey: string, toKey: string): DailyPoint[] {
  const counts = new Map<string, number>()
  for (const key of dayKeysBetween(fromKey, toKey)) {
    counts.set(key, 0)
  }
  for (const stamp of timestamps) {
    const key = lagosDayKey(stamp)
    if (counts.has(key)) {
      counts.set(key, (counts.get(key) ?? 0) + 1)
    }
  }
  return dayKeysBetween(fromKey, toKey).map((date) => ({ date, count: counts.get(date) ?? 0 }))
}

function findPeak(daily: DailyPoint[]): DailyPoint | null {
  return daily.reduce<DailyPoint | null>(
    (best, point) => (!best || point.count > best.count ? point : best),
    null,
  )
}

export async function buildLedgerRangeStats(fromKey: string, toKey: string): Promise<RangeStats> {
  if (!isDayKey(fromKey) || !isDayKey(toKey) || fromKey > toKey) {
    throw new Error("Invalid date range.")
  }

  const rangeDays = dayKeysBetween(fromKey, toKey).length
  const currentFromIso = dayKeyStartIso(fromKey)
  const currentToIso = dayKeyEndIso(toKey)
  const previous = previousPeriod(fromKey, toKey)
  const previousFromIso = dayKeyStartIso(previous.from)
  const previousToIso = dayKeyEndIso(previous.to)

  const sourceResults = await Promise.all(
    ADMIN_SOURCES.map(async (source) => {
      const [currentTimestamps, previousTimestamps, total] = await Promise.all([
        fetchTimestamps(source.table, currentFromIso, currentToIso),
        fetchTimestamps(source.table, previousFromIso, previousToIso),
        countAll(source.table),
      ])

      return {
        id: source.id,
        label: source.label,
        total,
        currentTimestamps,
        previousTimestamps,
      }
    }),
  )

  const currentTimestamps = sourceResults.flatMap((source) => source.currentTimestamps)
  const previousTimestamps = sourceResults.flatMap((source) => source.previousTimestamps)
  const daily = buildDailySeries(currentTimestamps, fromKey, toKey)
  const previousDaily = buildDailySeries(previousTimestamps, previous.from, previous.to)
  const currentCount = currentTimestamps.length
  const previousCount = previousTimestamps.length

  return {
    from: fromKey,
    to: toKey,
    rangeDays,
    grandTotal: sourceResults.reduce((sum, source) => sum + source.total, 0),
    current: {
      count: currentCount,
      avgPerDay: rangeDays > 0 ? currentCount / rangeDays : 0,
      daily,
      bySource: sourceResults
        .map((source) => ({
          id: source.id,
          label: source.label,
          count: source.currentTimestamps.length,
        }))
        .sort((a, b) => b.count - a.count),
      peak: findPeak(daily),
    },
    previous: {
      count: previousCount,
      daily: previousDaily,
    },
    comparison: {
      delta: currentCount - previousCount,
      pctChange:
        previousCount > 0
          ? Math.round(((currentCount - previousCount) / previousCount) * 100)
          : currentCount > 0
            ? 100
            : 0,
    },
  }
}

export function bucketDailyPoints(points: DailyPoint[]): DailyPoint[] {
  return points
}

export function bucketWeeklyPoints(points: DailyPoint[]): { key: string; label: string; count: number }[] {
  const weeks: { key: string; label: string; count: number; start: string; end: string }[] = []

  for (let index = 0; index < points.length; index += 7) {
    const chunk = points.slice(index, index + 7)
    const start = chunk[0]?.date ?? ""
    const end = chunk[chunk.length - 1]?.date ?? start
    weeks.push({
      key: `${start}-${end}`,
      start,
      end,
      label: formatLagosDayRange(start, end),
      count: chunk.reduce((sum, point) => sum + point.count, 0),
    })
  }

  return weeks.map(({ key, label, count }) => ({ key, label, count }))
}

export function bucketMonthlyPoints(points: DailyPoint[]): { key: string; label: string; count: number }[] {
  const months = new Map<string, { label: string; count: number }>()

  for (const point of points) {
    const monthKey = point.date.slice(0, 7)
    const existing = months.get(monthKey)
    if (existing) {
      existing.count += point.count
    } else {
      months.set(monthKey, {
        label: formatLagosMonthYear(`${monthKey}-01`),
        count: point.count,
      })
    }
  }

  return [...months.entries()].map(([key, value]) => ({ key, label: value.label, count: value.count }))
}
