export const ADMIN_PAGE_SIZE = 25
export const ADMIN_EXPORT_LIMIT = 5000

export type AdminSourceId =
  | "contact"
  | "book-jeff"
  | "ownership-network"
  | "ledger"
  | "webinar"

export type AdminColumn = {
  key: string
  label: string
  expand?: boolean
}

export type AdminSource = {
  id: AdminSourceId
  table: string
  label: string
  href: `/${string}`
  publicForm: string
  publicFormLabel: string
  searchColumns: string[]
  select: string
  columns: AdminColumn[]
  breakdowns: { title: string; column: string }[]
  titleField: string
}

export const ADMIN_SOURCES: AdminSource[] = [
  {
    id: "contact",
    table: "contact_submissions",
    label: "Contact",
    href: "/admin/contact",
    publicForm: "/contact",
    publicFormLabel: "Contact form",
    searchColumns: ["email", "first_name", "last_name", "phone"],
    select: "id, created_at, first_name, last_name, email, phone, reason",
    columns: [
      { key: "created_at", label: "Received" },
      { key: "first_name", label: "First name" },
      { key: "last_name", label: "Last name" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "reason", label: "Reason" },
    ],
    breakdowns: [{ title: "Reason", column: "reason" }],
    titleField: "email",
  },
  {
    id: "book-jeff",
    table: "book_jeff_submissions",
    label: "Book Jeff",
    href: "/admin/book-jeff",
    publicForm: "/book-jeff",
    publicFormLabel: "Book Jeff form",
    searchColumns: ["email", "full_name", "organization", "phone", "event_location"],
    select:
      "id, created_at, full_name, organization, email, phone, event_type, event_date, event_location, format, additional_notes",
    columns: [
      { key: "created_at", label: "Received" },
      { key: "full_name", label: "Name" },
      { key: "organization", label: "Organization" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "event_type", label: "Event type" },
      { key: "event_date", label: "Event date" },
      { key: "event_location", label: "Location" },
      { key: "format", label: "Format" },
      { key: "additional_notes", label: "Notes", expand: true },
    ],
    breakdowns: [
      { title: "Event type", column: "event_type" },
      { title: "Format", column: "format" },
    ],
    titleField: "full_name",
  },
  {
    id: "ownership-network",
    table: "ownership_network_applications",
    label: "Ownership Network",
    href: "/admin/ownership-network",
    publicForm: "/ownership-network",
    publicFormLabel: "Ownership Network form",
    searchColumns: ["email", "first_name", "last_name", "phone", "channel"],
    select: "id, created_at, first_name, last_name, email, phone, channel",
    columns: [
      { key: "created_at", label: "Received" },
      { key: "first_name", label: "First name" },
      { key: "last_name", label: "Last name" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "channel", label: "Channel" },
    ],
    breakdowns: [{ title: "Channel", column: "channel" }],
    titleField: "email",
  },
  {
    id: "ledger",
    table: "newsletter_subscribers",
    label: "Ownership Ledger",
    href: "/admin/ledger",
    publicForm: "/",
    publicFormLabel: "Subscribe to The Ownership Ledger",
    searchColumns: ["email"],
    select: "id, created_at, email",
    columns: [
      { key: "created_at", label: "Received" },
      { key: "email", label: "Email" },
    ],
    breakdowns: [],
    titleField: "email",
  },
  {
    id: "webinar",
    table: "mr_jefferey_master_class",
    label: "Webinar register",
    href: "/admin/webinar",
    publicForm: "/register",
    publicFormLabel: "Webinar registration form",
    searchColumns: ["email", "first_name", "last_name", "phone", "invited_by"],
    select:
      "id, created_at, first_name, last_name, email, phone, gender, age_bracket, status, is_abode_associate, abodeflex_email, region, previous_attendee, referral_source, invited_by, confirmation_email_status, confirmation_email_sent_at",
    columns: [
      { key: "created_at", label: "Received" },
      { key: "first_name", label: "First name" },
      { key: "last_name", label: "Last name" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "gender", label: "Gender" },
      { key: "age_bracket", label: "Age" },
      { key: "status", label: "Status" },
      { key: "region", label: "Region" },
      { key: "referral_source", label: "Referral source" },
      { key: "invited_by", label: "Invited by" },
      { key: "is_abode_associate", label: "Abode associate" },
      { key: "previous_attendee", label: "Previous attendee" },
      { key: "confirmation_email_status", label: "Email status" },
    ],
    breakdowns: [
      { title: "Referral source", column: "referral_source" },
      { title: "Region", column: "region" },
    ],
    titleField: "email",
  },
]

export function getAdminSource(id: string): AdminSource | undefined {
  return ADMIN_SOURCES.find((source) => source.id === id)
}
