import { createAdminClient } from "@/lib/supabase/admin"
import { sendRegistrationConfirmation } from "@/lib/zepto-mail"
import { NextResponse } from "next/server"

const REGISTRATIONS_TABLE = "mr_jefferey_master_class"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      first_name,
      last_name,
      email,
      phone,
      gender,
      age_bracket,
      status,
      is_abode_associate,
      region,
      previous_attendee,
      referral_source,
      referral_name,
      abodeflex_email,
    } = body

    // Validate required fields
    if (!first_name?.trim() || !last_name?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: "First name, last name, email, and phone are required." },
        { status: 400 }
      )
    }

    if (!gender || !age_bracket) {
      return NextResponse.json(
        { error: "Gender and age bracket are required." },
        { status: 400 }
      )
    }

    if (!status || !region) {
      return NextResponse.json(
        { error: "Status and region are required." },
        { status: 400 }
      )
    }

    if (!referral_source || !referral_name?.trim()) {
      return NextResponse.json(
        { error: "Referral source and referral name are required." },
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

    const supabase = createAdminClient()

    // Insert registration into Supabase
    const { data: inserted, error } = await supabase.from(REGISTRATIONS_TABLE).insert({
      first_name: first_name.trim(),
      last_name: last_name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      gender,
      age_bracket,
      status,
      is_abode_associate: is_abode_associate || null,
      abodeflex_email: abodeflex_email || null,
      region,
      previous_attendee: previous_attendee || null,
      referral_source,
      invited_by: referral_name.trim(),
    }).select('id').single()

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already registered." },
          { status: 409 }
        )
      }
      console.error("[register] Supabase insert error:", error)
      return NextResponse.json(
        { error: "Registration failed. Please try again." },
        { status: 500 }
      )
    }

    const registrationId = inserted?.id
    const cleanEmail = email.trim().toLowerCase()
    const cleanName = first_name.trim()

    // Send confirmation email (fire-and-forget, don't block the response)
    ;(async () => {
      try {
        console.log(`[email] Sending confirmation to ${cleanEmail}`)
        await sendRegistrationConfirmation({ to_email: cleanEmail, to_name: cleanName })
        console.log(`[email] Confirmation sent successfully to ${cleanEmail}`)

        // Update the registration row with email status
        if (registrationId) {
          await supabase
            .from(REGISTRATIONS_TABLE)
            .update({
              confirmation_email_status: "sent",
              confirmation_email_sent_at: new Date().toISOString(),
            })
            .eq("id", registrationId)
        }
      } catch (err) {
        console.error(`[email] Failed to send confirmation to ${cleanEmail}:`, err)

        if (registrationId) {
          await supabase
            .from(REGISTRATIONS_TABLE)
            .update({ confirmation_email_status: "failed" })
            .eq("id", registrationId)
        }
      }
    })()

    return NextResponse.json({ success: true }, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 }
    )
  }
}
