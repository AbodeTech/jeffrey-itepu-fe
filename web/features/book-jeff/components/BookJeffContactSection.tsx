"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";

export function BookJeffContactSection() {
  const [formData, setFormData] = useState({
    fullName: "Jeffery Itepu",
    organization: "New Co",
    email: "jeff@ess.com",
    phone: "+2348188337211",
    eventType: "Conference",
    eventDate: "2026-10-22",
    eventLocation: "Lagos, Nigeria",
    format: "In-Person",
    additionalNotes: ""
  });

  const [selectedCountry, setSelectedCountry] = useState({
    code: 'NG',
    name: 'Nigeria',
    dialCode: '+234',
    flag: '🇳🇬'
  });

  const [showToast, setShowToast] = useState(false);

  const countries = [
    { code: 'NG', name: 'Nigeria', dialCode: '+234', flag: '🇳🇬' },
    { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
    { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
    { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
    { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
    { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
    { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
    { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹' },
    { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸' },
    { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵' },
    { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳' },
    { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
    { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷' },
    { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦' },
    { code: 'KE', name: 'Kenya', dialCode: '+254', flag: '🇰🇪' }
  ];

  const handleCountryChange = (country: typeof countries[0]) => {
    setSelectedCountry(country);
    // Update phone number with new country code
    const currentPhoneNumber = formData.phone.replace(selectedCountry.dialCode, '').trim();
    setFormData({ ...formData, phone: `${country.dialCode}${currentPhoneNumber}` });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setShowToast(true);
      // Don't auto-hide toast - let user close it manually
    }
  };

  const isFormValid = formData.fullName && formData.organization && formData.email && formData.phone && formData.eventType && formData.eventDate && formData.eventLocation && formData.format;

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
                      <div className="relative max-w-[250px] w-full max-sm:max-w-none md:max-w-none md:w-full">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center z-10">
                          <button
                            type="button"
                            onClick={() => {
                              // Toggle dropdown visibility
                              const dropdown = document.getElementById('country-dropdown');
                              if (dropdown) {
                                dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
                              }
                            }}
                            className="flex items-center text-sm font-medium text-gray-700 cursor-pointer hover:text-gray-900"
                            style={{ fontFamily: "var(--font-delight)" }}
                          >
                            <span className="mr-2">{selectedCountry.flag}</span>
                            <span className="mr-1">{selectedCountry.dialCode}</span>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="ml-1">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                          <div
                            id="country-dropdown"
                            className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 hidden overflow-y-auto"
                            style={{ minWidth: '120px', maxHeight: '200px' }}
                          >
                            {countries.map(country => (
                              <button
                                key={country.code}
                                type="button"
                                onClick={() => {
                                  handleCountryChange(country);
                                  const dropdown = document.getElementById('country-dropdown');
                                  if (dropdown) dropdown.style.display = 'none';
                                }}
                                className="w-full text-left px-3 py-2 hover:bg-gray-100 flex items-center text-sm"
                                style={{ fontFamily: "var(--font-delight)" }}
                              >
                                <span className="mr-2">{country.flag}</span>
                                <span className="font-medium">{country.dialCode}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                        <input
                          type="tel"
                          value={formData.phone ? formData.phone.replace(selectedCountry.dialCode, '').trim() : ''}
                          onChange={(e) => {
                            const phoneNumber = e.target.value;
                            setFormData({ ...formData, phone: `${selectedCountry.dialCode}${phoneNumber}` });
                          }}
                          className="pl-24 pr-3 py-2 border border-gray-300 focus:border-transparent outline-none transition text-sm max-w-[250px] w-full max-sm:max-w-none md:max-w-none md:w-full focus:bg-[#D3EAF5]"
                          style={{ fontFamily: "var(--font-delight)", height: '48px', borderRadius: '12px', borderWidth: '1px' }}
                          placeholder="818 833 7211"
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
                          placeholder="Select date"
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
                      placeholder="Share event details, audience profile, and topic expectations"
                      className="px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none text-sm w-full max-w-[507px] max-sm:max-w-none focus:bg-[#D3EAF5]"
                      style={{ fontFamily: "var(--font-delight)", borderRadius: '12px', borderWidth: '1px' }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full font-semibold py-3 px-6 rounded-[20px] transition duration-200 ${isFormValid
                      ? 'bg-[#05AAFF] hover:bg-blue-700 text-white cursor-pointer'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    style={{ fontFamily: "var(--font-delight)" }}
                  >
                    Submit Booking Request
                  </button>
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
              <div className="flex-shrink-0">
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
              className="flex-shrink-0 p-1 rounded-md hover:bg-gray-100 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4L12 12" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
