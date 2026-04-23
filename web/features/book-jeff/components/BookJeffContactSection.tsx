"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { useBookJeffContactForm } from "../hooks/use-book-jeff-contact-form";

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

  return (
    <>
      <SectionWrapper id="contact" className="bg-[#F8FEFF] py-16!">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-8 md:flex-col md:gap-8 lg:flex-row lg:gap-12 lg:items-center items-start">
            {/* Left Side - Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[701px]">
                <Image
                  src="/assets/peace.png"
                  alt="Jeffery Itepu - Professional portrait"
                  fill
                  className="w-full h-full rounded-2xl object-cover"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 563px"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="bg-white border border-gray-200 rounded-[16px] shadow-lg w-full max-w-[563px] mx-auto md:w-full md:max-w-none lg:mx-0 lg:w-[563px]" style={{ height: 'auto', minHeight: 'auto', paddingTop: '28px', paddingRight: '28px', paddingBottom: '28px', paddingLeft: '28px' }}>
                {/* Header */}
                <div className="mb-6">
                  <h2
                    className="text-2xl sm:text-3xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-agrandir)", color: '#05AAFF' }}
                  >
                    Invite Jeff to Speak
                  </h2>
                  <p
                    className="text-gray-600"
                    style={{ fontFamily: "var(--font-delight)" }}
                  >
                    Share your event information below and the team will respond with next steps.
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Full Name and Organization - Two Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        style={{ fontFamily: "var(--font-delight)" }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. John Smith"
                        className="px-3 py-2 border border-gray-300 focus:border-transparent outline-none transition text-sm max-w-[250px] w-full max-sm:max-w-none md:max-w-none md:w-full focus:bg-[#D3EAF5]"
                        style={{ fontFamily: "var(--font-delight)", height: '48px', borderRadius: '12px', borderWidth: '1px' }}
                      />
                    </div>

                    {/* Organization */}
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        style={{ fontFamily: "var(--font-delight)" }}
                      >
                        Organization / Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Acme Corporation"
                        className="px-3 py-2 border border-gray-300 focus:border-transparent outline-none transition text-sm max-w-[250px] w-full max-sm:max-w-none md:max-w-none md:w-full focus:bg-[#D3EAF5]"
                        style={{ fontFamily: "var(--font-delight)", height: '48px', borderRadius: '12px', borderWidth: '1px' }}
                      />
                    </div>
                  </div>

                  {/* Email and Phone - Two Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        style={{ fontFamily: "var(--font-delight)" }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john.smith@company.com"
                        className="px-3 py-2 border border-gray-300 focus:border-transparent outline-none transition text-sm max-w-[250px] w-full max-sm:max-w-none md:max-w-none md:w-full focus:bg-[#D3EAF5]"
                        style={{ fontFamily: "var(--font-delight)", height: '48px', borderRadius: '12px', borderWidth: '1px' }}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        style={{ fontFamily: "var(--font-delight)" }}
                      >
                        Phone Number
                      </label>
                      <div className="max-w-[250px] w-full max-sm:max-w-none md:max-w-none md:w-full">
                        <PhoneInput
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
                  </div>

                  {/* Event Type and Event Date - Two Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Event Type */}
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        style={{ fontFamily: "var(--font-delight)" }}
                      >
                        Event Type
                      </label>
                      <div className="relative max-w-[250px] w-full max-sm:max-w-none md:max-w-none md:w-full">
                        <select
                          value={formData.eventType}
                          onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                          className="pl-3 pr-10 py-2 border border-gray-300 focus:border-transparent outline-none transition appearance-none bg-white text-sm w-full focus:bg-[#D3EAF5] active:bg-[#D3EAF5]"
                          style={{ fontFamily: "var(--font-delight)", height: '48px', borderRadius: '12px', borderWidth: '1px' }}
                        >
                          <option>Conference</option>
                          <option>Workshop</option>
                          <option>Keynote</option>
                          <option>Panel Discussion</option>
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none z-10">
                          <Image
                            src="/assets/arrow-down.svg"
                            alt="Dropdown"
                            width={16}
                            height={16}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Event Date */}
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        style={{ fontFamily: "var(--font-delight)" }}
                      >
                        Event Date
                      </label>
                      <div className="relative max-w-[250px] w-full max-sm:max-w-none md:max-w-none md:w-full">
                        <input
                          type="text"
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          onClick={(e) => {
                            const input = e.currentTarget as HTMLInputElement;
                            input.type = 'date';
                            setTimeout(() => input.showPicker?.(), 0);
                          }}
                          onContextMenu={(e) => e.preventDefault()}
                          placeholder="e.g. October 15, 2026"
                          className="px-3 py-2 pr-10 border border-gray-300 focus:border-transparent outline-none transition text-sm w-full focus:bg-[#D3EAF5] [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden"
                          style={{ fontFamily: "var(--font-delight)", height: '48px', borderRadius: '12px', borderWidth: '1px', colorScheme: 'light', WebkitAppearance: 'none', MozAppearance: 'textfield' }}
                        />
                        <div
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none z-10 cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                            if (input) {
                              input.type = 'date';
                              setTimeout(() => input.showPicker?.(), 0);
                            }
                          }}
                        >
                          <Image
                            src="/assets/calendar.svg"
                            alt="Calendar"
                            width={16}
                            height={16}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Event Location and Format - Two Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Event Location */}
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        style={{ fontFamily: "var(--font-delight)" }}
                      >
                        Event Location
                      </label>
                      <input
                        type="text"
                        value={formData.eventLocation}
                        onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                        placeholder="e.g. Lagos, Nigeria"
                        className="px-3 py-2 border border-gray-300 focus:border-transparent outline-none transition text-sm max-w-[250px] w-full max-sm:max-w-none md:max-w-none md:w-full focus:bg-[#D3EAF5]"
                        style={{ fontFamily: "var(--font-delight)", height: '48px', borderRadius: '12px', borderWidth: '1px' }}
                      />
                    </div>

                    {/* Format */}
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        style={{ fontFamily: "var(--font-delight)" }}
                      >
                        Format
                      </label>
                      <div className="relative max-w-[250px] w-full max-sm:max-w-none md:max-w-none md:w-full">
                        <select
                          value={formData.format}
                          onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                          className="px-3 py-2 border border-gray-300 focus:border-transparent outline-none transition appearance-none bg-white text-sm w-full focus:bg-[#D3EAF5]"
                          style={{ fontFamily: "var(--font-delight)", height: '48px', borderRadius: '12px', borderWidth: '1px' }}
                        >
                          <option>In-Person</option>
                          <option>Virtual</option>
                          <option>Hybrid</option>
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none z-10">
                          <Image
                            src="/assets/arrow-down.svg"
                            alt="Dropdown"
                            width={16}
                            height={16}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      style={{ fontFamily: "var(--font-delight)" }}
                    >
                      Additional Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      placeholder="e.g. Annual Real Estate Summit with 500+ attendees. Looking for a keynote on 'The Future of Property Investment in Africa'. Audience: Real estate professionals, investors, and developers."
                      className="px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none text-sm w-full max-w-[507px] max-sm:max-w-none focus:bg-[#D3EAF5]"
                      style={{ fontFamily: "var(--font-delight)", borderRadius: '12px', borderWidth: '1px' }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full font-semibold py-3 px-6 rounded-[20px] transition duration-200 ${isFormValid && !isSubmitting
                      ? 'bg-[#05AAFF] hover:bg-blue-700 text-white cursor-pointer'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    style={{ fontFamily: "var(--font-delight)" }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
                  </button>
                  {submitError && (
                    <p className="mt-2 text-sm text-red-600" style={{ fontFamily: "var(--font-delight)" }}>
                      {submitError}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 left-4 z-50 animate-in slide-in-from-bottom duration-300">
          <div
            className="rounded-lg shadow-lg pt-6 px-4 pb-4 flex items-start justify-between"
            style={{ backgroundColor: '#F6FFF9', width: '415px' }}
          >
            <div className="flex items-start space-x-3">
              <div className="shrink-0">
                <Image
                  src="/assets/mark.svg"
                  alt="Success"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-900" style={{ fontFamily: "var(--font-delight)" }}>
                  Speaking request submitted
                </h4>
                <p className="text-sm text-gray-600 mt-1" style={{ fontFamily: "var(--font-delight)" }}>
                  The team will reach out to you on next steps
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="shrink-0 p-1 rounded-md hover:bg-gray-100 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4L12 12" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <style jsx global>{`
        .book-jeff-phone-input {
          display: flex;
          align-items: center;
          height: 48px;
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 12px;
          background: transparent;
          overflow: hidden;
        }
        .book-jeff-phone-input:focus-within {
          border-color: transparent;
          background: #d3eaf5;
        }
        .book-jeff-phone-input .PhoneInputCountry {
          margin: 0;
          height: 100%;
          padding: 0 10px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-right: 1px solid #d1d5db;
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
          font-family: var(--font-delight);
        }
      `}</style>
    </>
  );
}
