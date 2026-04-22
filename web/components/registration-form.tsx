"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}
import { AnimatePresence, motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormButton } from "@/components/ui/form-button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft, ArrowRight, Loader2, Lock, X } from "lucide-react"
import { Analytics } from "@/lib/analytics"
import { isJefferyItepuHost, JEFFERY_ITEPU_REFERRAL_USERNAME } from "@/lib/domain-targeting"

type InviteSearchResult = {
  username: string
  first_name: string
  last_name: string
  email: string
  phone: string
}

interface FormData {
  first_name: string
  last_name: string
  email: string
  phone: string
  gender: string
  age_bracket: string
  status: string
  is_abode_associate: string
  has_abodeflex_account: string
  abodeflex_email: string
  region: string
  other_location: string
  previous_attendee: string
  referral_source: string
  referral_name: string
}

const initialFormData: FormData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  gender: "",
  age_bracket: "",
  status: "",
  is_abode_associate: "",
  has_abodeflex_account: "",
  abodeflex_email: "",
  region: "",
  other_location: "",
  previous_attendee: "",
  referral_source: "",
  referral_name: "",
}

const STEPS = [
  { title: "Personal Info", description: "Tell us about yourself" },
  { title: "Background", description: "A bit more about you" },
  { title: "Location & Discovery", description: "Where are you based?" },
]

const AGE_BRACKETS = ["18-24", "25-34", "35-44", "45-54", "55+"]

const EMPLOYMENT_STATUSES = [
  "Student",
  "Unemployed",
  "Employed",
  "Realtor",
  "Entrepreneur",
  "Abode Associate",
  "Self-Employed",
]

const LOCATION_GROUPS = [
  {
    label: "Outside Lagos",
    options: ["Ogun State", "Oyo State", "Abuja", "Delta State", "Other (Outside Lagos)"],
  },
  {
    label: "Lagos Mainland",
    options: [
      "Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry",
      "Ifako-Ijaiye", "Ikorodu", "Ikeja", "Kosofe", "Lagos Mainland", "Mushin",
      "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere", "Other (Lagos Mainland)",
    ],
  },
  {
    label: "Lagos Island",
    options: ["Epe", "Eti-Osa (Lekki / VI / Ikoyi)", "Ibeju-Lekki", "Lagos Island", "Other (Lagos Island)"],
  },
]

const REFERRAL_SOURCES = ["Social Media", "Social Ads", "Radio", "Friend", "Word of Mouth", "Other"]

