import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#F5F5F5] pt-14 pb-10">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[72px]">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-36">
          <div className="max-w-[460px]">
            <Image
              src="/assets/footer-profile.png"
              alt="Jeffery Itepu"
              width={44}
              height={44}
            />
            <p className="mt-3 text-[26px] font-bold leading-none text-[#0093FF]">
              Jeffrey Itepu
            </p>
            <p className="mt-1 max-w-[350px] text-[30px] leading-[165%] text-[#4E545B]">
              builds real estate communities that expand access to ownership
              through technology, innovation, and trust.
            </p>

            <p className="mt-8 text-[20px] font-medium tracking-[0.12em] text-[#62666B] uppercase">
              Connect with Jeff
            </p>
            <div className="mt-4 flex items-center gap-6">
              <Link href="#" aria-label="LinkedIn">
                <Image
                  src="/assets/linkedin.svg"
                  alt=""
                  aria-hidden
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Image
                  src="/assets/instagram.svg"
                  alt=""
                  aria-hidden
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Image
                  src="/assets/twitter.svg"
                  alt=""
                  aria-hidden
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Image
                  src="/assets/youtube.svg"
                  alt=""
                  aria-hidden
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>

          <div className="grid gap-10 md:pt-[72px] lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-[13px] font-medium tracking-[0.12em] text-[#22262A] uppercase">
                Main Pages
              </p>
              <ul className="mt-6 space-y-5">
                <li className="text-[16px] leading-[145%] text-[#505153]">
                  <Link href="/about" className="transition hover:text-[#05AAFF]">
                    About Jeff
                  </Link>
                </li>
                <li className="text-[16px] leading-[145%] text-[#505153]">
                  <Link href="/foundation" className="transition hover:text-[#05AAFF]">
                    Foundation
                  </Link>
                </li>
                <li className="text-[16px] leading-[145%] text-[#505153]">
                  <Link
                    href="https://realestate-university.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-[#05AAFF]"
                  >
                    Real Estate University
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[13px] font-medium tracking-[0.12em] text-[#22262A] uppercase">
                Resources
              </p>
              <ul className="mt-6 space-y-5">
                <li className="text-[16px] leading-[145%] text-[#505153]">
                  <Link href="/book-jeff" className="transition hover:text-[#05AAFF]">
                    Book Jeff
                  </Link>
                </li>
                <li className="text-[16px] leading-[145%] text-[#505153]">
                  <Link
                    href="/ownership-network"
                    className="transition hover:text-[#05AAFF]"
                  >
                    Join the Ownership Network
                  </Link>
                </li>
                <li className="text-[16px] leading-[145%] text-[#505153]">
                  <Link href="/learn" className="transition hover:text-[#05AAFF]">
                    Mentorship
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-12 text-[14px] text-[#505153]">© 2025 Jeffrey Itepu</p>
        <p className="mt-8 max-w-full text-[14px] leading-[170%] text-[#505153]">
          Jeffrey Itepu is a real estate entrepreneur and Co-Founder & CEO of
          Abode. He is also a co-founder of Acquest Properties Limited. The
          businesses referenced on this site may receive strategic support,
          advisory services, or leadership oversight under his direction. Client
          experiences may vary depending on services rendered, and past
          performance is not indicative of future results.
        </p>
      </div>
    </footer>
  );
}
