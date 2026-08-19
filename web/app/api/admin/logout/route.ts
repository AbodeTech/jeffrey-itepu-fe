import { NextResponse } from "next/server"
import { ADMIN_COOKIE, sessionCookieOptions } from "@/lib/admin/session"

export async function POST() {
  const response = NextResponse.json({ success: true })
  response.cookies.set(ADMIN_COOKIE, "", sessionCookieOptions(0))
  return response
}
