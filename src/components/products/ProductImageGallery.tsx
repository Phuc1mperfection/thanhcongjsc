import { useState } from "react";
import { ImageIcon, type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import type { Category, Subcategory } from "@/lib/products";

function Ico({ name, className }: { name: string; className?: string }) {
  const Comp = (Icons as unknown as Record<string, LucideIcon>)[name] ?? Icons.Circle;
  return <Comp className={className} aria-hidden />;
}

export function ProductPlaceholder({
  category,
  subcategory,
  label,
  className = "",
  iconSize = "w-24 h-24",
}: {
  category: Category;
  subcategory: Subcategory;
  label?: string;
  className?: string;
  iconSize?: string;
}) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-gradient-to-br ${category.accent} ${className}`}
      role="img"
      aria-label={`${subcategory.name} - hình ảnh sản phẩm`}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/15 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-black/10 blur-3xl" />

      <div className="relative h-full w-full flex flex-col items-center justify-center text-white p-3 text-center">
        <Ico name={subcategory.icon || "Circle"} className={`${iconSize} opacity-80 drop-shadow-md`} />
        {label !== "" && (
          <>
            <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] font-semibold text-white/80">
              <ImageIcon className="w-3 h-3" />
              {label ?? "Hình ảnh sản phẩm"}
            </div>
            <div className="mt-2 font-display font-bold text-base md:text-lg leading-tight max-w-[80%]">
              {subcategory.name}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function ImageOrPlaceholder({
  src,
  category,
  subcategory,
  label,
  iconSize,
}: {
  src?: string;
  category: Category;
  subcategory: Subcategory;
  label?: string;
  iconSize?: string;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={subcategory.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }
  return (
    <ProductPlaceholder
      category={category}
      subcategory={subcategory}
      label={label}
      iconSize={iconSize}
    />
  );
}

export function ProductImageGallery({
  category,
  subcategory,
}: {
  category: Category;
  subcategory: Subcategory;
}) {
  const gallery: (string | undefined)[] = (() => {
    const list: (string | undefined)[] = [];
    // Always render 1 main + 3 thumbs
    return [list[0], list[1], list[2], list[3]];
  })();

  const [active, setActive] = useState(0);
  const main = gallery[active];

  return (
    <section className="py-6 md:py-10">
      <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        {/* Main image */}
        <div className="group relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden rounded-3xl border border-deep/10 bg-card shadow-[var(--shadow-card)]">
          <ImageOrPlaceholder
            src={main}
            category={category}
            subcategory={subcategory}
            iconSize="w-28 h-28 md:w-36 md:h-36"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-deep shadow-sm">
              {category.nameVn}
            </span>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
          {[1, 2, 3].map((i) => {
            const src = gallery[i];
            const isActive = active === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`group relative aspect-square lg:aspect-[16/10] overflow-hidden rounded-2xl border bg-card shadow-sm hover:shadow-md transition-all ${
                  isActive ? "border-gold ring-2 ring-gold/40" : "border-deep/10 hover:border-gold/40"
                }`}
                aria-label={`Xem ảnh ${i + 1}`}
              >
                <ImageOrPlaceholder
                  src={src}
                  category={category}
                  subcategory={subcategory}
                  label={`Ảnh ${i + 1}`}
                  iconSize="w-12 h-12 md:w-14 md:h-14"
                />
                <div className="absolute inset-0 bg-deep/0 group-hover:bg-deep/10 transition-colors" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
