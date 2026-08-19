import Link from "next/link"
import { formatLagosDateTime } from "../format"
import type { OverviewData } from "../queries"
import { AdminVolumeStrip } from "./AdminVolumeStrip"

export function AdminOverview({ data }: { data: OverviewData }) {
  const healthy = data.sources.filter((source) => !source.error)
  const maxTotal = Math.max(1, ...healthy.map((source) => source.total))

  return (
    <div>
      <h1
        className="text-left! text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#233A4A] sm:text-[32px]"
        style={{ fontFamily: "var(--font-agrandir)", textAlign: "left" }}
      >
        Inbound forms
      </h1>
      <p className="mt-2 max-w-[62ch] text-[16px] leading-[1.6] text-[#6C7881]">
        {data.grandTotal.toLocaleString()} submissions across the public forms on this site.
        Counts use Africa/Lagos time.
      </p>

      <div className="mt-8 overflow-x-auto rounded-[12px] border border-[#E6ECF2] bg-white">
        <table className="min-w-full text-left text-[14px]">
          <caption className="sr-only">Submission counts by form</caption>
          <thead className="border-b border-[#E6ECF2] text-[#6C7881]">
            <tr>
              <th className="px-4 py-3 font-medium">Form</th>
              <th className="px-4 py-3 font-medium">Total</th>
              <th className="px-4 py-3 font-medium">7 days</th>
              <th className="px-4 py-3 font-medium">30 days</th>
              <th className="min-w-[140px] px-4 py-3 font-medium">Share</th>
            </tr>
          </thead>
          <tbody>
            {data.sources.map((source) => (
              <tr key={source.id} className="border-b border-[#E6ECF2] last:border-0">
                <th className="px-4 py-3 font-medium text-[#233A4A]" scope="row">
                  {source.error ? (
                    <span>{source.label}</span>
                  ) : (
                    <Link className="text-[#0093FF] hover:underline" href={source.href}>
                      {source.label}
                    </Link>
                  )}
                  {source.error ? (
                    <p className="mt-1 font-normal text-[#B42318]">Could not load this table. {source.publicFormLabel} still writes here when the table exists.</p>
                  ) : null}
                </th>
                <td className="px-4 py-3 tabular-nums">{source.error ? "—" : source.total.toLocaleString()}</td>
                <td className="px-4 py-3 tabular-nums">{source.error ? "—" : source.last7.toLocaleString()}</td>
                <td className="px-4 py-3 tabular-nums">{source.error ? "—" : source.last30.toLocaleString()}</td>
                <td className="px-4 py-3">
                  {source.error ? (
                    "—"
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#F1F5F9]">
                        <div
                          className="h-full rounded-full bg-[#05AAFF]"
                          style={{ width: `${(source.total / maxTotal) * 100}%` }}
                        />
                      </div>
                      <span className="w-10 text-right tabular-nums text-[#6C7881]">
                        {data.grandTotal === 0 ? "0%" : `${Math.round((source.total / data.grandTotal) * 100)}%`}
                      </span>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data.grandTotal === 0 && data.sources.every((source) => !source.error) ? (
        <p className="mt-6 rounded-[12px] border border-[#E6ECF2] bg-white px-4 py-4 text-[15px] text-[#6C7881]">
          No submissions yet. Public forms on Contact, Book Jeff, Ownership Network, The Ownership Ledger, and webinar register write into this ledger.
        </p>
      ) : null}

      <AdminVolumeStrip points={data.daily} label="Volume, last 30 days" />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {data.sources
          .filter((source) => source.breakdowns.length > 0 && !source.error)
          .map((source) => (
            <section key={source.id}>
              <h2 className="text-left! text-[18px] font-bold tracking-[-0.02em] text-[#233A4A]" style={{ fontFamily: "var(--font-agrandir)", textAlign: "left" }}>
                {source.label}
              </h2>
              {source.breakdowns.map((breakdown) => (
                <div key={breakdown.title} className="mt-4">
                  <h3 className="text-[13px] font-medium text-[#6C7881]">{breakdown.title}</h3>
                  {breakdown.items.length === 0 ? (
                    <p className="mt-2 text-[14px] text-[#6C7881]">No values yet from {source.publicFormLabel}.</p>
                  ) : (
                    <ul className="mt-2 divide-y divide-[#E6ECF2] rounded-[12px] border border-[#E6ECF2] bg-white">
                      {breakdown.items.map((item) => (
                        <li key={item.label} className="flex items-center justify-between gap-3 px-4 py-2.5 text-[14px]">
                          <span>{item.label}</span>
                          <span className="tabular-nums text-[#6C7881]">{item.count}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}
      </div>

      <section className="mt-10">
        <h2
          className="text-left! text-[18px] font-bold tracking-[-0.02em] text-[#233A4A]"
          style={{ fontFamily: "var(--font-agrandir)", textAlign: "left" }}
        >
          Recent activity
        </h2>
        {data.recent.length === 0 ? (
          <p className="mt-3 text-[15px] text-[#6C7881]">Nothing has arrived yet.</p>
        ) : (
          <div className="mt-4 overflow-x-auto rounded-[12px] border border-[#E6ECF2] bg-white">
            <table className="min-w-full text-left text-[14px]">
              <thead className="border-b border-[#E6ECF2] text-[#6C7881]">
                <tr>
                  <th className="px-4 py-3 font-medium">When</th>
                  <th className="px-4 py-3 font-medium">Form</th>
                  <th className="px-4 py-3 font-medium">Record</th>
                </tr>
              </thead>
              <tbody>
                {data.recent.map((row) => (
                  <tr key={`${row.sourceId}-${row.id}`} className="border-b border-[#E6ECF2] last:border-0">
                    <td className="whitespace-nowrap px-4 py-3 tabular-nums text-[#6C7881]">
                      {formatLagosDateTime(row.createdAt)}
                    </td>
                    <td className="px-4 py-3">
                      <Link className="text-[#0093FF] hover:underline" href={row.href}>
                        {row.sourceLabel}
                      </Link>
                    </td>
                    <td className="px-4 py-3">{row.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  )
}
