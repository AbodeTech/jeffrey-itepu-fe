/**
 * Staff PIN gate for /admin.
 *
 * ADMIN_PIN — shared staff PIN (never NEXT_PUBLIC).
 * ADMIN_SESSION_SECRET — optional HMAC key; if omitted, derived from ADMIN_PIN
 * plus a fixed pepper so the PIN is never sent to the browser.
 *
 * Cookie path is `/` so /admin pages and /api/admin routes both receive it.
 * Changing ADMIN_PIN invalidates existing sessions (fingerprint is bound into the HMAC).
 */

export const ADMIN_COOKIE = "admin_session"
export const ADMIN_SESSION_MAX_AGE = 12 * 60 * 60

function getAdminPin(): string {
  return process.env.ADMIN_PIN ?? ""
}

export function isAdminPinConfigured(): boolean {
  return getAdminPin().length > 0
}

function getSigningSecret(): string {
  const explicit = process.env.ADMIN_SESSION_SECRET
  if (explicit) {
    return explicit
  }
  return `abode-jeff-admin-v1:${getAdminPin()}`
}

function bytesToHex(bytes: ArrayBuffer): string {
  return Array.from(new Uint8Array(bytes))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")
}

export async function sha256Hex(value: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value))
  return bytesToHex(digest)
}

function timingSafeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) {
    return false
  }
  let diff = 0
  for (let i = 0; i < a.length; i += 1) {
    diff |= a[i]! ^ b[i]!
  }
  return diff === 0
}

async function pinFingerprint(): Promise<string> {
  const hash = await sha256Hex(getAdminPin())
  return hash.slice(0, 16)
}

export async function pinsMatch(candidate: string): Promise<boolean> {
  const expected = getAdminPin()
  if (!expected || !candidate) {
    return false
  }
  const [left, right] = await Promise.all([sha256Hex(candidate), sha256Hex(expected)])
  const a = Uint8Array.from(left.match(/.{2}/g)!.map((hex) => Number.parseInt(hex, 16)))
  const b = Uint8Array.from(right.match(/.{2}/g)!.map((hex) => Number.parseInt(hex, 16)))
  return timingSafeEqual(a, b)
}

function arrayBufferToBase64Url(buffer: ArrayBuffer): string {
  let binary = ""
  const bytes = new Uint8Array(buffer)
  for (let i = 0; i < bytes.length; i += 1) {
    binary += String.fromCharCode(bytes[i]!)
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

async function hmacBase64Url(message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSigningSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  )
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message))
  return arrayBufferToBase64Url(signature)
}

export async function createSessionValue(): Promise<string> {
  const exp = Math.floor(Date.now() / 1000) + ADMIN_SESSION_MAX_AGE
  const fingerprint = await pinFingerprint()
  const payload = `${exp}.${fingerprint}`
  const mac = await hmacBase64Url(payload)
  return `${payload}.${mac}`
}

export async function isValidSessionValue(value: string | undefined): Promise<boolean> {
  if (!value || !getAdminPin()) {
    return false
  }
  const parts = value.split(".")
  if (parts.length !== 3) {
    return false
  }
  const [expStr, fingerprint, mac] = parts
  const exp = Number(expStr)
  if (!Number.isFinite(exp) || exp * 1000 < Date.now()) {
    return false
  }
  const expectedFingerprint = await pinFingerprint()
  if (fingerprint !== expectedFingerprint) {
    return false
  }
  const expectedMac = await hmacBase64Url(`${expStr}.${fingerprint}`)
  const left = new TextEncoder().encode(mac)
  const right = new TextEncoder().encode(expectedMac)
  if (left.length !== right.length) {
    return false
  }
  return timingSafeEqual(left, right)
}

export function sessionCookieOptions(maxAge = ADMIN_SESSION_MAX_AGE) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge,
  }
}
