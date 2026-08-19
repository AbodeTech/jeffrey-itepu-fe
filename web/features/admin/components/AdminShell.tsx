import { AdminNav } from "./AdminNav"
import { AdminSignOutButton } from "./AdminSignOutButton"

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-ledger min-h-full bg-[#F6F7FB] text-[#233A4A]">
      <header className="border-b border-[#E6ECF2] bg-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div>
            <p className="text-[12px] font-medium tracking-[0.04em] text-[#6C7881]">Jeffrey Itepu</p>
            <p
              className="text-[18px] font-bold leading-tight tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-agrandir)" }}
            >
              Ownership ledger
            </p>
          </div>
          <AdminSignOutButton />
        </div>
      </header>
      <div className="mx-auto grid max-w-[1280px] gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:py-8">
        <aside className="lg:border-r lg:border-[#E6ECF2] lg:pr-5">
          <AdminNav />
        </aside>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  )
}
