"use client";

import Image from "next/image";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { useOwnershipNetworkJoinForm } from "../hooks/use-ownership-network-join-form";
import { ownershipNetworkChannels } from "../schemas/ownership-network-join-form.schema";

export function OwnershipNetworkJoinFormSection() {
  const { formData, setFormData, isValid, resetForm } = useOwnershipNetworkJoinForm();
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/ownership-network", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          channel: formData.channel,
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
    <section className="w-full bg-[#0A1322] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-4">
          <div className="relative min-h-[300px] overflow-hidden rounded-[10px] sm:min-h-[380px] lg:min-h-[560px]">
            <Image
              src="/assets/ownership-join-network.png"
              alt="Network associates celebrating at event"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="rounded-[10px] bg-[#F8F8FA] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <h2
              className="text-center text-[35px] font-bold leading-[112%] tracking-[-0.03em] text-[#05AAFF] sm:text-[44px]"
              style={{ fontFamily: "var(--font-agrandir)" }}
            >
              Interested in joining the network?
            </h2>
            <p
              className="mx-auto mt-4 max-w-[470px] text-center text-[14px] leading-[155%] text-[#73767E] sm:text-[16px]"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              Submit your details below to begin the review process.
              <br />
              Selected applicants will be contacted with onboarding information and next steps.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                <div>
                  <label
                    className="mb-1.5 block text-[14px] leading-[120%] text-[#5D6067]"
                    style={{ fontFamily: "var(--font-delight)" }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Enter your full name"
                    className="h-[48px] w-full rounded-[12px] border border-[#D1DBE6] bg-transparent px-3 text-[14px] text-[#3F434A] outline-none placeholder:text-[#B1B6BF] focus:border-[#05AAFF]"
                    style={{ fontFamily: "var(--font-delight)" }}
                  />
                </div>

                <div>
                  <label
                    className="mb-1.5 block text-[14px] leading-[120%] text-[#5D6067]"
                    style={{ fontFamily: "var(--font-delight)" }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Enter company name"
                    className="h-[48px] w-full rounded-[12px] border border-[#D1DBE6] bg-transparent px-3 text-[14px] text-[#3F434A] outline-none placeholder:text-[#B1B6BF] focus:border-[#05AAFF]"
                    style={{ fontFamily: "var(--font-delight)" }}
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                <div>
                  <label
                    className="mb-1.5 block text-[14px] leading-[120%] text-[#5D6067]"
                    style={{ fontFamily: "var(--font-delight)" }}
                  >
                    Email Address (required)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    className="h-[48px] w-full rounded-[12px] border border-[#D1DBE6] bg-transparent px-3 text-[14px] text-[#3F434A] outline-none placeholder:text-[#B1B6BF] focus:border-[#05AAFF]"
                    style={{ fontFamily: "var(--font-delight)" }}
                  />
                </div>

                <div>
                  <label
                    className="mb-1.5 block text-[14px] leading-[120%] text-[#5D6067]"
                    style={{ fontFamily: "var(--font-delight)" }}
                  >
                    Phone Number (required)
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="NG"
                    countryCallingCodeEditable={false}
                    value={formData.phone}
                    onChange={(value) => setFormData({ ...formData, phone: value ?? "" })}
                    placeholder="00000000"
                    className="phone-field"
                  />
                </div>
              </div>

              <div>
                <label
                  className="mb-1.5 block text-[14px] leading-[120%] text-[#5D6067]"
                  style={{ fontFamily: "var(--font-delight)" }}
                >
                  How did you hear about this network?
                </label>
                <div className="relative">
                  <select
                    value={formData.channel}
                    onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                    className="h-[48px] w-full appearance-none rounded-[12px] border border-[#D1DBE6] bg-transparent px-3 pr-10 text-[14px] text-[#7E838C] outline-none focus:border-[#05AAFF]"
                    style={{ fontFamily: "var(--font-delight)" }}
                  >
                    <option value="">Select format</option>
                    {ownershipNetworkChannels.map((channel) => (
                      <option key={channel} value={channel}>
                        {channel}
                      </option>
                    ))}
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

              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className={`mt-1 inline-flex h-[48px] w-full items-center justify-center rounded-[14px] text-[15px] font-medium text-white transition ${
                  isValid && !isSubmitting
                    ? "bg-[#05AAFF] hover:bg-[#0798E1]"
                    : "cursor-not-allowed bg-[#AFC4D3]"
                }`}
                style={{ fontFamily: "var(--font-delight)" }}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              {submitError && (
                <p className="text-sm text-red-600" style={{ fontFamily: "var(--font-delight)" }}>
                  {submitError}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-4 left-4 z-50 animate-in slide-in-from-bottom duration-300">
          <div
            className="flex items-start justify-between rounded-lg px-4 pb-4 pt-6 shadow-lg"
            style={{ backgroundColor: "#F6FFF9", width: "415px" }}
          >
            <div className="flex items-start space-x-3">
              <div className="shrink-0">
                <Image src="/assets/mark.svg" alt="Success" width={24} height={24} />
              </div>
              <div className="flex-1">
                <h4
                  className="text-sm font-semibold text-gray-900"
                  style={{ fontFamily: "var(--font-delight)" }}
                >
                  Application submitted
                </h4>
                <p
                  className="mt-1 text-sm text-gray-600"
                  style={{ fontFamily: "var(--font-delight)" }}
                >
                  Selected applicants will be contacted with next steps
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="shrink-0 rounded-md p-1 transition-colors hover:bg-gray-100"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
      )}

      <style jsx global>{`
        .phone-field {
          display: flex;
          align-items: center;
          height: 48px;
          width: 100%;
          border: 1px solid #d1dbe6;
          border-radius: 12px;
          background: transparent;
          overflow: hidden;
        }
        .phone-field:focus-within {
          border-color: #05aaff;
        }
        .phone-field .PhoneInputCountry {
          height: 100%;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0 12px;
          border-right: 1px solid #d1dbe6;
          margin: 0;
        }
        .phone-field .PhoneInputCountrySelect {
          cursor: pointer;
        }
        .phone-field .PhoneInputInput {
          height: 100%;
          width: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          padding: 0 12px;
          font-size: 14px;
          font-family: var(--font-delight);
          color: #3f434a;
        }
        .phone-field .PhoneInputInput::placeholder {
          color: #b1b6bf;
        }
      `}</style>
    </section>
  );
}
