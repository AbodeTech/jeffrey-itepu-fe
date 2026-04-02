import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

type GalleryItem = {
  src: string;
  alt: string;
  widthClass: string;
  heightClass: string;
};

const galleryItems: readonly GalleryItem[] = [
  {
    src: "/assets/associate-gallery-1.png",
    alt: "Associate in Qatar at heritage building",
    widthClass: "w-[292px]",
    heightClass: "h-[340px]",
  },
  {
    src: "/assets/associate-gallery-2.png",
    alt: "Associate in Qatar at museum exterior",
    widthClass: "w-[292px]",
    heightClass: "h-[306px]",
  },
  {
    src: "/assets/associate-gallery-3.png",
    alt: "Associate in Qatar at waterfront",
    widthClass: "w-[332px]",
    heightClass: "h-[392px]",
  },
  {
    src: "/assets/associate-gallery-1.png",
    alt: "Associate in Qatar at heritage building duplicate",
    widthClass: "w-[292px]",
    heightClass: "h-[340px]",
  },
  {
    src: "/assets/associate-gallery-2.png",
    alt: "Associate in Qatar at museum exterior duplicate",
    widthClass: "w-[292px]",
    heightClass: "h-[306px]",
  },
] as const;

export function OwnershipNetworkAssociatesGallerySection() {
  return (
    <section className="w-full bg-[#F3F3F5] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-4 text-center sm:px-6 lg:px-10">
        <h2
          className="text-[46px] font-bold leading-[106%] tracking-[-0.03em] text-[#233A4A] sm:text-[58px] lg:text-[68px]"
          style={{ fontFamily: "var(--font-agrandir)" }}
        >
          Associates Gallery
        </h2>
      </div>

      <div className="mt-10 overflow-x-auto px-4 pb-4 sm:px-6 lg:mt-12 lg:px-0 lg:pl-[max(2.5rem,calc((100%-1320px)/2+2.5rem))] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-max gap-3 lg:gap-4">
          {galleryItems.map((item, index) => (
            <article key={`${item.src}-${index}`} className="shrink-0">
              <div className={`relative overflow-hidden rounded-[2px] ${item.widthClass} ${item.heightClass}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 332px"
                />
              </div>
              <p className={`${caveat.className} mt-2 text-center text-[34px] leading-none text-[#233A4A]`}>
                Associate in Qatar&apos;2025
              </p>
            </article>
          ))}
          <div className="h-px w-4 shrink-0 sm:w-6 lg:w-10" aria-hidden />
        </div>
      </div>
    </section>
  );
}
