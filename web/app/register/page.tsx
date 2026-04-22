import type { Metadata } from 'next'
import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RegistrationForm } from "@/components/registration-form"

export const metadata: Metadata = {
  title: 'Register — Jeffrey Itepu',
  description:
    'Register for Jeffrey Itepu\'s real estate community. Join the Ownership Network and start your property investment journey.',
  alternates: {
    canonical: '/register',
  },
  openGraph: {
    title: 'Register — Jeffrey Itepu',
    description:
      'Register for Jeffrey Itepu\'s real estate community. Join the Ownership Network.',
    url: '/register',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Register — Jeffrey Itepu',
    description:
      'Register for Jeffrey Itepu\'s real estate community. Join the Ownership Network.',
  },
}

export default function RegisterPage() {
  return (
    <div className="h-screen bg-[#f6f7fb] lg:flex lg:overflow-hidden">

      {/* ── Left panel (desktop only) ── */}
      <aside className="hidden lg:flex lg:w-[420px] lg:shrink-0 lg:flex-col lg:justify-between lg:border-r lg:border-[#E0EAF1] lg:bg-white lg:px-12 lg:py-12 xl:w-[480px]">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/assets/icon.svg" alt="Logo" width={14} height={20} className="h-5 w-auto" />
            <span className="font-[family-name:var(--font-agrandir)] text-base font-bold tracking-tight text-[#233a4a]">
              JEFFREY ITEPU
            </span>
            <span className="rounded-full bg-[#05AAFF]/10 px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-widest text-[#05AAFF]">
              Register
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-10 font-[family-name:var(--font-agrandir)] text-4xl font-bold leading-tight tracking-tight text-[#233a4a] xl:text-5xl">
            One application.<br />
            One community.<br />
            <span className="text-[#05AAFF]">Zero cost.</span>
          </h1>

          {/* Subtext */}
          <p className="mt-5 font-sans text-base leading-relaxed text-[#4E545B]">
            Join Jeffrey Itepu&apos;s real estate community. Apply below — we review every application and reach out within 24–48 hours.
          </p>

          {/* Details card */}
          <div className="mt-8 space-y-3 rounded-xl border border-[#E0EAF1] bg-[#f6f7fb] p-5">
            <div className="flex items-center gap-3">
              <span className="text-base">🏠</span>
              <span className="font-sans text-sm text-[#4E545B]">Real Estate Community</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-base">📍</span>
              <span className="font-sans text-sm text-[#4E545B]">Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-base">✅</span>
              <span className="font-sans text-sm text-[#4E545B]">Free to join</span>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <blockquote className="mt-12 border-l-2 border-[#05AAFF]/40 pl-5">
          <p className="font-sans text-sm italic leading-relaxed text-[#4E545B]">
            &quot;Working with Jeffrey changed how I think about money and property entirely.&quot;
          </p>
          <footer className="mt-3 font-sans text-xs text-[#505153]">
            — Fatima M., Kano
          </footer>
        </blockquote>
      </aside>

      {/* ── Right panel ── */}
      <main className="flex flex-1 flex-col overflow-hidden px-6 py-10 lg:px-12 lg:py-12">
        {/* Mobile header */}
        <div className="mb-8 flex items-center justify-between lg:hidden">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/icon.svg" alt="Logo" width={14} height={20} className="h-5 w-auto" />
            <span className="font-[family-name:var(--font-agrandir)] text-base font-bold tracking-tight text-[#233a4a]">
              JEFFREY ITEPU
            </span>
          </Link>
          <span className="rounded-full bg-[#05AAFF]/10 px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-widest text-[#05AAFF]">
            Register
          </span>
        </div>

        {/* Panel header */}
        <div className="mb-8 max-w-lg">
          <span className="inline-block rounded-full border border-[#E0EAF1] px-4 py-1.5 font-sans text-xs uppercase tracking-widest text-[#505153]">
            Registration
          </span>
          <p className="mt-3 font-sans text-sm leading-relaxed text-[#505153]">
            Fill in your details below. We&apos;ll reach out within 24–48 hours.
          </p>
        </div>

        <Suspense fallback={<div className="text-sm text-[#B1B1B1]">Loading form...</div>}>
          <RegistrationForm />
        </Suspense>
      </main>
    </div>
  )
}
