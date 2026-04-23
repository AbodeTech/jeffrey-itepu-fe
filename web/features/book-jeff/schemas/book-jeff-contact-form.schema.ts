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
  fullName: "",
  organization: "",
  email: "",
  phone: "",
  eventType: "Conference",
  eventDate: "",
  eventLocation: "",
  format: "In-Person",
  additionalNotes: "",
};

export function isBookJeffContactFormValid(values: BookJeffContactFormValues): boolean {
  return Boolean(
    values.fullName.trim() &&
      values.email.trim() &&
      values.phone.trim() &&
      values.eventType.trim() &&
      values.eventDate.trim() &&
      values.eventLocation.trim() &&
      values.format.trim(),
  );
}
