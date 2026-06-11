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
              builds real estate communities that expand access to property
              ownership through technology.
            </p>

            <p className="mt-8 text-[20px] font-medium tracking-[0.12em] text-[#62666B] uppercase">
              Connect with me:
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
                  About Jeff
                </li>
                <li className="text-[16px] leading-[145%] text-[#505153]">
                  Invest With Jeff
                </li>
                <li className="text-[16px] leading-[145%] text-[#505153]">
                  Real Estate University
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[13px] font-medium tracking-[0.12em] text-[#22262A] uppercase">
                Resources
              </p>
              <ul className="mt-6 space-y-5">
                <li className="text-[16px] leading-[145%] text-[#505153]">
                  <Link href="/webinar" className="transition hover:text-[#05AAFF]">
                    Webinar
                  </Link>
                </li>
                <li className="text-[16px] leading-[145%] text-[#505153]">
                  Book Jeff
                </li>
                <li className="text-[16px] leading-[145%] text-[#505153]">
                  Join the Ownership Network
                </li>
                <li className="text-[16px] leading-[145%] text-[#505153]">
                  Learn With Jeff
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
