const LAGOS = "Africa/Lagos"

const dateTime = new Intl.DateTimeFormat("en-GB", {
  timeZone: LAGOS,
  dateStyle: "medium",
  timeStyle: "short",
})

const dayKey = new Intl.DateTimeFormat("en-CA", {
  timeZone: LAGOS,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
})

const dayLabel = new Intl.DateTimeFormat("en-GB", {
  timeZone: LAGOS,
  weekday: "short",
  day: "numeric",
  month: "short",
})

const monthDay = new Intl.DateTimeFormat("en-GB", {
  timeZone: LAGOS,
  day: "numeric",
  month: "short",
})

export function formatLagosShortDay(value: string): string {
  const date = new Date(`${value}T12:00:00Z`)
  if (Number.isNaN(date.getTime())) {
    return value
  }
  return dayLabel.format(date)
}

export function formatLagosDayRange(start: string, end: string): string {
  if (start === end) {
    return formatLagosShortDay(start)
  }
  const startDate = new Date(`${start}T12:00:00Z`)
  const endDate = new Date(`${end}T12:00:00Z`)
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
    return `${start} – ${end}`
  }
  return `${monthDay.format(startDate)} – ${monthDay.format(endDate)}`
}

export function dayKeysBetween(fromKey: string, toKey: string): string[] {
  const keys: string[] = []
  const start = new Date(`${fromKey}T12:00:00Z`)
  const end = new Date(`${toKey}T12:00:00Z`)
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || start > end) {
    return keys
  }

  const cursor = new Date(start)
  while (cursor <= end) {
    keys.push(lagosDayKey(cursor))
    cursor.setUTCDate(cursor.getUTCDate() + 1)
  }

  return keys
}

export function dayKeyStartIso(day: string): string {
  return new Date(`${day}T00:00:00+01:00`).toISOString()
}

export function dayKeyEndIso(day: string): string {
  return new Date(`${day}T23:59:59.999+01:00`).toISOString()
}

const monthYear = new Intl.DateTimeFormat("en-GB", {
  timeZone: LAGOS,
  month: "short",
  year: "numeric",
})

export function formatLagosMonthYear(dayKey: string): string {
  const date = new Date(`${dayKey.slice(0, 7)}-15T12:00:00Z`)
  if (Number.isNaN(date.getTime())) {
    return dayKey.slice(0, 7)
  }
  return monthYear.format(date)
}

export function formatLagosDisplayRange(fromKey: string, toKey: string): string {
  if (fromKey === toKey) {
    return formatLagosShortDay(fromKey)
  }
  return `${formatLagosShortDay(fromKey)} – ${formatLagosShortDay(toKey)}`
}

export function formatLagosDateTime(value: string | null | undefined): string {
  if (!value) {
    return "—"
  }
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return String(value)
  }
  return dateTime.format(date)
}

export function lagosDayKey(value: Date | string): string {
  const date = typeof value === "string" ? new Date(value) : value
  return dayKey.format(date)
}

export function lastNDayKeys(days: number, from = new Date()): string[] {
  const keys: string[] = []
  for (let i = days - 1; i >= 0; i -= 1) {
    const date = new Date(from)
    date.setUTCDate(date.getUTCDate() - i)
    keys.push(lagosDayKey(date))
  }
  return keys
}

export function daysAgoIso(days: number): string {
  const date = new Date()
  date.setUTCDate(date.getUTCDate() - days)
  return date.toISOString()
}

export function displayCell(value: unknown): string {
  if (value === null || value === undefined || value === "") {
    return "—"
  }
  if (typeof value === "boolean") {
    return value ? "Yes" : "No"
  }
  return String(value)
}

export function csvEscape(value: unknown): string {
  const text = value === null || value === undefined ? "" : String(value)
  if (/[",\n\r]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`
  }
  return text
}
