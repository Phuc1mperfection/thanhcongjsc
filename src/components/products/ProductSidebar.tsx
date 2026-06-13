import { Link } from "@tanstack/react-router";
import { ArrowLeft, type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import { getSubcategorySlug, type Category } from "@/lib/products";

function Ico({ name, className }: { name: string; className?: string }) {
  const Comp = (Icons as unknown as Record<string, LucideIcon>)[name] ?? Icons.Circle;
  return <Comp className={className} aria-hidden />;
}

export function ProductSidebar({
  category,
  activeSlug,
}: {
  category: Category;
  activeSlug: string;
}) {
  return (
    <aside className="lg:sticky lg:top-24 self-start rounded-2xl border border-deep/10 bg-card p-5 shadow-sm">
      <Link
        to="/products"
        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft hover:text-deep transition"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Tất cả sản phẩm
      </Link>

      <div className="mt-4">
        <div className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
          {category.nameEn}
        </div>
        <h2 className="mt-1 text-lg font-display font-bold text-deep leading-tight">
          {category.nameVn}
        </h2>
      </div>

      <nav className="mt-5 flex flex-col gap-1">
        {category.subcategories.map((s) => {
          const slug = getSubcategorySlug(s);
          const active = slug === activeSlug;
          return (
            <Link
              key={s.name}
              to="/products/$categoryId/$subcategorySlug"
              params={{ categoryId: category.id, subcategorySlug: slug }}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition ${
                active
                  ? "bg-deep text-white shadow-sm"
                  : "text-ink hover:bg-secondary/80 hover:text-deep"
              }`}
            >
              <span
                className={`inline-flex items-center justify-center w-7 h-7 rounded-md shrink-0 ${
                  active ? "bg-gold text-gold-foreground" : "bg-white text-gold shadow-sm"
                }`}
              >
                <Ico name={s.icon || "Circle"} className="w-3.5 h-3.5" />
              </span>
              <span className="font-medium leading-tight">{s.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
