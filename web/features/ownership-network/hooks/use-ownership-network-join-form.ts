"use client";

import { useMemo, useState } from "react";

import {
  initialOwnershipNetworkJoinFormValues,
  isOwnershipNetworkJoinFormValid,
  type OwnershipNetworkJoinFormValues,
} from "../schemas/ownership-network-join-form.schema";

export function useOwnershipNetworkJoinForm(
  initialValues: OwnershipNetworkJoinFormValues = initialOwnershipNetworkJoinFormValues,
) {
  const [formData, setFormData] = useState<OwnershipNetworkJoinFormValues>(initialValues);
  const isValid = useMemo(() => isOwnershipNetworkJoinFormValid(formData), [formData]);

  const resetForm = () => {
    setFormData(initialOwnershipNetworkJoinFormValues);
  };

  return {
    formData,
    setFormData,
    isValid,
    resetForm,
  };
}
