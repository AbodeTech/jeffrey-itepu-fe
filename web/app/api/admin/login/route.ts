import { NextResponse } from "next/server"
import { clientIp, consumeLoginAttempt } from "@/lib/admin/rate-limit"
import {
  ADMIN_COOKIE,
  createSessionValue,
  isAdminPinConfigured,
  pinsMatch,
  sessionCookieOptions,
} from "@/lib/admin/session"

export async function POST(request: Request) {
  const limit = consumeLoginAttempt(clientIp(request))
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many attempts. Try again in 15 minutes." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSec) } },
    )
  }

  if (!isAdminPinConfigured()) {
    return NextResponse.json({ error: "Invalid PIN" }, { status: 401 })
  }

  let pin = ""
  try {
    const body = (await request.json()) as { pin?: unknown }
    pin = typeof body.pin === "string" ? body.pin : ""
  } catch {
    return NextResponse.json({ error: "Invalid PIN" }, { status: 401 })
  }

  if (!(await pinsMatch(pin))) {
    return NextResponse.json({ error: "Invalid PIN" }, { status: 401 })
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set(ADMIN_COOKIE, await createSessionValue(), sessionCookieOptions())
  return response
}
