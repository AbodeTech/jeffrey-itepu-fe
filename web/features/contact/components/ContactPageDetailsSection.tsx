"use client";

import Image from "next/image";
import PhoneInput from "react-phone-number-input";

import { useContactForm } from "../hooks/use-contact-form";
import { contactReasons } from "../schemas/contact-form.schema";

export function ContactPageDetailsSection() {
  const { formData, setFormData, isValid } = useContactForm();

  return (
    <section className="w-full bg-[#FFFFFF] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 xl:grid-cols-[420px_612px] xl:justify-center xl:gap-[121px]">
          <aside className="min-w-0 text-left">
            <div className="space-y-7">
              <div>
                <p
                  className="text-[16px] font-medium uppercase tracking-[0.02em] text-[#84868C]"
                  style={{ fontFamily: "var(--font-delight)" }}
                >
                  Email
                </p>
                <a
                  href="mailto:hello@jeffitepu.com"
                  className="mt-1 inline-block max-w-full break-all text-[18px] leading-[130%] text-[#505153] underline decoration-[#8D9199] underline-offset-4 sm:text-[19px] lg:text-[20px]"
                  style={{ fontFamily: "var(--font-delight)" }}
                >
                  hello@jeffitepu.com
                </a>
              </div>

              <div>
                <p
                  className="text-[16px] font-medium uppercase tracking-[0.02em] text-[#84868C]"
                  style={{ fontFamily: "var(--font-delight)" }}
                >
                  Speaking Engagement
                </p>
                <a
                  href="mailto:bookings@jeffitepu.com"
                  className="mt-1 inline-block max-w-full break-all text-[18px] leading-[130%] text-[#505153] underline decoration-[#8D9199] underline-offset-4 sm:text-[19px] lg:text-[20px]"
                  style={{ fontFamily: "var(--font-delight)" }}
                >
                  bookings@jeffitepu.com
                </a>
              </div>
            </div>

            <p
              className="mt-10 text-[16px] font-medium uppercase tracking-[0.02em] text-[#84868C]"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              Note from Jeffery Itepu:
            </p>

            <div className="relative mt-4 h-[200px] w-full max-w-[402px] overflow-hidden sm:h-[224px]">
              <Image
                src="/assets/contact-note-jeffery.png"
                alt="Jeffery smiling while opening a door"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>

            <p
              className="mt-5 max-w-[402px] text-[16px] leading-[175%] text-[#505153] sm:text-[18px] sm:leading-[185%]"
              style={{ fontFamily: "var(--font-delight)" }}
            >
              Every conversation is an opportunity to advance structured ownership across Africa. Whether
              the inquiry relates to partnership, collaboration, or shared vision, engagement is welcomed
              from those aligned with building disciplined and sustainable real estate systems.
            </p>
          </aside>

          <div className="min-w-0 w-full max-w-[612px] rounded-[10px] bg-transparent">
            <h2
              className="text-left! text-[34px] font-bold leading-[112%] tracking-[-0.03em] text-[#05AAFF] sm:text-[44px]"
              style={{ fontFamily: "var(--font-agrandir)", textAlign: "left" }}
            >
              Contact Form
            </h2>

            <form className="mt-4 space-y-3">
              <div className="grid gap-3 md:grid-cols-2 md:gap-4">
                <div>
                  <label className="mb-1.5 block text-[14px] leading-[120%] text-[#5D6067]">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Enter your full name"
                    className="h-[48px] w-full rounded-[12px] border border-[#DCE0E7] bg-transparent px-3 text-[14px] text-[#3F434A] outline-none placeholder:text-[#B1B6BF] focus:border-[#05AAFF]"
                    style={{ fontFamily: "var(--font-delight)" }}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[14px] leading-[120%] text-[#5D6067]">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Enter company name"
                    className="h-[48px] w-full rounded-[12px] border border-[#DCE0E7] bg-transparent px-3 text-[14px] text-[#3F434A] outline-none placeholder:text-[#B1B6BF] focus:border-[#05AAFF]"
                    style={{ fontFamily: "var(--font-delight)" }}
                  />
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2 md:gap-4">
                <div>
                  <label className="mb-1.5 block text-[14px] leading-[120%] text-[#5D6067]">
                    Email Address (required)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    className="h-[48px] w-full rounded-[12px] border border-[#DCE0E7] bg-transparent px-3 text-[14px] text-[#3F434A] outline-none placeholder:text-[#B1B6BF] focus:border-[#05AAFF]"
                    style={{ fontFamily: "var(--font-delight)" }}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[14px] leading-[120%] text-[#5D6067]">
                    Phone Number (required)
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="NG"
                    countryCallingCodeEditable={false}
                    value={formData.phone}
                    onChange={(value) => setFormData({ ...formData, phone: value ?? "" })}
                    placeholder="00000000"
                    className="contact-phone-field"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[14px] leading-[120%] text-[#5D6067]">
                  Reason for contacting
                </label>
                <div className="relative">
                  <select
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="h-[48px] w-full appearance-none rounded-[12px] border border-[#DCE0E7] bg-transparent px-3 pr-10 text-[14px] text-[#7E838C] outline-none focus:border-[#05AAFF]"
                    style={{ fontFamily: "var(--font-delight)" }}
                  >
                    <option value="">Select format.</option>
                    {contactReasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
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
                type="button"
                disabled={!isValid}
                className={`mt-1 inline-flex h-[48px] w-full items-center justify-center rounded-[14px] text-[15px] font-medium text-white transition ${
                  isValid ? "bg-[#05AAFF] hover:bg-[#0798E1]" : "cursor-not-allowed bg-[#AFC4D3]"
                }`}
                style={{ fontFamily: "var(--font-delight)" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .contact-phone-field {
          display: flex;
          align-items: center;
          height: 48px;
          width: 100%;
          border: 1px solid #dce0e7;
          border-radius: 12px;
          background: transparent;
          overflow: hidden;
        }
        .contact-phone-field:focus-within {
          border-color: #05aaff;
        }
        .contact-phone-field .PhoneInputCountry {
          height: 100%;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0 12px;
          border-right: 1px solid #dce0e7;
          margin: 0;
        }
        .contact-phone-field .PhoneInputCountrySelect {
          cursor: pointer;
        }
        .contact-phone-field .PhoneInputInput {
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
        .contact-phone-field .PhoneInputInput::placeholder {
          color: #b1b6bf;
        }
      `}</style>
    </section>
  );
}
