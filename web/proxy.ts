import { NextResponse, type NextRequest } from "next/server"
import { ADMIN_COOKIE, isValidSessionValue } from "@/lib/admin/session"

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === "/api/admin/login") {
    return NextResponse.next()
  }

  const valid = await isValidSessionValue(request.cookies.get(ADMIN_COOKIE)?.value)

  if (pathname.startsWith("/api/admin")) {
    if (!valid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    return NextResponse.next()
  }

  if (pathname === "/admin" || pathname === "/admin/") {
    return NextResponse.next()
  }

  if (pathname.startsWith("/admin") && !valid) {
    const url = request.nextUrl.clone()
    url.pathname = "/admin"
    url.search = ""
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/api/admin/:path*"],
}
