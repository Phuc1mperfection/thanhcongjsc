export function ProductStructure({ structure, sectionNumber }: { structure: string[]; sectionNumber: number }) {
  if (!structure?.length) return null;
  return (
    <section className="py-12 md:py-16 bg-secondary/40">
      <div className="container-tc">
        <header className="mb-8">
          <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">{String(sectionNumber).padStart(2, "0")}</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold text-deep">
            Cấu tạo & Thành phần
          </h2>
        </header>
        <ol className="grid gap-4 md:grid-cols-2">
          {structure.map((s, i) => (
            <li
              key={s}
              className="relative flex gap-4 rounded-2xl border border-deep/10 bg-card p-5 shadow-sm"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-deep text-white font-bold text-sm shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-ink leading-relaxed pt-1.5">{s}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
