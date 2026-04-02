"use client";

import { useMemo, useState } from "react";

import {
  initialContactFormValues,
  isContactFormValid,
  type ContactFormValues,
} from "../schemas/contact-form.schema";

export function useContactForm(initialValues: ContactFormValues = initialContactFormValues) {
  const [formData, setFormData] = useState<ContactFormValues>(initialValues);

  const valid = useMemo(() => isContactFormValid(formData), [formData]);

  return {
    formData,
    setFormData,
    isValid: valid,
  };
}
