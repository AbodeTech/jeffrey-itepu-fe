import { createAdminClient } from "@/lib/supabase/admin"
import {
  ADMIN_EXPORT_LIMIT,
  ADMIN_PAGE_SIZE,
  ADMIN_SOURCES,
  type AdminSource,
  type AdminSourceId,
} from "./catalog"
import { daysAgoIso, lagosDayKey, lastNDayKeys } from "./format"

export type AdminRow = Record<string, unknown>

export type ActivityRow = {
  id: string
  sourceId: AdminSourceId
  sourceLabel: string
  href: string
  title: string
  createdAt: string
}

export type Breakdown = {
  title: string
  items: { label: string; count: number }[]
}

export type SourceSnapshot = {
  id: AdminSourceId
  label: string
  href: string
  publicForm: string
  publicFormLabel: string
  error: string | null
  total: number
  last7: number
  last30: number
  daily: { date: string; count: number }[]
  recent: ActivityRow[]
  breakdowns: Breakdown[]
}

export type OverviewData = {
  sources: SourceSnapshot[]
  grandTotal: number
  daily: { date: string; count: number }[]
  recent: ActivityRow[]
}

export type SourceTableData = {
  source: AdminSource
  error: string | null
  rows: AdminRow[]
  total: number
  page: number
  pageSize: number
  query: string
}

function asRow(value: unknown): AdminRow {
  if (value && typeof value === "object") {
    return value as AdminRow
  }
  return {}
}

function rowTitle(source: AdminSource, row: AdminRow): string {
  const value = row[source.titleField]
  if (typeof value === "string" && value.trim()) {
    return value
  }
  const email = row.email
  if (typeof email === "string" && email.trim()) {
    return email
  }
  return "Submission"
}

function rowId(row: AdminRow, fallback: string): string {
  return typeof row.id === "string" ? row.id : fallback
}

function rowCreatedAt(row: AdminRow): string {
  return typeof row.created_at === "string" ? row.created_at : ""
}

async function countRows(table: string, sinceIso?: string): Promise<{ count: number; error: string | null }> {
  const supabase = createAdminClient()
  let query = supabase.from(table).select("*", { count: "exact", head: true })
  if (sinceIso) {
    query = query.gte("created_at", sinceIso)
  }
  const { count, error } = await query
  if (error) {
    return { count: 0, error: error.message }
  }
  return { count: count ?? 0, error: null }
}

function emptyDaily(): { date: string; count: number }[] {
  return lastNDayKeys(30).map((date) => ({ date, count: 0 }))
}

function bucketDaily(timestamps: string[]): { date: string; count: number }[] {
  const counts = new Map<string, number>()
  for (const stamp of timestamps) {
    const key = lagosDayKey(stamp)
    counts.set(key, (counts.get(key) ?? 0) + 1)
  }
  return lastNDayKeys(30).map((date) => ({ date, count: counts.get(date) ?? 0 }))
}

function topCounts(values: string[], limit = 6): { label: string; count: number }[] {
  const counts = new Map<string, number>()
  for (const value of values) {
    const label = value.trim() || "—"
    counts.set(label, (counts.get(label) ?? 0) + 1)
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([label, count]) => ({ label, count }))
}

function sanitizeSearch(query: string): string {
  return query.replace(/[%_,]/g, " ").trim()
}

