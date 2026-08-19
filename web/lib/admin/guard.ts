import { cookies } from "next/headers"
import { ADMIN_COOKIE, isValidSessionValue } from "@/lib/admin/session"

export async function hasAdminSession(): Promise<boolean> {
  const store = await cookies()
  return isValidSessionValue(store.get(ADMIN_COOKIE)?.value)
}
