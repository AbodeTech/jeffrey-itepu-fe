export const ownershipNetworkChannels = [
  "Instagram",
  "LinkedIn",
  "WhatsApp",
  "Referral",
  "Event",
  "Google Search",
] as const;

export type OwnershipNetworkJoinFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  channel: string;
};

export const initialOwnershipNetworkJoinFormValues: OwnershipNetworkJoinFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "+234",
  channel: "",
};

export function isOwnershipNetworkJoinFormValid(values: OwnershipNetworkJoinFormValues): boolean {
  return Boolean(
    values.firstName.trim() &&
      values.lastName.trim() &&
      values.email.trim() &&
      values.phone.trim() &&
      values.channel.trim(),
  );
}
