import { type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import { Link } from "@tanstack/react-router";

interface SubCategory {
  name: string;
  icon?: string;
  description: string;
  features: string[];
  concept: string;
  structure?: string[];
  technicalHighlights?: string[];
  classification?: string[];
  variants?: Array<{
    name: string;
    description: string;
    features: string[];
  }>;
  applications: string[];
}

interface Category {
  id: string;
  nameEn: string;
  nameVn: string;
  icon: string;
  accent: string;
  description: string;
  catalogue: string;
  subcategories: SubCategory[];
  applications: string[];
}

function Ico({ name, className }: { name: string; className?: string }) {
  const Comp = (Icons as unknown as Record<string, LucideIcon>)[name] ?? Icons.Circle;
  return <Comp className={className} aria-hidden />;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function extractEnglishName(name: string): string | null {
  const match = name.match(/\(([^)]+)\)/);
  return match ? match[1] : null;
}

const gradientMap: Record<string, string> = {
  "bridge-bearings": "from-amber-600 to-amber-400",
  "expansion-joints": "from-blue-600 to-blue-400",
  "noise-barriers": "from-orange-600 to-orange-400",
  geotechnical: "from-slate-700 to-slate-500",
};

interface ProductDetailProps {
  category: Category;
  subcategory: SubCategory;
}

export function ProductDetail({ category, subcategory }: ProductDetailProps) {
  const gradientClass = gradientMap[category.id] || "from-deep to-deep/70";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 md:pt-24">
        <img
          src={`/images/${category.id}.jpg`}
          alt={category.nameVn}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${category.accent} mix-blend-multiply`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />

        <div className="relative z-10 container-tc py-12 md:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-8">
            <Link to="/" className="hover:text-white transition-colors">
              Trang chủ
            </Link>
            <span className="text-white/40">/</span>
            <Link to="/products" className="hover:text-white transition-colors">
              Sản phẩm
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">{category.nameVn}</span>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">
              {extractEnglishName(subcategory.name) || subcategory.name.split(" (")[0]}
            </span>
          </nav>

          <div className="flex items-start gap-4 md:gap-6">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/95 backdrop-blur text-deep shadow-lg shrink-0">
              <Ico name={subcategory.icon || category.icon} className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                {subcategory.name.split(" (")[0]}
              </h1>
              {subcategory.name.includes("(") && (
                <p className="mt-2 text-lg md:text-xl text-white/70">
                  {subcategory.name.match(/\(([^)]+)\)/)?.[1]}
                </p>
              )}
              <p className="mt-4 text-base md:text-lg text-white/80 max-w-3xl leading-relaxed">
                {subcategory.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container-tc py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Concept */}
            {subcategory.concept && (
              <section className="animate-fade-in">
                <h2 className="text-xl md:text-2xl font-display font-bold text-deep mb-4 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gold/10 text-gold">
                    <Ico name="Lightbulb" className="w-4 h-4" />
                  </span>
                  Khái niệm
                </h2>
                <p className="text-ink leading-relaxed">{subcategory.concept}</p>
              </section>
            )}

            {/* Features */}
            {subcategory.features?.length > 0 && (
              <section className="animate-fade-in">
                <h2 className="text-xl md:text-2xl font-display font-bold text-deep mb-4 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gold/10 text-gold">
                    <Ico name="CheckCircle" className="w-4 h-4" />
                  </span>
                  Đặc điểm nổi bật
                </h2>
                <ul className="space-y-3">
                  {subcategory.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 shrink-0">
                        <Ico name="Check" className="w-3 h-3" />
                      </span>
                      <span className="text-ink leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Structure */}
            {(subcategory.structure ?? []).length > 0 && (
              <section className="animate-fade-in">
                <h2 className="text-xl md:text-2xl font-display font-bold text-deep mb-4 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gold/10 text-gold">
                    <Ico name="Layers" className="w-4 h-4" />
                  </span>
                  Cấu tạo
                </h2>
                <div className="space-y-3">
                  {subcategory.structure?.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-deep/5"
                    >
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-deep text-deep-foreground text-sm font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-ink leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Classification */}
            {(subcategory.classification ?? []).length > 0 && (
              <section className="animate-fade-in">
                <h2 className="text-xl md:text-2xl font-display font-bold text-deep mb-4 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gold/10 text-gold">
                    <Ico name="Tag" className="w-4 h-4" />
                  </span>
                  Phân loại
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {subcategory.classification?.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-gradient-to-br from-gold/5 to-gold/10 border border-gold/20"
                    >
                      <p className="text-ink leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Variants */}
            {(subcategory.variants ?? []).length > 0 && (
              <section className="animate-fade-in">
                <h2 className="text-xl md:text-2xl font-display font-bold text-deep mb-4 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gold/10 text-gold">
                    <Ico name="GitBranch" className="w-4 h-4" />
                  </span>
                  Biến thể
                </h2>
                <div className="space-y-4">
                  {subcategory.variants?.map((variant, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl border border-deep/10 bg-card shadow-[var(--shadow-card)]"
                    >
                      <h3 className="font-display font-bold text-deep mb-2">{variant.name}</h3>
                      <p className="text-ink-soft text-sm leading-relaxed mb-3">
                        {variant.description}
                      </p>
                      <ul className="space-y-1.5">
                        {variant.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-ink">
                            <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Technical Highlights */}
            {(subcategory.technicalHighlights ?? []).length > 0 && (
              <section className="animate-fade-in">
                <h2 className="text-xl md:text-2xl font-display font-bold text-deep mb-4 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gold/10 text-gold">
                    <Ico name="Zap" className="w-4 h-4" />
                  </span>
                  Thông số kỹ thuật nổi bật
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {subcategory.technicalHighlights?.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-deep/5"
                    >
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-deep/10 text-deep shrink-0 mt-0.5">
                        <Ico name="Star" className="w-3 h-3" />
                      </span>
                      <span className="text-sm text-ink leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6">
            {/* Applications */}
            {subcategory.applications?.length > 0 && (
              <div className="p-6 rounded-2xl border border-deep/10 bg-card shadow-[var(--shadow-card)]">
                <h3 className="font-display font-bold text-deep mb-4 flex items-center gap-2">
                  <Ico name="MapPin" className="w-4 h-4 text-gold" />
                  Ứng dụng
                </h3>
                <ul className="space-y-2">
                  {subcategory.applications.map((app, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-ink">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Catalogue Download */}
            {category.catalogue && (
              <div className="p-6 rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/5 to-gold/10">
                <h3 className="font-display font-bold text-deep mb-2 flex items-center gap-2">
                  <Ico name="FileText" className="w-4 h-4 text-gold" />
                  Tài liệu kỹ thuật
                </h3>
                <p className="text-sm text-ink-soft mb-4">
                  Tải xuống catalogue đầy đủ về {category.nameVn}
                </p>
                <a
                  href={category.catalogue}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-gold text-gold-foreground font-semibold text-sm hover:brightness-95 transition"
                >
                  <Ico name="Download" className="w-4 h-4" />
                  Tải catalogue (PDF)
                </a>
              </div>
            )}

            {/* Contact CTA */}
            <div className="p-6 rounded-2xl border border-deep/10 bg-card shadow-[var(--shadow-card)]">
              <h3 className="font-display font-bold text-deep mb-2">Cần tư vấn?</h3>
              <p className="text-sm text-ink-soft mb-4">
                Liên hệ ngay để được tư vấn chi tiết về sản phẩm này.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-deep text-deep-foreground font-semibold text-sm hover:bg-gold hover:text-gold-foreground transition"
              >
                Liên hệ tư vấn
                <Ico name="ArrowRight" className="w-4 h-4" />
              </a>
            </div>

            {/* Other Products in Category */}
            <div className="p-6 rounded-2xl border border-deep/10 bg-card shadow-[var(--shadow-card)]">
              <h3 className="font-display font-bold text-deep mb-4">
                Sản phẩm khác trong {category.nameVn}
              </h3>
              <ul className="space-y-2">
                {category.subcategories.map((sub) => {
                  const slug = slugify(sub.name);
                  const isActive = sub.name === subcategory.name;
                  return (
                    <li key={sub.name}>
                      <a
                        href={`/products/${category.id}/${slug}`}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                          isActive
                            ? "bg-gold/10 text-deep font-medium border border-gold/20"
                            : "text-ink hover:bg-secondary hover:text-deep"
                        }`}
                      >
                        <Ico
                          name={sub.icon || "Circle"}
                          className="w-3.5 h-3.5 text-gold shrink-0"
                        />
                        {sub.name.split(" (")[0]}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
