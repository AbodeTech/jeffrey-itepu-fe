"use client"

import { useEffect, useRef, useState } from "react"
import { CalendarDays, ChevronDown } from "lucide-react"
import { lagosDayKey } from "../format"

export type AdminDateRange = {
  from: string
  to: string
  label: string
}

function addDays(date: Date, days: number): Date {
  const next = new Date(date)
  next.setUTCDate(next.getUTCDate() + days)
  return next
}

function startOfWeekMonday(date: Date): Date {
  const next = new Date(date)
  const weekday = next.getUTCDay()
  const offset = weekday === 0 ? 6 : weekday - 1
  next.setUTCDate(next.getUTCDate() - offset)
  return next
}

function startOfMonth(date: Date): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1))
}

function endOfMonth(date: Date): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0))
}

function toRange(from: Date, to: Date, label: string): AdminDateRange {
  return {
    from: lagosDayKey(from),
    to: lagosDayKey(to),
    label,
  }
}

function defaultRange(): AdminDateRange {
  const to = new Date()
  const from = addDays(to, -29)
  return toRange(from, to, "Last 30 days")
}

const presets: { label: string; getRange: () => AdminDateRange }[] = [
  {
    label: "Today",
    getRange: () => {
      const now = new Date()
      return toRange(now, now, "Today")
    },
  },
  {
    label: "Last 7 days",
    getRange: () => toRange(addDays(new Date(), -6), new Date(), "Last 7 days"),
  },
  {
    label: "This week",
    getRange: () => toRange(startOfWeekMonday(new Date()), new Date(), "This week"),
  },
  {
    label: "Last week",
    getRange: () => {
      const lastWeek = addDays(new Date(), -7)
      const from = startOfWeekMonday(lastWeek)
      const to = addDays(from, 6)
      return toRange(from, to, "Last week")
    },
  },
  {
    label: "This month",
    getRange: () => toRange(startOfMonth(new Date()), new Date(), "This month"),
  },
  {
    label: "Last month",
    getRange: () => {
      const lastMonth = new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth() - 1, 15))
      return toRange(startOfMonth(lastMonth), endOfMonth(lastMonth), "Last month")
    },
  },
  {
    label: "Last 30 days",
    getRange: () => defaultRange(),
  },
  {
    label: "Last 90 days",
    getRange: () => toRange(addDays(new Date(), -89), new Date(), "Last 90 days"),
  },
]

export function defaultAdminDateRange(): AdminDateRange {
  return defaultRange()
}

export function AdminDateRangePicker({
  value,
  onChange,
}: {
  value: AdminDateRange
  onChange: (range: AdminDateRange) => void
}) {
  const [open, setOpen] = useState(false)
  const [customOpen, setCustomOpen] = useState(false)
  const [customFrom, setCustomFrom] = useState("")
  const [customTo, setCustomTo] = useState("")
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
        setCustomOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  function selectPreset(preset: (typeof presets)[number]) {
    onChange(preset.getRange())
    setOpen(false)
    setCustomOpen(false)
  }

  function applyCustom() {
    if (!customFrom || !customTo || customFrom > customTo) {
      return
    }
    onChange({
      from: customFrom,
      to: customTo,
      label: `${customFrom} – ${customTo}`,
    })
    setOpen(false)
    setCustomOpen(false)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-[10px] border border-[#E6ECF2] bg-white px-3 py-2 text-[13px] font-medium text-[#233A4A] shadow-sm transition hover:border-[#CBD5E1]"
      >
        <CalendarDays size={15} className="text-[#6C7881]" />
        <span>{value.label}</span>
        <ChevronDown size={14} className={`text-[#6C7881] transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div className="absolute right-0 top-full z-50 mt-2 w-72 rounded-[12px] border border-[#E6ECF2] bg-white p-2 shadow-lg">
          <p className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#6C7881]">
            Quick ranges
          </p>
          {presets.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => selectPreset(preset)}
              className={`flex w-full items-center rounded-[8px] px-3 py-2 text-left text-[13px] transition hover:bg-[#F6F7FB] ${
                value.label === preset.label ? "bg-[#E8F7FF] font-medium text-[#0093FF]" : "text-[#233A4A]"
              }`}
            >
              {preset.label}
            </button>
          ))}

          <div className="my-1 border-t border-[#E6ECF2]" />

          <button
            type="button"
            onClick={() => setCustomOpen(!customOpen)}
            className="flex w-full items-center rounded-[8px] px-3 py-2 text-left text-[13px] text-[#233A4A] transition hover:bg-[#F6F7FB]"
          >
            Custom range…
          </button>

          {customOpen ? (
            <div className="mt-1 space-y-2 rounded-[8px] bg-[#F6F7FB] p-3">
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <label className="text-[10px] font-medium uppercase tracking-wide text-[#6C7881]">From</label>
                  <input
                    type="date"
                    value={customFrom}
                    onChange={(event) => setCustomFrom(event.target.value)}
                    className="mt-0.5 w-full rounded-[8px] border border-[#E6ECF2] bg-white px-2.5 py-1.5 text-[13px] text-[#233A4A] outline-none focus:border-[#05AAFF]"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-[10px] font-medium uppercase tracking-wide text-[#6C7881]">To</label>
                  <input
                    type="date"
                    value={customTo}
                    onChange={(event) => setCustomTo(event.target.value)}
                    className="mt-0.5 w-full rounded-[8px] border border-[#E6ECF2] bg-white px-2.5 py-1.5 text-[13px] text-[#233A4A] outline-none focus:border-[#05AAFF]"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={applyCustom}
                disabled={!customFrom || !customTo}
                className="w-full rounded-[8px] bg-[#05AAFF] px-3 py-2 text-[12px] font-semibold text-white transition hover:bg-[#0093FF] disabled:opacity-40"
              >
                Apply range
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
