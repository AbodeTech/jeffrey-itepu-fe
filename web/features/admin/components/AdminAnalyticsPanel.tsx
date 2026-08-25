"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { GitCompareArrows, RefreshCw } from "lucide-react"
import type { RangeStats } from "@/lib/admin/range-stats"
import {
  bucketDailyPoints,
  bucketMonthlyPoints,
  bucketWeeklyPoints,
} from "@/lib/admin/range-stats"
import { formatLagosDisplayRange, formatLagosShortDay } from "../format"
import { AdminDateRangePicker, defaultAdminDateRange, type AdminDateRange } from "./AdminDateRangePicker"

type Granularity = "day" | "week" | "month"

type ChartBucket = {
  key: string
  label: string
  count: number
}

const CHART_HEIGHT_PX = 128

function defaultGranularity(rangeDays: number): Granularity {
  if (rangeDays <= 14) {
    return "day"
  }
  if (rangeDays <= 62) {
    return "week"
  }
  return "month"
}

function granularityHelp(granularity: Granularity): string {
  switch (granularity) {
    case "day":
      return "Each bar is one calendar day in Africa/Lagos time."
    case "week":
      return "Each bar groups seven days. Useful when the selected range is longer than two weeks."
    case "month":
      return "Each bar is one calendar month. Best for quarter-style views."
  }
}

function buildBuckets(daily: RangeStats["current"]["daily"], granularity: Granularity): ChartBucket[] {
  switch (granularity) {
    case "day":
      return bucketDailyPoints(daily).map((point) => ({
        key: point.date,
        label: formatLagosShortDay(point.date),
        count: point.count,
      }))
    case "week":
      return bucketWeeklyPoints(daily)
    case "month":
      return bucketMonthlyPoints(daily)
  }
}

function formatDelta(delta: number, pctChange: number): string {
  if (delta === 0) {
    return "Same as the previous period."
  }
  const direction = delta > 0 ? "up" : "down"
  return `${Math.abs(delta)} ${Math.abs(delta) === 1 ? "submission" : "submissions"} ${direction} (${Math.abs(pctChange)}%) vs the previous period.`
}

