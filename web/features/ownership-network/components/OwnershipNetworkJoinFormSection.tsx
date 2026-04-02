"use client";

import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import { useOwnershipNetworkJoinForm } from "../hooks/use-ownership-network-join-form";
import { ownershipNetworkChannels } from "../schemas/ownership-network-join-form.schema";

export function OwnershipNetworkJoinFormSection() {
  const { formData, setFormData } = useOwnershipNetworkJoinForm();

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

            <form className="mt-6 space-y-4">
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
                type="button"
                className="mt-1 inline-flex h-[48px] w-full items-center justify-center rounded-[14px] bg-[#05AAFF] text-[15px] font-medium text-white transition hover:bg-[#0798E1]"
                style={{ fontFamily: "var(--font-delight)" }}
              >
                Submit Speaking Request
              </button>
            </form>
          </div>
        </div>
      </div>
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
