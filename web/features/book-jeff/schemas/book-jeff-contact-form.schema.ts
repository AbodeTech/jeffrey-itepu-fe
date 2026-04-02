export type BookJeffContactFormValues = {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  format: string;
  additionalNotes: string;
};

export const initialBookJeffContactFormValues: BookJeffContactFormValues = {
  fullName: "Jeffery Itepu",
  organization: "New Co",
  email: "jeff@ess.com",
  phone: "+2348188337211",
  eventType: "Conference",
  eventDate: "2026-10-22",
  eventLocation: "Lagos, Nigeria",
  format: "In-Person",
  additionalNotes: "",
};

export function isBookJeffContactFormValid(values: BookJeffContactFormValues): boolean {
  return Boolean(
    values.fullName.trim() &&
      values.organization.trim() &&
      values.email.trim() &&
      values.phone.trim() &&
      values.eventType.trim() &&
      values.eventDate.trim() &&
      values.eventLocation.trim() &&
      values.format.trim(),
  );
}
