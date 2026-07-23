import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email?.trim()) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 },
      )
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      )
    }

    const supabase = createAdminClient()
    const { error: dbError } = await supabase.from("newsletter_subscribers").insert({
      email: email.trim().toLowerCase(),
    })

    if (dbError) {
      if (dbError.code === "23505") {
        return NextResponse.json(
          { error: "This email is already subscribed." },
          { status: 409 },
        )
      }
      console.error("Supabase newsletter insert error:", dbError)
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true }, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: "Failed to process request. Please try again." },
      { status: 500 },
    )
  }
}
