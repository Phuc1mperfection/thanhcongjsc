import { Check } from "lucide-react";

export function ProductFeatures({ features, sectionNumber }: { features: string[]; sectionNumber: number }) {
  if (!features?.length) return null;
  return (
    <section className="py-12 md:py-16">
      <div className="container-tc">
        <header className="mb-8">
          <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">{String(sectionNumber).padStart(2, "0")}</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold text-deep">
            Tính năng nổi bật
          </h2>
        </header>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 rounded-2xl border border-deep/10 bg-card p-5 shadow-sm hover:shadow-md hover:border-gold/30 transition"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold/15 text-gold shrink-0">
                <Check className="w-4 h-4" />
              </span>
              <p className="text-sm text-ink leading-relaxed">{f}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
