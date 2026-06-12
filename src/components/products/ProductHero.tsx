import { Link } from "@tanstack/react-router";
import { ChevronRight, type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import type { Category, Subcategory } from "@/lib/products";

function Ico({ name, className }: { name: string; className?: string }) {
  const Comp = (Icons as unknown as Record<string, LucideIcon>)[name] ?? Icons.Circle;
  return <Comp className={className} aria-hidden />;
}

export function ProductHero({
  category,
  subcategory,
}: {
  category: Category;
  subcategory: Subcategory;
}) {
  return (
    <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className={`absolute -top-20 -right-20 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br ${category.accent} opacity-20 blur-3xl`} />
      </div>

      <div className="container-tc">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm text-ink-soft">
          <Link to="/" className="hover:text-deep">Trang chủ</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/products" className="hover:text-deep">Sản phẩm</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-deep font-medium">{category.nameVn}</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-deep font-semibold truncate max-w-[60vw]">{subcategory.name}</span>
        </nav>

        <div className="mt-8 grid lg:grid-cols-[1fr_auto] gap-6 items-end animate-fade-in">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-deep text-[11px] font-semibold uppercase tracking-[0.18em]">
              <Ico name={category.icon} className="w-3.5 h-3.5 text-gold" />
              {category.nameEn}
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-deep leading-[1.05] tracking-tight">
              {subcategory.name}
            </h1>
            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-gold font-semibold">
              {category.nameEn} · {category.nameVn}
            </p>
            <p className="mt-5 max-w-2xl text-lg text-ink-soft leading-relaxed">
              {subcategory.description}
            </p>
          </div>
          <div className="hidden lg:flex shrink-0 items-center justify-center w-28 h-28 rounded-3xl bg-white shadow-[var(--shadow-card)] border border-deep/10">
            <Ico name={subcategory.icon} className="w-12 h-12 text-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