export async function loadSourceSnapshot(source: AdminSource): Promise<SourceSnapshot> {
  const supabase = createAdminClient()
  const since7 = daysAgoIso(7)
  const since30 = daysAgoIso(30)

  const [total, last7, last30, recentResult, volumeResult, ...breakdownResults] = await Promise.all([
    countRows(source.table),
    countRows(source.table, since7),
    countRows(source.table, since30),
    supabase
      .from(source.table)
      .select(source.select)
      .order("created_at", { ascending: false })
      .limit(8),
    supabase.from(source.table).select("created_at").gte("created_at", since30).limit(5000),
    ...source.breakdowns.map((breakdown) =>
      supabase.from(source.table).select(breakdown.column).limit(2000),
    ),
  ])

  const error =
    total.error ||
    last7.error ||
    last30.error ||
    recentResult.error?.message ||
    volumeResult.error?.message ||
    breakdownResults.find((result) => result.error)?.error?.message ||
    null

  if (error) {
    return {
      id: source.id,
      label: source.label,
      href: source.href,
      publicForm: source.publicForm,
      publicFormLabel: source.publicFormLabel,
      error,
      total: 0,
      last7: 0,
      last30: 0,
      daily: emptyDaily(),
      recent: [],
      breakdowns: [],
    }
  }

  const recentRows = (recentResult.data ?? []).map(asRow)
  const timestamps = (volumeResult.data ?? [])
    .map(asRow)
    .map((row) => rowCreatedAt(row))
    .filter(Boolean)

  const breakdowns: Breakdown[] = source.breakdowns.map((breakdown, index) => {
    const rows = (breakdownResults[index]?.data ?? []).map(asRow)
    const values = rows
      .map((row) => row[breakdown.column])
      .filter((value): value is string => typeof value === "string")
    return { title: breakdown.title, items: topCounts(values) }
  })

  return {
    id: source.id,
    label: source.label,
    href: source.href,
    publicForm: source.publicForm,
    publicFormLabel: source.publicFormLabel,
    error: null,
    total: total.count,
    last7: last7.count,
    last30: last30.count,
    daily: bucketDaily(timestamps),
    recent: recentRows.map((row, index) => ({
      id: rowId(row, `${source.id}-${index}`),
      sourceId: source.id,
      sourceLabel: source.label,
      href: source.href,
      title: rowTitle(source, row),
      createdAt: rowCreatedAt(row),
    })),
    breakdowns,
  }
}

export async function loadOverview(): Promise<OverviewData> {
  const sources = await Promise.all(ADMIN_SOURCES.map(loadSourceSnapshot))
  const dailyMap = new Map<string, number>()
  for (const key of lastNDayKeys(30)) {
    dailyMap.set(key, 0)
  }
  for (const source of sources) {
    for (const point of source.daily) {
      dailyMap.set(point.date, (dailyMap.get(point.date) ?? 0) + point.count)
    }
  }

  const recent = sources
    .flatMap((source) => source.recent)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 20)

  return {
    sources,
    grandTotal: sources.reduce((sum, source) => sum + source.total, 0),
    daily: lastNDayKeys(30).map((date) => ({ date, count: dailyMap.get(date) ?? 0 })),
    recent,
  }
}

export async function loadSourceTable(
  source: AdminSource,
  page: number,
  query: string,
): Promise<SourceTableData> {
  const supabase = createAdminClient()
  const safePage = Number.isFinite(page) && page > 0 ? Math.floor(page) : 1
  const from = (safePage - 1) * ADMIN_PAGE_SIZE
  const to = from + ADMIN_PAGE_SIZE - 1
  const needle = sanitizeSearch(query)

  let request = supabase
    .from(source.table)
    .select(source.select, { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to)

  if (needle) {
    const filter = source.searchColumns.map((column) => `${column}.ilike.%${needle}%`).join(",")
    request = request.or(filter)
  }

  const { data, error, count } = await request

  return {
    source,
    error: error?.message ?? null,
    rows: (data ?? []).map(asRow),
    total: count ?? 0,
    page: safePage,
    pageSize: ADMIN_PAGE_SIZE,
    query: needle,
  }
}

export async function exportSourceRows(source: AdminSource): Promise<{ error: string | null; rows: AdminRow[] }> {
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from(source.table)
    .select(source.select)
    .order("created_at", { ascending: false })
    .limit(ADMIN_EXPORT_LIMIT)

  return {
    error: error?.message ?? null,
    rows: (data ?? []).map(asRow),
  }
}
