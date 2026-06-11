import Image from "next/image";

export function WebinarFooter() {
  return (
    <footer className="bg-white px-6 py-12 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <Image
            src="/webinar/logo.svg"
            alt="Abode Webinar"
            width={100}
            height={28}
            className="h-7 w-auto object-contain"
          />
        </div>

        <div className="mt-8 border-t border-slate-200" />

        <div className="mt-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex gap-6">
            <span className="font-sans text-xs text-slate-400">AbodeFlex</span>
          </div>
          <span className="font-sans text-xs text-slate-500">Abode Webinar 2026</span>
        </div>
      </div>
    </footer>
  );
}
