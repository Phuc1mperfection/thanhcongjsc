import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import type { Variant } from "@/lib/products";

export function ProductVariants({ variants }: { variants?: Variant[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  if (!variants?.length) return null;

  return (
    <section className="py-12 md:py-16">
      <div className="container-tc">
        <header className="mb-8">
          <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">06</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold text-deep">
            Các biến thể
          </h2>
        </header>

        <div className="grid gap-4">
          {variants.map((v, i) => {
            const open = openIdx === i;
            return (
              <article
                key={v.name}
                className="rounded-2xl border border-deep/10 bg-card shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-secondary/40 transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-deep text-white font-bold text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-deep text-lg">{v.name}</h3>
                      <p className="text-xs text-ink-soft mt-0.5 line-clamp-1">{v.description}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-deep shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 border-t border-deep/5">
                      <p className="text-sm text-ink leading-relaxed">{v.description}</p>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {v.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-ink">
                            <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
