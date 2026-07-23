"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { useBookJeffContactForm } from "../hooks/use-book-jeff-contact-form";

const fieldClass =
  "h-[48px] w-full rounded-[12px] border border-[#DCE0E7] bg-transparent px-3 text-[14px] text-[#3F434A] outline-none placeholder:text-[#B1B6BF] transition focus:border-[#05AAFF]";

const labelClass = "mb-1.5 block text-[14px] leading-[120%] text-[#5D6067]";

export function BookJeffContactSection() {
  const { formData, setFormData, isValid: isFormValid, resetForm } = useBookJeffContactForm();

  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/book-jeff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          organization: formData.organization,
          email: formData.email,
          phone: formData.phone,
          eventType: formData.eventType,
          eventDate: formData.eventDate,
          eventLocation: formData.eventLocation,
          format: formData.format,
          additionalNotes: formData.additionalNotes,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        setSubmitError(result.error || "Something went wrong. Please try again.");
        return;
      }

      setShowToast(true);
      resetForm();
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openDatePicker = (input: HTMLInputElement | null) => {
    if (!input) return;
    input.type = "date";
    setTimeout(() => input.showPicker?.(), 0);
  };

  return (
    <>
      <SectionWrapper id="contact-form" className="bg-[#F8FEFF] py-12! sm:py-16!">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative h-[320px] w-full sm:h-[420px] md:h-[500px] lg:h-[640px] xl:h-[701px]">
                <Image
                  src="/assets/peace.png"
                  alt="Jeffrey Itepu"
                  fill
                  className="rounded-2xl object-cover"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 563px"
                  priority
                />
              </div>
            </div>

            <div className="flex w-full justify-center lg:w-1/2 lg:justify-start">
              <div className="w-full max-w-[563px] rounded-[16px] border border-[#E6ECF2] bg-white p-5 sm:p-7">
                <div className="mb-6 text-left!">
                  <h2
                    className="mb-2 text-left! text-[28px] font-bold leading-[112%] tracking-[-0.02em] text-[#05AAFF] sm:text-[34px]"
                    style={{ fontFamily: "var(--font-agrandir)" }}
                  >
                    Start the Conversation.
                  </h2>
                  <p
                    className="text-left text-[14px] leading-[160%] text-[#6C7881] sm:text-[15px]"
                    style={{ fontFamily: "var(--font-delight)" }}
                  >
                    Every meaningful conversation begins with the right audience. Share details
                    about your event, and Jeffrey&apos;s team will review the request to determine
                    how the session can create the greatest value for your audience.
                  </p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="book-jeff-full-name" className={labelClass} style={{ fontFamily: "var(--font-delight)" }}>
                        Full Name
                      </label>
                      <input
                        id="book-jeff-full-name"
                        type="text"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. John Smith"
                        className={fieldClass}
                        style={{ fontFamily: "var(--font-delight)" }}
                      />
                    </div>

                    <div>
                      <label htmlFor="book-jeff-organization" className={labelClass} style={{ fontFamily: "var(--font-delight)" }}>
                        Organization / Company Name
                      </label>
                      <input
                        id="book-jeff-organization"
                        type="text"
                        autoComplete="organization"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Acme Corporation"
                        className={fieldClass}
                        style={{ fontFamily: "var(--font-delight)" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="book-jeff-email" className={labelClass} style={{ fontFamily: "var(--font-delight)" }}>
                        Email Address
                      </label>
                      <input
                        id="book-jeff-email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john.smith@company.com"
                        className={fieldClass}
                        style={{ fontFamily: "var(--font-delight)" }}
                      />
                    </div>

                    <div>
                      <label htmlFor="book-jeff-phone" className={labelClass} style={{ fontFamily: "var(--font-delight)" }}>
                        Phone Number
                      </label>
                      <PhoneInput
                        id="book-jeff-phone"
                        international
                        defaultCountry="NG"
                        countryCallingCodeEditable={false}
                        value={formData.phone}
                        onChange={(value) => setFormData({ ...formData, phone: value ?? "" })}
                        placeholder="e.g. 818 833 7211"
                        className="book-jeff-phone-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="book-jeff-event-type" className={labelClass} style={{ fontFamily: "var(--font-delight)" }}>
                        Event Type
                      </label>
                      <div className="relative w-full">
                        <select
                          id="book-jeff-event-type"
                          value={formData.eventType}
                          onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                          className={`${fieldClass} appearance-none pr-10`}
                          style={{ fontFamily: "var(--font-delight)" }}
                        >
                          <option>Conference</option>
                          <option>Workshop</option>
                          <option>Keynote</option>
                          <option>Panel Discussion</option>
                        </select>
                        <Image
                          src="/assets/arrow-down.svg"
                          alt=""
                          aria-hidden
                          width={16}
                          height={16}
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="book-jeff-event-date" className={labelClass} style={{ fontFamily: "var(--font-delight)" }}>
                        Event Date
                      </label>
                      <div className="relative w-full">
                        <input
                          id="book-jeff-event-date"
                          type="text"
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          onClick={(e) => openDatePicker(e.currentTarget)}
                          onContextMenu={(e) => e.preventDefault()}
                          placeholder="e.g. October 15, 2026"
                          className={`${fieldClass} pr-10 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden`}
                          style={{
                            fontFamily: "var(--font-delight)",
                            colorScheme: "light",
                            WebkitAppearance: "none",
                            MozAppearance: "textfield",
                          }}
                        />
                        <button
                          type="button"
                          aria-label="Open calendar"
                          className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md"
                          onClick={() =>
                            openDatePicker(
                              document.getElementById("book-jeff-event-date") as HTMLInputElement | null,
                            )
                          }
                        >
                          <Image src="/assets/calendar.svg" alt="" aria-hidden width={16} height={16} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="book-jeff-event-location" className={labelClass} style={{ fontFamily: "var(--font-delight)" }}>
                        Event Location
                      </label>
                      <input
                        id="book-jeff-event-location"
                        type="text"
                        value={formData.eventLocation}
                        onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                        placeholder="e.g. Lagos, Nigeria"
                        className={fieldClass}
                        style={{ fontFamily: "var(--font-delight)" }}
                      />
                    </div>

                    <div>
                      <label htmlFor="book-jeff-format" className={labelClass} style={{ fontFamily: "var(--font-delight)" }}>
                        Format
                      </label>
                      <div className="relative w-full">
                        <select
                          id="book-jeff-format"
                          value={formData.format}
                          onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                          className={`${fieldClass} appearance-none pr-10`}
                          style={{ fontFamily: "var(--font-delight)" }}
                        >
                          <option>In-Person</option>
                          <option>Virtual</option>
                          <option>Hybrid</option>
                        </select>
                        <Image
                          src="/assets/arrow-down.svg"
                          alt=""
                          aria-hidden
                          width={16}
                          height={16}
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="book-jeff-notes" className={labelClass} style={{ fontFamily: "var(--font-delight)" }}>
                      Additional Notes
                    </label>
                    <textarea
                      id="book-jeff-notes"
                      rows={3}
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      placeholder="Describe your audience, event objectives, expected outcomes, and any specific themes you would like Jeffrey to address."
                      className="w-full resize-none rounded-[12px] border border-[#DCE0E7] bg-transparent px-3 py-2 text-[14px] text-[#3F434A] outline-none placeholder:text-[#B1B6BF] transition focus:border-[#05AAFF]"
                      style={{ fontFamily: "var(--font-delight)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`inline-flex h-[48px] w-full items-center justify-center rounded-[14px] px-6 text-[15px] font-medium text-white transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05AAFF] ${
                      isFormValid && !isSubmitting
                        ? "cursor-pointer bg-[#05AAFF] hover:bg-[#0798E1]"
                        : "cursor-not-allowed bg-[#AFC4D3]"
                    }`}
                    style={{ fontFamily: "var(--font-delight)" }}
                  >
                    {isSubmitting ? "Submitting..." : "Request Speaking Availability"}
                  </button>

                  {submitError ? (
                    <p
                      role="alert"
                      className="text-sm text-red-600"
                      style={{ fontFamily: "var(--font-delight)" }}
                    >
                      {submitError}
                    </p>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {showToast ? (
        <div
          className="fixed inset-x-4 bottom-4 z-50 sm:inset-x-auto sm:left-4 sm:w-[min(100%,415px)]"
          role="status"
          aria-live="polite"
        >
          <div className="flex w-full items-start justify-between rounded-[12px] px-4 pb-4 pt-6 shadow-[0_4px_12px_rgba(15,23,42,0.12)]" style={{ backgroundColor: "#F6FFF9" }}>
            <div className="flex items-start gap-3">
              <Image src="/assets/mark.svg" alt="" aria-hidden width={24} height={24} className="shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-[#233A4A]" style={{ fontFamily: "var(--font-delight)" }}>
                  Speaking request submitted
                </h4>
                <p className="mt-1 text-sm text-[#6C7881]" style={{ fontFamily: "var(--font-delight)" }}>
                  The team will reach out to you on next steps
                </p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={() => setShowToast(false)}
              className="shrink-0 rounded-md p-1 transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05AAFF]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : null}

      <style jsx global>{`
        .book-jeff-phone-input {
          display: flex;
          align-items: center;
          height: 48px;
          width: 100%;
          border: 1px solid #dce0e7;
          border-radius: 12px;
          background: transparent;
          overflow: hidden;
        }
        .book-jeff-phone-input:focus-within {
          border-color: #05aaff;
        }
        .book-jeff-phone-input .PhoneInputCountry {
          margin: 0;
          height: 100%;
          padding: 0 10px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-right: 1px solid #dce0e7;
        }
        .book-jeff-phone-input .PhoneInputCountrySelect {
          cursor: pointer;
        }
        .book-jeff-phone-input .PhoneInputInput {
          height: 100%;
          width: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          padding: 0 12px;
          font-size: 14px;
          color: #3f434a;
          font-family: var(--font-delight);
        }
        .book-jeff-phone-input .PhoneInputInput::placeholder {
          color: #b1b6bf;
        }
      `}</style>
    </>
  );
}
