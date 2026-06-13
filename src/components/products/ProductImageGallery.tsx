import { useMemo, useState } from "react";
import { ImageIcon, type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import type { Category, SubCategory } from "@/types/products";

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
  subcategory: SubCategory;
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
        <Ico
          name={subcategory.icon || "Circle"}
          className={`${iconSize} opacity-80 drop-shadow-md`}
        />

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
  imageClassName = "",
}: {
  src?: string;
  category: Category;
  subcategory: SubCategory;
  label?: string;
  iconSize?: string;
  imageClassName?: string;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={subcategory.name}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover ${imageClassName}`}
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
  subcategory: SubCategory;
}) {
  const gallery = useMemo<(string | undefined)[]>(() => {
    const images = subcategory.images?.length
      ? subcategory.images
      : subcategory.image
        ? [subcategory.image]
        : [];

    return [images[0], images[1], images[2], images[3]];
  }, [subcategory.images, subcategory.image]);

  const [active, setActive] = useState(0);
  const main = gallery[active];

  return (
    <section className="py-6 md:py-10">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_112px] xl:grid-cols-[minmax(0,1fr)_128px]">
        {/* Main image */}
        <div className="group relative aspect-[4/3] md:aspect-[16/10] xl:aspect-[16/9] overflow-hidden rounded-[2rem] border border-deep/10 bg-card shadow-[var(--shadow-card)]">
          <div
            key={active}
            className="absolute inset-0 animate-in fade-in zoom-in-95 duration-500"
          >
            <ImageOrPlaceholder
              src={main}
              category={category}
              subcategory={subcategory}
              iconSize="w-28 h-28 md:w-40 md:h-40"
              imageClassName="transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-deep/35 via-transparent to-transparent opacity-80" />

          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-deep shadow-sm">
              {active + 1} / {gallery.length}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-deep shadow-sm">
              {category.nameVn}
            </span>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-3 lg:grid-cols-1 lg:auto-rows-fr">
          {gallery.map((src, i) => {
            const isActive = active === i;

            return (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={[
                  "group relative aspect-square overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300",
                  "hover:-translate-y-0.5 hover:shadow-md",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60",
                  isActive
                    ? "border-gold ring-2 ring-gold/35 shadow-md"
                    : "border-deep/10 hover:border-gold/40",
                ].join(" ")}
                aria-label={`Xem ảnh ${i + 1} của ${subcategory.name}`}
                aria-pressed={isActive}
              >
                <ImageOrPlaceholder
                  src={src}
                  category={category}
                  subcategory={subcategory}
                  label=""
                  iconSize="w-9 h-9 md:w-10 md:h-10"
                  imageClassName="transition-transform duration-500 group-hover:scale-110"
                />

                <div
                  className={[
                    "absolute inset-0 transition-colors duration-300",
                    isActive ? "bg-deep/0" : "bg-deep/5 group-hover:bg-deep/10",
                  ].join(" ")}
                />

                {isActive && (
                  <div className="absolute inset-x-3 bottom-2 h-0.5 rounded-full bg-gold" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}