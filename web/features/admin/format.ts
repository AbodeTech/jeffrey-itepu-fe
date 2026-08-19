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
