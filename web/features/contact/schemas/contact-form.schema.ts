export const contactReasons = [
  "Partnership",
  "Collaboration",
  "Media Inquiry",
  "General Question",
] as const;

export type ContactReason = (typeof contactReasons)[number];

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  reason: string;
};

export const initialContactFormValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "+234",
  reason: "",
};

export function isContactFormValid(values: ContactFormValues): boolean {
  return Boolean(
    values.firstName.trim() &&
      values.lastName.trim() &&
      values.email.trim() &&
      values.phone.trim() &&
      values.reason.trim(),
  );
}
