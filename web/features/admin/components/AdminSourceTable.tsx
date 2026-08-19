import Link from "next/link"
import { displayCell, formatLagosDateTime } from "../format"
import type { SourceTableData } from "../queries"
import { AdminSearchForm } from "./AdminSearchForm"

function hrefFor(path: string, page: number, query: string) {
  const params = new URLSearchParams()
  if (query) {
    params.set("q", query)
  }
  params.set("page", String(page))
  return `${path}?${params.toString()}`
}

export function AdminSourceTable({ data }: { data: SourceTableData }) {
  const { source, error, rows, total, page, pageSize, query } = data
  const pageCount = Math.max(1, Math.ceil(total / pageSize))
  const from = total === 0 ? 0 : (page - 1) * pageSize + 1
  const to = Math.min(total, page * pageSize)

  return (
    <div>
      <h1
        className="text-left! text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#233A4A] sm:text-[32px]"
        style={{ fontFamily: "var(--font-agrandir)", textAlign: "left" }}
      >
        {source.label}
      </h1>
      <p className="mt-2 max-w-[62ch] text-[16px] leading-[1.6] text-[#6C7881]">
        Rows from {source.publicFormLabel}. Times are Africa/Lagos. Export is capped at 5,000 newest rows.
      </p>

      <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <AdminSearchForm action={source.href} query={query} />
        <a
          href={`/api/admin/export?source=${source.id}`}
          className="inline-flex h-12 items-center justify-center rounded-[12px] border border-[#E0EAF1] bg-white px-5 text-[14px] font-medium text-[#233A4A] hover:bg-[#F7FAFC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05AAFF]"
        >
          Export CSV
        </a>
      </div>

      {error ? (
        <p className="mt-6 rounded-[12px] border border-[#E6ECF2] bg-white px-4 py-4 text-[15px] text-[#B42318]" role="alert">
          Could not load {source.label}. Confirm the {source.table} table exists in Supabase.
        </p>
      ) : total === 0 ? (
        <p className="mt-6 rounded-[12px] border border-[#E6ECF2] bg-white px-4 py-4 text-[15px] text-[#6C7881]">
          {query
            ? `No rows match “${query}”.`
            : `No submissions yet. They appear here when someone completes ${source.publicFormLabel} (${source.publicForm}).`}
        </p>
      ) : (
        <>
          <p className="mt-5 text-[13px] text-[#6C7881]">
            Showing {from}–{to} of {total.toLocaleString()}
          </p>
          <div className="mt-3 overflow-x-auto rounded-[12px] border border-[#E6ECF2] bg-white">
            <table className="min-w-full text-left text-[13px]">
              <thead className="border-b border-[#E6ECF2] text-[#6C7881]">
                <tr>
                  {source.columns.map((column) => (
                    <th key={column.key} className="whitespace-nowrap px-3 py-3 font-medium">
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={typeof row.id === "string" ? row.id : `${source.id}-${index}`} className="border-b border-[#E6ECF2] align-top last:border-0">
                    {source.columns.map((column) => {
                      const raw = row[column.key]
                      if (column.key === "created_at") {
                        return (
                          <td key={column.key} className="whitespace-nowrap px-3 py-3 tabular-nums text-[#6C7881]">
                            {formatLagosDateTime(typeof raw === "string" ? raw : null)}
                          </td>
                        )
                      }
                      if (column.expand) {
                        const text = displayCell(raw)
                        const long = text.length > 80
                        return (
                          <td key={column.key} className="min-w-[220px] px-3 py-3">
                            {long ? (
                              <details>
                                <summary className="cursor-pointer text-[#0093FF]">View notes</summary>
                                <p className="mt-2 max-w-[36ch] whitespace-pre-wrap text-[#233A4A]">{text}</p>
                              </details>
                            ) : (
                              text
                            )}
                          </td>
                        )
                      }
                      return (
                        <td key={column.key} className="px-3 py-3">
                          {displayCell(raw)}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {pageCount > 1 ? (
            <nav className="mt-4 flex items-center gap-3 text-[14px]" aria-label="Pagination">
              {page > 1 ? (
                <Link className="text-[#0093FF] hover:underline" href={hrefFor(source.href, page - 1, query)}>
                  Previous
                </Link>
              ) : (
                <span className="text-[#AFC4D3]">Previous</span>
              )}
              <span className="text-[#6C7881]">
                Page {page} of {pageCount}
              </span>
              {page < pageCount ? (
                <Link className="text-[#0093FF] hover:underline" href={hrefFor(source.href, page + 1, query)}>
                  Next
                </Link>
              ) : (
                <span className="text-[#AFC4D3]">Next</span>
              )}
            </nav>
          ) : null}
        </>
      )}
    </div>
  )
}
