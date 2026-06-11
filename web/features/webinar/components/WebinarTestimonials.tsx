const testimonials = [
  {
    quote:
      "My Abode Academy experience was very good. The one week training exposed me to the rudiments of land itself; plot sizes and necessary documentation when it comes to real estate or owning a property. The academy built a confidence in me to market, earn and own real estate and today I'm proud of what I do.",
    name: "Samuel Babatunde",
  },
  {
    quote:
      "Abode Academy has been one of the great things that changed my life and transformed me till today. It was my first physical meeting with the company in July 2025 and I learnt how to sell to everyone like a beggar who is never shy to talk to anyone and this has helped me till today.",
    name: "Samuel Ayroinde",
  },
];

export function WebinarTestimonials() {
  return (
    <section className="bg-white px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 font-sans text-xs uppercase tracking-widest text-primary">
          Testimonials
        </span>

        <h2 className="mt-6 text-left font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-abode-black md:text-5xl">
          <span className="text-balance">Real people, real results</span>
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-primary/20 bg-blue-50/40 p-8"
            >
              <blockquote className="font-sans text-base leading-relaxed text-slate-700">
                {`"${t.quote}"`}
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20">
                  <span className="font-[family-name:var(--font-display)] text-xs font-bold text-primary">
                    {t.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
                <p className="font-sans text-sm font-semibold text-abode-black">{t.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/De_pe3bo3c4"
              title="Abode Academy testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