export function AdminAnalyticsPanel() {
  const [range, setRange] = useState<AdminDateRange>(defaultAdminDateRange)
  const [granularity, setGranularity] = useState<Granularity>("week")
  const [showComparison, setShowComparison] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [stats, setStats] = useState<RangeStats | null>(null)

  const handleRangeChange = useCallback((nextRange: AdminDateRange) => {
    const from = new Date(`${nextRange.from}T12:00:00Z`)
    const to = new Date(`${nextRange.to}T12:00:00Z`)
    const rangeDays = Math.max(1, Math.round((to.getTime() - from.getTime()) / 86_400_000) + 1)
    setRange(nextRange)
    setGranularity(defaultGranularity(rangeDays))
  }, [])

  const loadStats = useCallback(async (nextRange: AdminDateRange) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `/api/admin/stats/range?from=${encodeURIComponent(nextRange.from)}&to=${encodeURIComponent(nextRange.to)}`,
      )
      const payload = (await response.json()) as RangeStats & { error?: string }
      if (!response.ok) {
        throw new Error(payload.error ?? "Could not load analytics.")
      }
      setStats(payload)
    } catch (loadError) {
      setStats(null)
      setError(loadError instanceof Error ? loadError.message : "Could not load analytics.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void loadStats(range)
  }, [loadStats, range])

  const buckets = useMemo(
    () => (stats ? buildBuckets(stats.current.daily, granularity) : []),
    [granularity, stats],
  )

  const maxBucket = Math.max(1, ...buckets.map((bucket) => bucket.count))
  const topSource = stats?.current.bySource.find((source) => source.count > 0)

  return (
    <section className="mt-8 rounded-[12px] border border-[#E6ECF2] bg-white px-4 py-4 sm:px-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="text-[18px] font-bold tracking-[-0.02em] text-[#233A4A]" style={{ fontFamily: "var(--font-agrandir)" }}>
            Submission trend
          </h2>
          <p className="mt-1 max-w-[60ch] text-[14px] leading-[1.6] text-[#6C7881]">
            {range.label} · {formatLagosDisplayRange(range.from, range.to)} · Africa/Lagos time
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setShowComparison(!showComparison)}
            className={`flex items-center gap-1.5 rounded-[10px] border px-3 py-2 text-[12px] font-medium transition ${
              showComparison
                ? "border-[#B8E6FF] bg-[#E8F7FF] text-[#0093FF]"
                : "border-[#E6ECF2] bg-white text-[#6C7881] hover:bg-[#F6F7FB]"
            }`}
          >
            <GitCompareArrows size={13} />
            Compare
          </button>
          <button
            type="button"
            onClick={() => void loadStats(range)}
            className="flex items-center gap-1.5 rounded-[10px] border border-[#E6ECF2] bg-white px-3 py-2 text-[12px] font-medium text-[#6C7881] transition hover:bg-[#F6F7FB]"
          >
            <RefreshCw size={13} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
          <AdminDateRangePicker value={range} onChange={handleRangeChange} />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {(["day", "week", "month"] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setGranularity(option)}
            className={`rounded-full px-3 py-1.5 text-[12px] font-medium capitalize transition ${
              granularity === option
                ? "bg-[#05AAFF] text-white"
                : "bg-[#F6F7FB] text-[#6C7881] hover:bg-[#E8F7FF] hover:text-[#0093FF]"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="mt-2 text-[13px] text-[#6C7881]">{granularityHelp(granularity)}</p>

      {error ? (
        <p className="mt-4 rounded-[8px] bg-[#FEF3F2] px-3 py-3 text-[14px] text-[#B42318]">{error}</p>
      ) : null}

      {loading && !stats ? (
        <p className="mt-4 text-[14px] text-[#6C7881]">Loading analytics…</p>
      ) : null}

      {stats ? (
        <>
          {showComparison ? (
            <div className="mt-4 flex items-start gap-3 rounded-[10px] border border-[#E6ECF2] bg-[#F6F7FB] px-4 py-3">
              <GitCompareArrows size={16} className="mt-0.5 shrink-0 text-[#6C7881]" />
              <p className="text-[14px] leading-[1.6] text-[#233A4A]">
                <span className="font-semibold">{stats.current.count.toLocaleString()}</span> submissions in this period vs{" "}
                <span className="font-semibold">{stats.previous.count.toLocaleString()}</span> in the previous{" "}
                {stats.rangeDays}-day period. {formatDelta(stats.comparison.delta, stats.comparison.pctChange)}
              </p>
            </div>
          ) : null}

          <dl className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[10px] bg-[#F6F7FB] px-3 py-3">
              <dt className="text-[12px] font-medium text-[#6C7881]">In selected period</dt>
              <dd className="mt-1 text-[24px] font-bold tabular-nums text-[#233A4A]">{stats.current.count.toLocaleString()}</dd>
            </div>
            <div className="rounded-[10px] bg-[#F6F7FB] px-3 py-3">
              <dt className="text-[12px] font-medium text-[#6C7881]">Daily average</dt>
              <dd className="mt-1 text-[24px] font-bold tabular-nums text-[#233A4A]">{stats.current.avgPerDay.toFixed(1)}</dd>
            </div>
            <div className="rounded-[10px] bg-[#F6F7FB] px-3 py-3">
              <dt className="text-[12px] font-medium text-[#6C7881]">Busiest day</dt>
              <dd className="mt-1 text-[15px] font-semibold text-[#233A4A]">
                {stats.current.peak && stats.current.peak.count > 0
                  ? `${formatLagosShortDay(stats.current.peak.date)} (${stats.current.peak.count})`
                  : "—"}
              </dd>
            </div>
            <div className="rounded-[10px] bg-[#F6F7FB] px-3 py-3">
              <dt className="text-[12px] font-medium text-[#6C7881]">Top form in period</dt>
              <dd className="mt-1 text-[15px] font-semibold text-[#233A4A]">
                {topSource ? `${topSource.label} (${topSource.count})` : "—"}
              </dd>
            </div>
          </dl>

          {stats.current.count === 0 ? (
            <p className="mt-4 rounded-[8px] bg-[#F6F7FB] px-3 py-3 text-[14px] text-[#6C7881]">
              No submissions arrived in this date range.
            </p>
          ) : (
            <>
              <figure className="mt-5 overflow-x-auto">
                <div className="min-w-[640px]">
                  <div
                    className="flex items-end gap-2 border-b-2 border-[#CBD5E1] pb-0 sm:gap-3"
                    style={{ height: CHART_HEIGHT_PX + 28 }}
                    role="img"
                    aria-label={`Submission trend by ${granularity}. ${stats.current.count} total.`}
                  >
                    {buckets.map((bucket) => {
                      const barHeight =
                        bucket.count === 0
                          ? 2
                          : Math.max(Math.round((bucket.count / maxBucket) * CHART_HEIGHT_PX), 4)

                      return (
                        <div
                          key={bucket.key}
                          className="flex h-full min-w-[44px] flex-1 flex-col items-center justify-end"
                        >
                          <span className="mb-1 text-[11px] font-medium tabular-nums leading-none text-[#233A4A]">
                            {bucket.count}
                          </span>
                          <div
                            className="w-full rounded-t-[4px] bg-[#05AAFF] transition-opacity hover:opacity-80"
                            style={{ height: `${barHeight}px` }}
                            title={`${bucket.label}: ${bucket.count} submission${bucket.count === 1 ? "" : "s"}`}
                          />
                        </div>
                      )
                    })}
                  </div>
                  <div className="mt-2 flex gap-2 sm:gap-3">
                    {buckets.map((bucket) => (
                      <div
                        key={`${bucket.key}-label`}
                        className="flex min-h-[2.75rem] min-w-[44px] flex-1 items-start justify-center"
                      >
                        <span className="text-center text-[10px] leading-tight text-[#6C7881]">{bucket.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <figcaption className="sr-only">
                  {buckets.map((bucket) => `${bucket.label}: ${bucket.count}`).join(". ")}
                </figcaption>
              </figure>

              <div className="mt-6 overflow-x-auto rounded-[10px] border border-[#E6ECF2]">
                <table className="min-w-full text-left text-[13px]">
                  <caption className="sr-only">Submission counts grouped by {granularity}</caption>
                  <thead className="border-b border-[#E6ECF2] bg-[#F6F7FB] text-[#6C7881]">
                    <tr>
                      <th className="px-4 py-2.5 font-medium capitalize">{granularity}</th>
                      <th className="px-4 py-2.5 font-medium">Submissions</th>
                      <th className="px-4 py-2.5 font-medium">Share of period</th>
                    </tr>
                  </thead>
                  <tbody>
                    {buckets.map((bucket) => (
                      <tr key={bucket.key} className="border-b border-[#E6ECF2] last:border-0">
                        <td className="px-4 py-2.5 text-[#233A4A]">{bucket.label}</td>
                        <td className="px-4 py-2.5 tabular-nums">{bucket.count}</td>
                        <td className="px-4 py-2.5 tabular-nums text-[#6C7881]">
                          {stats.current.count === 0 ? "0%" : `${Math.round((bucket.count / stats.current.count) * 100)}%`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6">
                <h3 className="text-[14px] font-medium text-[#233A4A]">By form in this period</h3>
                <ul className="mt-3 space-y-2">
                  {stats.current.bySource.map((source) => (
                    <li key={source.id}>
                      <div className="flex items-center justify-between gap-3 text-[13px]">
                        <span className="text-[#233A4A]">{source.label}</span>
                        <span className="tabular-nums text-[#6C7881]">{source.count}</span>
                      </div>
                      <div className="mt-1 h-2 overflow-hidden rounded-full bg-[#F1F5F9]">
                        <div
                          className="h-full rounded-full bg-[#05AAFF]"
                          style={{
                            width: `${
                              stats.current.count === 0 ? 0 : (source.count / stats.current.count) * 100
                            }%`,
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </>
      ) : null}
    </section>
  )
}