export function RegistrationForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [referredByUsername, setReferredByUsername] = useState(searchParams.get('ref') || '')
  const [isRefLocked, setIsRefLocked] = useState(!!searchParams.get('ref'))

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    let ref = params.get('ref')

    if (!ref) {
      ref = localStorage.getItem('abode_ref')
    }

    if (!ref && isJefferyItepuHost(window.location.hostname)) {
      ref = JEFFERY_ITEPU_REFERRAL_USERNAME
    }

    if (ref) {
      setReferredByUsername(ref)
      setIsRefLocked(true)
    }
  }, [])

  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({ ...initialFormData, referral_name: searchParams.get('ref') || '' })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState("")

  const [inviteQuery, setInviteQuery] = useState('')
  const [inviteResults, setInviteResults] = useState<InviteSearchResult[]>([])
  const [inviteSearching, setInviteSearching] = useState(false)
  const [inviteSelected, setInviteSelected] = useState<InviteSearchResult | null>(null)
  const [inviteNobody, setInviteNobody] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  // Debounced search for inviter
  useEffect(() => {
    if (isRefLocked || inviteSelected || inviteNobody) return
    if (inviteQuery.trim().length < 2) {
      setInviteResults([])
      setShowDropdown(false)
      return
    }
    const timer = setTimeout(async () => {
      setInviteSearching(true)
      try {
        const res = await fetch(`/api/search-users?q=${encodeURIComponent(inviteQuery.trim())}`)
        const data = await res.json()
        setInviteResults(data || [])
        setShowDropdown(true)
      } catch {
        // silently fail — never block the form
      } finally {
        setInviteSearching(false)
      }
    }, 400)
    return () => clearTimeout(timer)
  }, [inviteQuery, isRefLocked, inviteSelected, inviteNobody])

  const progress = ((step + 1) / STEPS.length) * 100
  const isOtherLocation = formData.region.includes("Other")

  function updateField(field: keyof FormData, value: string) {
    setFormData((prev) => {
      const next = { ...prev, [field]: value }
      // Clear typed other_location when switching away from an Other option
      if (field === "region" && !value.includes("Other")) {
        next.other_location = ""
      }
      // Clear abodeflex_email when switching away from Yes
      if (field === "has_abodeflex_account" && value !== "Yes") {
        next.abodeflex_email = ""
      }
      return next
    })
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  function validateStep(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (step === 0) {
      if (!formData.first_name.trim()) newErrors.first_name = "First name is required"
      if (!formData.last_name.trim()) newErrors.last_name = "Last name is required"
      if (!formData.email.trim()) {
        newErrors.email = "Email is required"
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Enter a valid email"
      }
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
      if (!formData.gender) newErrors.gender = "Please select your gender"
    }

    if (step === 1) {
      if (!formData.age_bracket) newErrors.age_bracket = "Please select your age bracket"
      if (!formData.status) newErrors.status = "Please select your status"
      if (!formData.is_abode_associate) newErrors.is_abode_associate = "Please select an option"
      if (!formData.has_abodeflex_account) newErrors.has_abodeflex_account = "Please select an option"
      if (formData.has_abodeflex_account === "Yes") {
        if (!formData.abodeflex_email.trim()) {
          newErrors.abodeflex_email = "AbodeFlex account email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.abodeflex_email)) {
          newErrors.abodeflex_email = "Enter a valid email"
        }
      }
    }

    if (step === 2) {
      if (!formData.region) {
        newErrors.region = "Please select your region"
      } else if (isOtherLocation && !formData.other_location.trim()) {
        newErrors.other_location = "Please specify your location"
      }
      if (!formData.previous_attendee) newErrors.previous_attendee = "Please select an option"
      if (!formData.referral_source) newErrors.referral_source = "Please let us know how you heard about us"
      const hasInviteSelection = isRefLocked || inviteSelected !== null || inviteNobody
      if (!hasInviteSelection) newErrors.referral_name = "Please search for who invited you or select 'Nobody invited me'"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleNext() {
    if (validateStep()) {
      if (step === 0) {
        Analytics.formStarted()
        Analytics.formStepComplete(1, 'personal_info')
      } else if (step === 1) {
        Analytics.formStepComplete(2, 'background')
      }
      setStep((prev) => Math.min(prev + 1, STEPS.length - 1))
    }
  }

  function handleBack() {
    setStep((prev) => Math.max(prev - 1, 0))
  }

  async function handleSubmit() {
    if (!validateStep()) return

    Analytics.formStepComplete(3, 'location_discovery')
    Analytics.formSubmitted()

    setSubmitting(true)
    setServerError("")

    const regionToSubmit = isOtherLocation ? formData.other_location.trim() : formData.region

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          region: regionToSubmit,
          abodeflex_email: formData.has_abodeflex_account === "Yes" ? formData.abodeflex_email.trim() : null,
          referral_name: isRefLocked
            ? referredByUsername
            : inviteSelected
              ? `${inviteSelected.first_name} ${inviteSelected.last_name}`
              : 'N/A',
        }),
      })

      const result = await res.json()

      if (!res.ok) {
        if (result.error?.includes("already registered")) {
          setServerError("This email is already registered. We look forward to seeing you!")
        } else {
          setServerError(result.error || "Something went wrong. Please try again.")
        }
        return
      }

      localStorage.removeItem('abode_ref')

      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('track', 'Lead')
      }

      router.push("/register/success")
    } catch {
      setServerError("Network error. Please check your connection and try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const pillBase =
    "rounded-full border px-4 py-2 font-sans text-sm font-medium transition-all"
  const pillActive = "bg-[#05AAFF] border-[#05AAFF] text-white"
  const pillInactive =
    "border-[#E0EAF1] bg-white text-[#4E545B] hover:border-[#05AAFF]/40 hover:text-[#233a4a]"

  return (
    <div className="mx-auto w-full max-w-lg">
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-sans text-sm text-slate-600">
            Step {step + 1} of {STEPS.length}
          </span>
          <span className="font-sans text-sm font-medium text-[#05AAFF]">
            {STEPS[step].title}
          </span>
        </div>
        <Progress value={progress} className="h-1.5 bg-slate-200" />
      </div>

      {/* Step heading */}
      <div className="mb-8">
        <h2 className="font-[family-name:var(--font-agrandir)] text-2xl font-bold text-[#233a4a]">
          {STEPS[step].title}
        </h2>
        <p className="mt-1 font-sans text-sm text-slate-600">
          {STEPS[step].description}
        </p>
      </div>

      {/* Step 1: Personal Info */}
      {step === 0 && (
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="first_name" className="text-slate-700">First Name *</Label>
              <Input
                id="first_name"
                placeholder="Chukwuemeka"
                value={formData.first_name}
                onChange={(e) => updateField("first_name", e.target.value)}
                className="border-slate-200 bg-white text-[#233a4a] placeholder:text-slate-400 focus-visible:border-[#05AAFF] focus-visible:ring-[#05AAFF]/30"
                aria-invalid={!!errors.first_name}
              />
              {errors.first_name && <span className="text-xs text-red-400">{errors.first_name}</span>}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="last_name" className="text-slate-700">Last Name *</Label>
              <Input
                id="last_name"
                placeholder="Okafor"
                value={formData.last_name}
                onChange={(e) => updateField("last_name", e.target.value)}
                className="border-slate-200 bg-white text-[#233a4a] placeholder:text-slate-400 focus-visible:border-[#05AAFF] focus-visible:ring-[#05AAFF]/30"
                aria-invalid={!!errors.last_name}
              />
              {errors.last_name && <span className="text-xs text-red-400">{errors.last_name}</span>}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-slate-700">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@email.com"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              className="border-slate-200 bg-white text-[#233a4a] placeholder:text-slate-400 focus-visible:border-[#05AAFF] focus-visible:ring-[#05AAFF]/30"
              aria-invalid={!!errors.email}
            />
            {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="phone" className="text-slate-700">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+234 800 000 0000"
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className="border-slate-200 bg-white text-[#233a4a] placeholder:text-slate-400 focus-visible:border-[#05AAFF] focus-visible:ring-[#05AAFF]/30"
              aria-invalid={!!errors.phone}
            />
            {errors.phone && <span className="text-xs text-red-400">{errors.phone}</span>}
          </div>

          <div className="flex flex-col gap-3">
            <Label className="text-slate-700">Gender *</Label>
            <RadioGroup
              value={formData.gender}
              onValueChange={(value) => updateField("gender", value)}
              className="flex flex-wrap gap-4"
            >
              {["Male", "Female"].map((option) => (
                <div key={option} className="flex items-center gap-2">
                  <RadioGroupItem value={option} id={`gender-${option}`} />
                  <Label htmlFor={`gender-${option}`} className="cursor-pointer text-sm font-normal text-slate-600">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {errors.gender && <span className="text-xs text-red-400">{errors.gender}</span>}
          </div>
        </div>
      )}

      {/* Step 2: Background */}
      {step === 1 && (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label className="text-slate-700">Age Bracket *</Label>
            <Select value={formData.age_bracket} onValueChange={(value) => updateField("age_bracket", value)}>
              <SelectTrigger className="w-full border-slate-200 bg-white text-[#233a4a]">
                <SelectValue placeholder="Select age range" />
              </SelectTrigger>
              <SelectContent>
                {AGE_BRACKETS.map((bracket) => (
                  <SelectItem key={bracket} value={bracket}>{bracket}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.age_bracket && <span className="text-xs text-red-400">{errors.age_bracket}</span>}
          </div>

          <div className="flex flex-col gap-3">
            <Label className="text-slate-700">What best describes your current status? *</Label>
            <div className="flex flex-wrap gap-2">
              {EMPLOYMENT_STATUSES.map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => updateField("status", status)}
                  className={`${pillBase} ${formData.status === status ? pillActive : pillInactive}`}
                >
                  {status}
                </button>
              ))}
            </div>
            {errors.status && <span className="text-xs text-red-400">{errors.status}</span>}
          </div>

          <div className="flex flex-col gap-3">
            <Label className="text-slate-700">Are you an Abode Associate Pro? *</Label>
            <div className="flex gap-3">
              {["Yes", "No"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => updateField("is_abode_associate", option)}
                  className={`${pillBase} px-8 ${formData.is_abode_associate === option ? pillActive : pillInactive}`}
                >
                  {option}
                </button>
              ))}
            </div>
            {errors.is_abode_associate && <span className="text-xs text-red-400">{errors.is_abode_associate}</span>}
          </div>

          <div className="flex flex-col gap-3">
            <Label className="text-slate-700">Do you have an AbodeFlex account? *</Label>
            <div className="flex gap-3">
              {["Yes", "No"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => updateField("has_abodeflex_account", option)}
                  className={`${pillBase} px-8 ${formData.has_abodeflex_account === option ? pillActive : pillInactive}`}
                >
                  {option}
                </button>
              ))}
            </div>
            {errors.has_abodeflex_account && <span className="text-xs text-red-400">{errors.has_abodeflex_account}</span>}

            <AnimatePresence>
              {formData.has_abodeflex_account === "Yes" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-2 pt-2">
                    <Label htmlFor="abodeflex_email" className="text-slate-700">
                      AbodeFlex Account Email *
                    </Label>
                    <Input
                      id="abodeflex_email"
                      type="email"
                      placeholder="Enter the email on your AbodeFlex account"
                      value={formData.abodeflex_email}
                      onChange={(e) => updateField("abodeflex_email", e.target.value)}
                      className="border-slate-200 bg-white text-[#233a4a] placeholder:text-slate-400 focus-visible:border-[#05AAFF] focus-visible:ring-[#05AAFF]/30"
                      aria-invalid={!!errors.abodeflex_email}
                    />
                    {errors.abodeflex_email && <span className="text-xs text-red-400">{errors.abodeflex_email}</span>}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Step 3: Location & Discovery */}
      {step === 2 && (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label className="text-slate-700">Where are you based? *</Label>
            <Select value={formData.region} onValueChange={(value) => updateField("region", value)}>
              <SelectTrigger className="w-full border-slate-200 bg-white text-[#233a4a]">
                <SelectValue placeholder="Select your area" />
              </SelectTrigger>
              <SelectContent>
                {LOCATION_GROUPS.map((group) => (
                  <SelectGroup key={group.label}>
                    <SelectLabel className="font-sans text-xs font-semibold uppercase tracking-widest text-slate-500">
                      {group.label}
                    </SelectLabel>
                    {group.options.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectGroup>
                ))}
              </SelectContent>
            </Select>
            {errors.region && <span className="text-xs text-red-400">{errors.region}</span>}

            <AnimatePresence>
              {isOtherLocation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-2 pt-2">
                    <Label htmlFor="other_location" className="text-slate-700">
                      Please specify your location
                    </Label>
                    <Input
                      id="other_location"
                      placeholder="Type your area or neighbourhood"
                      value={formData.other_location}
                      onChange={(e) => updateField("other_location", e.target.value)}
                      className="border-slate-200 bg-white text-[#233a4a] placeholder:text-slate-400 focus-visible:border-[#05AAFF] focus-visible:ring-[#05AAFF]/30"
                      aria-invalid={!!errors.other_location}
                    />
                    {errors.other_location && (
                      <span className="text-xs text-red-400">{errors.other_location}</span>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-3">
            <Label className="text-slate-700">Have you attended a previous event with Jeffrey? *</Label>
            <div className="flex gap-3">
              {["Yes", "No"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => updateField("previous_attendee", option)}
                  className={`${pillBase} px-8 ${formData.previous_attendee === option ? pillActive : pillInactive}`}
                >
                  {option}
                </button>
              ))}
            </div>
            {errors.previous_attendee && <span className="text-xs text-red-400">{errors.previous_attendee}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-slate-700">How did you hear about us? *</Label>
            <Select value={formData.referral_source} onValueChange={(value) => updateField("referral_source", value)}>
              <SelectTrigger className="w-full border-slate-200 bg-white text-[#233a4a]">
                <SelectValue placeholder="Select source" />
              </SelectTrigger>
              <SelectContent>
                {REFERRAL_SOURCES.map((source) => (
                  <SelectItem key={source} value={source}>{source}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.referral_source && <span className="text-xs text-red-400">{errors.referral_source}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="invite_search" className="text-slate-700">Who invited you? *</Label>

            {isRefLocked ? (
              /* Locked state — ref from URL */
              <div className="relative">
                <Input
                  id="invite_search"
                  value={referredByUsername}
                  readOnly
                  className="border-slate-200 bg-slate-100 pr-10 text-slate-600"
                />
                <Lock size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            ) : inviteSelected ? (
              /* Selected state */
              <div className="relative">
                <Input
                  id="invite_search"
                  value={`${inviteSelected.first_name} ${inviteSelected.last_name} · @${inviteSelected.username}`}
                  readOnly
                  className="border-emerald-400 bg-emerald-50 pr-24 text-[#233a4a]"
                />
                <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-2">
                  <span className="rounded-full bg-emerald-500/20 px-1.5 py-0.5 font-sans text-[10px] font-semibold text-emerald-400">
                    ✓ Found
                  </span>
                  <button
                    type="button"
                    onClick={() => { setInviteSelected(null); setInviteQuery('') }}
                    className="text-slate-500 hover:text-[#233a4a]"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            ) : inviteNobody ? (
              /* Nobody state */
              <div className="relative">
                <Input
                  id="invite_search"
                  value="No referral"
                  readOnly
                  className="border-slate-200 bg-slate-50 pr-10 italic text-slate-500"
                />
                <button
                  type="button"
                  onClick={() => setInviteNobody(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-[#233a4a]"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              /* Search state */
              <div className="relative">
                <Input
                  id="invite_search"
                  placeholder="Search by name, email or phone..."
                  value={inviteQuery}
                  onChange={(e) => {
                    setInviteQuery(e.target.value)
                    if (e.target.value.trim().length >= 2) setShowDropdown(true)
                    else setShowDropdown(false)
                  }}
                  onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                  className={`border-slate-200 bg-white pr-10 text-[#233a4a] placeholder:text-slate-400 focus-visible:border-[#05AAFF] focus-visible:ring-[#05AAFF]/20${errors.referral_name ? ' border-red-400/50' : ''}`}
                />
                {inviteSearching && (
                  <Loader2 size={15} className="absolute right-3 top-1/2 -translate-y-1/2 animate-spin text-slate-500" />
                )}

                {/* Dropdown */}
                {showDropdown && inviteQuery.trim().length >= 2 && (
                  <div className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
                    {inviteResults.length > 0 ? (
                      inviteResults.slice(0, 5).map((result) => (
                        <button
                          key={result.username}
                          type="button"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => {
                            setInviteSelected(result)
                            setInviteQuery('')
                            setShowDropdown(false)
                            setErrors((prev) => { const n = { ...prev }; delete n.referral_name; return n })
                          }}
                          className="flex w-full items-center justify-between border-b border-slate-100 px-4 py-3 text-left transition last:border-b-0 hover:border-l-2 hover:border-l-teal-400 hover:bg-slate-50"
                        >
                          <div>
                            <p className="font-sans text-sm font-medium text-[#233a4a]">
                              {result.first_name} {result.last_name}
                            </p>
                            <p className="font-sans text-xs text-slate-600">{result.email}</p>
                          </div>
                          <span className="font-sans text-xs text-slate-500">@{result.username}</span>
                        </button>
                      ))
                    ) : !inviteSearching ? (
                      <div className="px-4 py-3 font-sans text-sm text-slate-500">
                        No users found — check spelling
                      </div>
                    ) : null}

                    {/* Nobody option — always last */}
                    <button
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        setInviteNobody(true)
                        setShowDropdown(false)
                        setErrors((prev) => { const n = { ...prev }; delete n.referral_name; return n })
                      }}
                      className="flex w-full border-t border-slate-200 px-4 py-3 text-left font-sans text-sm text-slate-500 transition hover:bg-slate-50"
                    >
                      Nobody invited me — skip this
                    </button>
                  </div>
                )}
              </div>
            )}

            {errors.referral_name && <span className="text-xs text-red-400">{errors.referral_name}</span>}
          </div>
        </div>
      )}

      {/* Server Error */}
      {serverError && (
        <div className="mt-6 rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3">
          <p className="font-sans text-sm text-red-400">{serverError}</p>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-8 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          {step > 0 ? (
            <FormButton
              type="button"
              variant="ghost"
              onClick={handleBack}
              className="gap-2 text-slate-600 hover:text-[#233a4a]"
            >
              <ArrowLeft className="size-4" />
              Back
            </FormButton>
          ) : (
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-sans text-sm text-slate-600 transition-colors hover:text-[#233a4a]"
            >
              <ArrowLeft className="size-4" />
              Home
            </Link>
          )}

          {step < STEPS.length - 1 ? (
            <FormButton
              type="button"
              onClick={handleNext}
              className="gap-2 rounded-full bg-[#05AAFF] px-6 text-white hover:bg-[#0499E5]"
            >
              Continue
              <ArrowRight className="size-4" />
            </FormButton>
          ) : (
            <FormButton
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="gap-2 rounded-full bg-[#05AAFF] px-6 text-white hover:bg-[#0499E5]"
            >
              {submitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit My Application →"
              )}
            </FormButton>
          )}
        </div>
      </div>
    </div>
  )
}
