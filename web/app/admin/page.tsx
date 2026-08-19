import { AdminOverview, AdminPinGate } from "@/features/admin"
import { loadOverview } from "@/features/admin/queries"
import { hasAdminSession } from "@/lib/admin/guard"
import { isAdminPinConfigured } from "@/lib/admin/session"

export default async function AdminPage() {
  const signedIn = await hasAdminSession()
  if (!signedIn) {
    return <AdminPinGate configured={isAdminPinConfigured()} />
  }

  const data = await loadOverview()
  return <AdminOverview data={data} />
}
