"use client";

import { useMemo, useState } from "react";

import {
  initialBookJeffContactFormValues,
  isBookJeffContactFormValid,
  type BookJeffContactFormValues,
} from "../schemas/book-jeff-contact-form.schema";

export function useBookJeffContactForm(
  initialValues: BookJeffContactFormValues = initialBookJeffContactFormValues,
) {
  const [formData, setFormData] = useState<BookJeffContactFormValues>(initialValues);
  const isValid = useMemo(() => isBookJeffContactFormValid(formData), [formData]);

  const resetForm = () => {
    setFormData(initialBookJeffContactFormValues);
  };

  return {
    formData,
    setFormData,
    isValid,
    resetForm,
  };
}
