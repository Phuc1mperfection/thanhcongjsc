import { MapPin } from "lucide-react";

export function ProductApplications({ applications, sectionNumber }: { applications: string[]; sectionNumber: number }) {
  if (!applications?.length) return null;
  return (
    <section className="py-12 md:py-16 bg-secondary/40">
      <div className="container-tc">
        <header className="mb-8">
          <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">{String(sectionNumber).padStart(2, "0")}</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold text-deep">
            Ứng dụng thực tế
          </h2>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {applications.map((a) => (
            <div
              key={a}
              className="group flex items-center gap-3 rounded-2xl border border-deep/10 bg-card p-5 shadow-sm hover:border-gold/40 hover:shadow-md transition"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gold/15 text-gold shrink-0 group-hover:scale-110 transition">
                <MapPin className="w-5 h-5" />
              </span>
              <span className="text-sm font-medium text-deep">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
