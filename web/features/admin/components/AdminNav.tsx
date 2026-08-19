"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ADMIN_SOURCES } from "../catalog"
import { cn } from "@/lib/utils"

const links = [{ href: "/admin", label: "Overview" }, ...ADMIN_SOURCES.map((source) => ({ href: source.href, label: source.label }))]

export function AdminNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        type="button"
        className="flex h-10 w-full cursor-pointer items-center justify-between rounded-[10px] border border-[#E6ECF2] bg-white px-3 text-[14px] font-medium text-[#233A4A] lg:hidden"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        Menu
        <span aria-hidden>{open ? "–" : "+"}</span>
      </button>
      <nav
        className={cn("mt-3 flex-col gap-1 lg:mt-0 lg:flex", open ? "flex" : "hidden lg:flex")}
        aria-label="Admin"
      >
        {links.map((link) => {
          const current = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-[10px] px-3 py-2.5 text-[14px] font-medium text-[#5A5A5A] hover:bg-[#E8F2FC] hover:text-[#05AAFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05AAFF]",
                current && "bg-[#E8F2FC] text-[#05AAFF]",
              )}
              aria-current={current ? "page" : undefined}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
