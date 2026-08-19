/**
 * THESIS: A staff ledger of inbound ownership actions, not a marketing page and not identical SaaS metric tiles.
 * OWN-WORLD: Cool paper ground, ink navy type, Jeff Sky only for current nav and volume bars; Delight UI, Agrandir titles.
 * STORY: Staff unlock with a PIN, scan form volume, open a source, export or follow up.
 * FIRST VIEWPORT: Four large PIN cells on cool paper; after unlock, the source-count table is the first working surface.
 * FORM: Specified Operate dashboard inside the established Jeffrey Itepu system; no public nav.
 */
import type { Metadata } from "next"
import { cookies } from "next/headers"
import { AdminShell } from "@/features/admin"
import { ADMIN_COOKIE, isValidSessionValue } from "@/lib/admin/session"

export const metadata: Metadata = {
  title: "Ownership ledger — Admin",
  robots: { index: false, follow: false },
}

export const dynamic = "force-dynamic"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const store = await cookies()
  const signedIn = await isValidSessionValue(store.get(ADMIN_COOKIE)?.value)

  if (!signedIn) {
    return <div className="admin-ledger min-h-full bg-[#F6F7FB]">{children}</div>
  }

  return <AdminShell>{children}</AdminShell>
}
