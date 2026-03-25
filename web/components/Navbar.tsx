"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const links = [
  { label: "Home", href: "/" },
  { label: "Invest", href: "/invest" },
  { label: "Learn", href: "/learn" },
  { label: "About", href: "/about" },
  { label: "Book Jeff", href: "/book-jeff" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && hash !== "#contact";
    }
    if (href.startsWith("/#")) {
      return pathname === "/" && hash === href.replace("/", "");
    }
    return pathname === href;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent max-lg:border-b max-lg:border-[#E8E8E8] max-lg:bg-white">
      <nav className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="cursor-pointer">
          <Image src="/assets/icon.svg" alt="Logo" width={14} height={20} className="h-5 w-auto" />
        </Link>
        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((item) => (
            <li
              key={item.href}
              className={`text-[12px] transition ${isActive(item.href) ? "text-[#05AAFF]" : "text-[#5A5A5A] hover:text-[#05AAFF]"}`}
            >
              <Link href={item.href} className="cursor-pointer">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <Link href="/ownership-network">
            <Button className="rounded-[12px] bg-[#05AAFF] px-5 py-2.5 text-[12px] text-white hover:bg-[#0499E5]">
              Join the Ownership Network
            </Button>
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-[#656B70] lg:hidden"
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex min-h-dvh w-full flex-col bg-white px-6 pb-8 pt-4 lg:hidden"
          >
            <div className="flex h-full min-h-0 w-full flex-1 flex-col">
              <div className="flex items-center justify-between">
                <Link href="/" className="cursor-pointer">
                  <Image src="/assets/icon.svg" alt="Logo" width={14} height={20} className="h-6 w-auto" />
                </Link>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="text-[24px] leading-none text-[#6A6A6A]"
                >
                  ×
                </button>
              </div>

              <ul className="mt-10 flex flex-col gap-6">
                {links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-[10px] px-3 py-2 text-[30px] leading-[140%] transition ${
                        isActive(item.href)
                          ? "bg-[#E8F2FC] text-[#05AAFF]"
                          : "text-[#294256] hover:text-[#05AAFF]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link href="/ownership-network" onClick={() => setOpen(false)}>
                  <Button className="w-full rounded-[14px] bg-[#05AAFF] py-3 text-[14px] text-white hover:bg-[#0499E5]">
                    Join the Ownership Network
                  </Button>
                </Link>
                <p className="mt-4 text-center text-[13px] text-[#B1B1B1]">
                  Building ownership, one structure at a time.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
