import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { SuccessContent } from "@/components/success-content"

export const metadata: Metadata = {
  title: 'Registration Submitted — Jeffrey Itepu',
  description: 'Your registration has been received. We will reach out within 24–48 hours.',
  alternates: {
    canonical: '/register/success',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f7fb]">
      {/* Top bar */}
      <nav className="flex items-center justify-between px-6 py-5 lg:px-12 lg:py-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/icon.svg" alt="Logo" width={14} height={20} className="h-5 w-auto" />
          <span className="font-[family-name:var(--font-agrandir)] text-lg font-semibold tracking-tight text-[#233a4a]">
            JEFFREY ITEPU
          </span>
        </Link>
      </nav>

      <SuccessContent />
    </div>
  )
}
