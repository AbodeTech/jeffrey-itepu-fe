/**
 * Per-instance login rate limit. Does not share state across serverless
 * instances; adequate for a single Node process / one Vercel region.
 */

const WINDOW_MS = 15 * 60 * 1000
const MAX_ATTEMPTS = 5

type Bucket = { count: number; resetAt: number }

const attempts = new Map<string, Bucket>()

export function consumeLoginAttempt(ip: string): { ok: true } | { ok: false; retryAfterSec: number } {
  const now = Date.now()
  const current = attempts.get(ip)

  if (!current || current.resetAt <= now) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return { ok: true }
  }

  if (current.count >= MAX_ATTEMPTS) {
    return { ok: false, retryAfterSec: Math.max(1, Math.ceil((current.resetAt - now) / 1000)) }
  }

  current.count += 1
  return { ok: true }
}

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) {
    return forwarded.split(",")[0]!.trim()
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown"
}
