import { NextResponse } from "next/server"
import { sendBookJeffNotification, sendBookJeffConfirmation } from "@/lib/zepto-mail"
import { createAdminClient } from "@/lib/supabase/admin"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      fullName,
      organization,
      email,
      phone,
      eventType,
      eventDate,
      eventLocation,
      format,
      additionalNotes,
    } = body

    // Validate required fields
    if (!fullName?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: "Full name, email, and phone are required." },
        { status: 400 }
      )
    }

    if (!eventType || !eventDate || !eventLocation || !format) {
      return NextResponse.json(
        { error: "Event type, date, location, and format are required." },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    // Save to Supabase
    const supabase = createAdminClient()
    const { error: dbError } = await supabase.from("book_jeff_submissions").insert({
      full_name: fullName.trim(),
      organization: organization?.trim() || null,
      email: email.trim(),
      phone: phone.trim(),
      event_type: eventType,
      event_date: eventDate,
      event_location: eventLocation.trim(),
      format: format,
      additional_notes: additionalNotes?.trim() || null,
    })

    if (dbError) {
      console.error("Supabase insert error:", dbError)
      return NextResponse.json(
        { error: "Failed to save submission. Please try again." },
        { status: 500 }
      )
    }

    // Send notification to Jeff
    await sendBookJeffNotification({
      fullName: fullName.trim(),
      organization: organization?.trim() || "Not provided",
      email: email.trim(),
      phone: phone.trim(),
      eventType,
      eventDate,
      eventLocation: eventLocation.trim(),
      format,
      additionalNotes: additionalNotes?.trim() || "",
    })

    // Send confirmation to user
    await sendBookJeffConfirmation({
      to_email: email.trim(),
      to_name: fullName.trim().split(" ")[0],
    })

    return NextResponse.json({ success: true }, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: "Failed to process request. Please try again." },
      { status: 500 }
    )
  }
}
