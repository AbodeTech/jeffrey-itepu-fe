import { NextResponse } from "next/server"
import { ADMIN_COOKIE, isValidSessionValue } from "@/lib/admin/session"
import { buildLedgerRangeStats } from "@/lib/admin/range-stats"

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
  const from = url.searchParams.get("from") ?? ""
  const to = url.searchParams.get("to") ?? ""

  try {
    const data = await buildLedgerRangeStats(from, to)
    return NextResponse.json(data)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not load stats."
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
