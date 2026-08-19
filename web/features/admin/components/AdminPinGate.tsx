"use client"

import { useEffect, useRef, useState } from "react"

const PIN_LENGTH = 4

function onlyDigits(value: string) {
  return value.replace(/\D/g, "").slice(0, PIN_LENGTH)
}

export function AdminPinGate({ configured }: { configured: boolean }) {
  const [digits, setDigits] = useState(["", "", "", ""])
  const [error, setError] = useState("")
  const [pending, setPending] = useState(false)
  const [shake, setShake] = useState(false)
  const inputs = useRef<Array<HTMLInputElement | null>>([])
  const submitting = useRef(false)

  const pin = digits.join("")
  const complete = pin.length === PIN_LENGTH

  useEffect(() => {
    if (configured) {
      inputs.current[0]?.focus()
    }
  }, [configured])

  function writeDigits(next: string[], focusIndex: number) {
    setDigits(next)
    const target = Math.min(Math.max(focusIndex, 0), PIN_LENGTH - 1)
    requestAnimationFrame(() => inputs.current[target]?.focus())
  }

  function fail(message: string) {
    setError(message)
    setShake(true)
    setDigits(["", "", "", ""])
    submitting.current = false
    setPending(false)
    requestAnimationFrame(() => inputs.current[0]?.focus())
  }

  async function submitPin(value: string) {
    if (submitting.current || value.length !== PIN_LENGTH) {
      return
    }
    submitting.current = true
    setPending(true)
    setError("")
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: value }),
      })
      const result = (await response.json()) as { error?: string }
      if (!response.ok) {
        fail(result.error || "That PIN is incorrect. Try again.")
        return
      }
      window.location.assign("/admin")
    } catch {
      fail("Network error. Check your connection and try again.")
    }
  }

  function onChange(index: number, raw: string) {
    const incoming = onlyDigits(raw)
    if (!incoming) {
      const next = [...digits]
      next[index] = ""
      writeDigits(next, index)
      return
    }

    if (incoming.length > 1) {
      const filled = onlyDigits(digits.join("").slice(0, index) + incoming).split("")
      const next = ["", "", "", ""].map((_, i) => filled[i] ?? "")
      writeDigits(next, Math.min(filled.length, PIN_LENGTH - 1))
      if (filled.length === PIN_LENGTH) {
        void submitPin(filled.join(""))
      }
      return
    }

    const next = [...digits]
    next[index] = incoming
    const nextIndex = index < PIN_LENGTH - 1 ? index + 1 : index
    writeDigits(next, nextIndex)
    if (next.every(Boolean)) {
      void submitPin(next.join(""))
    }
  }

  function onKeyDown(index: number, event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" && !digits[index] && index > 0) {
      event.preventDefault()
      const next = [...digits]
      next[index - 1] = ""
      writeDigits(next, index - 1)
    }
    if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault()
      inputs.current[index - 1]?.focus()
    }
    if (event.key === "ArrowRight" && index < PIN_LENGTH - 1) {
      event.preventDefault()
      inputs.current[index + 1]?.focus()
    }
  }

  function onPaste(event: React.ClipboardEvent<HTMLInputElement>) {
    event.preventDefault()
    const pasted = onlyDigits(event.clipboardData.getData("text"))
    if (!pasted) {
      return
    }
    const next = ["", "", "", ""].map((_, i) => pasted[i] ?? "")
    writeDigits(next, Math.min(pasted.length, PIN_LENGTH) - 1)
    if (pasted.length === PIN_LENGTH) {
      void submitPin(pasted)
    }
  }

  return (
    <div className="relative flex min-h-full flex-1 items-center justify-center overflow-hidden px-4 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[280px] bg-[radial-gradient(ellipse_at_top,_rgba(5,170,255,0.16),_transparent_58%)]"
      />
      <div className="relative w-full max-w-[440px] text-center">
        <h1
          className="text-center! text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-[#233A4A] sm:text-[44px]"
          style={{ fontFamily: "var(--font-agrandir)", textAlign: "center" }}
        >
          Admin Panel
        </h1>

        {!configured ? (
          <p className="mt-10 rounded-[16px] border border-[#E6ECF2] bg-white px-5 py-5 text-left text-[15px] leading-[1.55] text-[#233A4A]">
            Admin PIN is not configured. Set <span className="font-medium">ADMIN_PIN</span> to a
            4-digit code in the server environment and reload.
          </p>
        ) : (
          <form
            className="mt-10"
            onSubmit={(event) => {
              event.preventDefault()
              void submitPin(pin)
            }}
          >
            <fieldset>
              <legend className="sr-only">4-digit PIN</legend>
              <div
                className={`flex justify-center gap-3 ${shake ? "admin-pin-shake" : ""}`}
                onAnimationEnd={() => setShake(false)}
              >
                {digits.map((digit, index) => (
                  <input
                    key={index}
                    ref={(node) => {
                      inputs.current[index] = node
                    }}
                    id={index === 0 ? "admin-pin" : undefined}
                    name={index === 0 ? "pin" : undefined}
                    type="password"
                    inputMode="numeric"
                    autoComplete={index === 0 ? "one-time-code" : "off"}
                    pattern="[0-9]*"
                    maxLength={1}
                    aria-label={`Digit ${index + 1} of 4`}
                    value={digit}
                    disabled={pending}
                    onChange={(event) => onChange(index, event.target.value)}
                    onKeyDown={(event) => onKeyDown(index, event)}
                    onPaste={onPaste}
                    onFocus={(event) => event.currentTarget.select()}
                    className="h-[72px] w-[64px] rounded-[16px] border border-[#DCE0E7] bg-white text-center text-[28px] font-bold tracking-[0.2em] text-[#233A4A] caret-[#05AAFF] shadow-[0_8px_18px_rgba(35,58,74,0.06)] outline-none transition-[border-color,box-shadow] placeholder:text-[#DCE0E7] focus:border-[#05AAFF] focus:shadow-[0_10px_24px_rgba(5,170,255,0.18)] disabled:cursor-not-allowed disabled:opacity-60 sm:h-[80px] sm:w-[72px] sm:text-[32px]"
                    style={{ fontFamily: "var(--font-agrandir)" }}
                  />
                ))}
              </div>
            </fieldset>

            {error ? (
              <p className="mt-4 text-[14px] text-[#B42318]" role="alert">
                {error}
              </p>
            ) : (
              <p className="mt-4 text-[14px] text-[#6C7881]">
                {pending ? "Checking…" : "Enters automatically when all four are filled."}
              </p>
            )}

            <button
              type="submit"
              disabled={pending || !complete}
              className="mt-8 inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-2xl bg-[#2CB5F8] text-[15px] font-medium text-white shadow-[0_8px_20px_rgba(44,181,248,0.28)] hover:bg-[#1C9BE0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05AAFF] disabled:cursor-not-allowed disabled:bg-[#AFC4D3] disabled:shadow-none"
            >
              {pending ? "Checking…" : "Continue"}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
