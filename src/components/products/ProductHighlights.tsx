import { Sparkles } from "lucide-react";

export function ProductHighlights({ highlights }: { highlights: string[] }) {
  if (!highlights?.length) return null;
  return (
    <section className="py-12 md:py-16">
      <div className="container-tc">
        <header className="mb-8">
          <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">04</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold text-deep">
            Đặc tính kỹ thuật
          </h2>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h}
              className="group relative overflow-hidden rounded-2xl border border-deep/10 bg-gradient-to-br from-white to-secondary/40 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gold/15 text-gold mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <p className="text-sm text-ink leading-relaxed">{h}</p>
              <div className="pointer-events-none absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-gold/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductClassification({ items }: { items: string[] }) {
  if (!items?.length) return null;
  return (
    <section className="py-12 md:py-16 bg-secondary/40">
      <div className="container-tc">
        <header className="mb-8">
          <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">05</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold text-deep">
            Phân loại sản phẩm
          </h2>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it}
              className="rounded-2xl border border-deep/10 bg-card p-5 shadow-sm"
            >
              <p className="text-sm text-ink leading-relaxed">{it}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
