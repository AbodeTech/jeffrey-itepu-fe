import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, reason } = body

    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !reason?.trim()
    ) {
      return NextResponse.json(
        { error: "First name, last name, email, phone, and reason are required." },
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
    const { error: dbError } = await supabase.from("contact_submissions").insert({
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      reason: reason.trim(),
    })

    if (dbError) {
      console.error("Supabase contact insert error:", dbError)
      return NextResponse.json(
        { error: "Failed to save submission. Please try again." },
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
