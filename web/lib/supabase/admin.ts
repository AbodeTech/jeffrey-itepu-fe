import { createClient } from "@supabase/supabase-js"

/**
 * Admin Supabase client using the service role key.
 * This bypasses RLS and should ONLY be used in server-side code (API routes).
 * Never expose this to the client.
 */
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  )
}
