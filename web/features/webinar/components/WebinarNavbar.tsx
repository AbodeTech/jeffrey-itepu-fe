"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { JEFFERY_ITEPU_REFERRAL_USERNAME } from "@/lib/domain-targeting";

const REGISTER_HREF = "/register";

export function WebinarNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref") ?? JEFFERY_ITEPU_REFERRAL_USERNAME;
    localStorage.setItem("abode_ref", ref);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-slate-200 bg-white/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between space-x-3.5 px-6 py-5 lg:px-12 lg:py-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/webinar/logo.svg"
            alt="Abode Webinar"
            width={120}
            height={32}
            className="h-8 w-auto object-contain"
          />
        </Link>
        <Link
          href={REGISTER_HREF}
          className="rounded-full border border-primary px-5 py-2 font-sans text-[9px] font-medium uppercase tracking-widest text-abode-black transition-colors hover:bg-primary hover:text-white md:text-sm"
        >
          Register Free
        </Link>
      </div>
    </nav>
  );
}
