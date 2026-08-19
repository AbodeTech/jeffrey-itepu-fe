import { NextResponse } from "next/server"
import { ADMIN_EXPORT_LIMIT, getAdminSource } from "@/features/admin/catalog"
import { csvEscape, formatLagosDateTime } from "@/features/admin/format"
import { exportSourceRows } from "@/features/admin/queries"
import { ADMIN_COOKIE, isValidSessionValue } from "@/lib/admin/session"

function sessionCookieFromRequest(request: Request): string | undefined {
  const header = request.headers.get("cookie")
  if (!header) {
    return undefined
  }
  for (const part of header.split(";")) {
    const [name, ...rest] = part.trim().split("=")
    if (name === ADMIN_COOKIE) {
      return rest.join("=")
    }
  }
  return undefined
}

export async function GET(request: Request) {
  if (!(await isValidSessionValue(sessionCookieFromRequest(request)))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const url = new URL(request.url)
  const source = getAdminSource(url.searchParams.get("source") ?? "")
  if (!source) {
    return NextResponse.json({ error: "Unknown source." }, { status: 400 })
  }

  const { rows, error } = await exportSourceRows(source)
  if (error) {
    return NextResponse.json({ error: "Could not export this table." }, { status: 500 })
  }

  const header = source.columns.map((column) => csvEscape(column.label)).join(",")
  const lines = rows.map((row) =>
    source.columns
      .map((column) => {
        const value = column.key === "created_at" ? formatLagosDateTime(String(row.created_at ?? "")) : row[column.key]
        return csvEscape(value)
      })
      .join(","),
  )
  const csv = `${header}\n${lines.join("\n")}\n`

  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${source.id}-submissions.csv"`,
      "X-Export-Limit": String(ADMIN_EXPORT_LIMIT),
    },
  })
}
