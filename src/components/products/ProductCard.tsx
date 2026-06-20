import { useState } from "react";
import { ArrowRight, ChevronDown, type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Category } from "@/types/products";
import { getSubcategorySlug } from "@/lib/product-utils";

function Ico({ name, className }: { name: string; className?: string }) {
  const Comp = (Icons as unknown as Record<string, LucideIcon>)[name] ?? Icons.Circle;
  return <Comp className={className} aria-hidden />;
}

const gradientMap: Record<string, string> = {
  "bridge-bearings": "from-amber-600 to-amber-400",
  "expansion-joints": "from-blue-600 to-blue-400",
  "noise-barriers": "from-orange-600 to-orange-400",
  geotechnical: "from-slate-700 to-slate-500",
  maintenance: "from-slate-600 to-slate-400",
};

export function ProductCard({ category, index }: { category: Category; index: number }) {
  const [open, setOpen] = useState(false);
  const gradientClass = gradientMap[category.id] || category.accent;

  return (
    <article className="group relative flex flex-col rounded-2xl border border-deep/10 bg-card overflow-hidden shadow-(--shadow-card) transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)] hover:border-gold/40">
      {/* Image */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img
          src={category.image}
          alt={`${category.nameVn} - ${category.nameEn}`}
          width={1024}
          height={768}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/10 to-transparent" />
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-semibold text-deep">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {category.nameEn}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-display font-bold text-2xl leading-tight">
            {category.nameVn}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <p className="text-sm text-ink-soft leading-relaxed line-clamp-2">{category.description}</p>

        {/* Sub-categories pills */}
        <div className="mt-5">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={`sub-${category.id}`}
            className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-deep hover:text-gold transition-colors"
          >
            <span>Danh mục · {category.subcategories.length}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>
          <div
            id={`sub-${category.id}`}
            className={`grid transition-[grid-template-rows] duration-500 ease-out ${
              open ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <ul className="flex flex-col gap-1.5">
                {category.subcategories.map((s, i) => (
                  <li key={s.name}>
                    <Link
                      to="/products/$categoryId/$subcategorySlug"
                      params={{ categoryId: category.id, subcategorySlug: getSubcategorySlug(s) }}
                      className="flex items-center gap-2.5 rounded-lg bg-secondary/60 px-3 py-2 text-sm text-ink hover:bg-gold/10 hover:text-deep transition-colors cursor-pointer"
                      style={{
                        animation: open ? `fade-in 0.4s ease-out ${i * 50}ms both` : "none",
                      }}
                    >
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white text-gold shadow-sm">
                        <Ico name={s.icon || "Circle"} className="w-3.5 h-3.5" />
                      </span>
                      <span className="font-medium">{s.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Horizontal scroll pills (always visible preview) */}
          {!open && (
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {category.subcategories.slice(0, 4).map((s) => (
                <Link
                  key={s.name}
                  to="/products/$categoryId/$subcategorySlug"
                  params={{ categoryId: category.id, subcategorySlug: getSubcategorySlug(s) }}
                  className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-deep border border-transparent hover:border-gold/40 hover:bg-gold/5 transition cursor-pointer"
                >
                  <Ico name={s.icon || "Circle"} className="w-3 h-3 text-gold" />
                  {s.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Applications */}
        <div className="mt-5 pt-5 border-t border-dashed border-deep/10">
          <div className="text-[10px] uppercase tracking-[0.2em] text-ink-soft font-semibold">
            Ứng dụng
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {category.applications.map((a) => (
              <span
                key={a}
                className="text-xs text-ink-soft before:content-['•'] before:text-gold before:mr-1.5 first:before:content-none"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          to="/products/$categoryId/$subcategorySlug"
          params={{
            categoryId: category.id,
            subcategorySlug: getSubcategorySlug(category.subcategories[0]),
          }}
          className="mt-6 inline-flex items-center justify-between gap-2 rounded-md bg-deep text-deep-foreground px-4 py-3 text-sm font-semibold hover:bg-gold hover:text-gold-foreground transition-colors group/btn"
          aria-label={`Tìm hiểu thêm về ${category.nameVn}`}
        >
          <span>Tìm hiểu thêm</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>

      {/* Glow on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/20 blur-2xl -z-10" />
    </article>
  );
}
