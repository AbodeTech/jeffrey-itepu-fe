"use client"

import { useState } from "react"

export function AdminSignOutButton() {
  const [pending, setPending] = useState(false)

  async function onClick() {
    if (pending) {
      return
    }
    setPending(true)
    try {
      await fetch("/api/admin/logout", { method: "POST" })
      window.location.assign("/admin")
    } finally {
      setPending(false)
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={pending}
      className="cursor-pointer rounded-[10px] px-3 py-2 text-[14px] font-medium text-[#233A4A] hover:bg-[#E8F2FC] hover:text-[#05AAFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05AAFF] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Signing out…" : "Sign out"}
    </button>
  )
}
