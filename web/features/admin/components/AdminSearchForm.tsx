"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Input } from "@/components/ui/input"

export function AdminSearchForm({
  action,
  query,
}: {
  action: string
  query: string
}) {
  const router = useRouter()
  const [value, setValue] = useState(query)

  return (
    <form
      className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center"
      action={action}
      method="get"
      onSubmit={(event) => {
        event.preventDefault()
        const next = value.trim()
        const params = new URLSearchParams()
        if (next) {
          params.set("q", next)
        }
        params.set("page", "1")
        router.push(`${action}?${params.toString()}`)
      }}
    >
      <label className="sr-only" htmlFor="admin-search">
        Search
      </label>
      <Input
        id="admin-search"
        name="q"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search name or email"
        className="h-12 rounded-[12px] border-[#DCE0E7]"
      />
      <button
        type="submit"
        className="h-12 shrink-0 cursor-pointer rounded-[12px] bg-[#233A4A] px-5 text-[14px] font-medium text-white hover:bg-[#1a2c39] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05AAFF]"
      >
        Search
      </button>
    </form>
  )
}
