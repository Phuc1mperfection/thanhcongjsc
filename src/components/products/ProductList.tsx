import { ProductCard } from "./ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import productsData from "@/data/products.json";

interface Subcategory {
  name: string;
  description: string;
  features: string[];
  concept: string;
  structure: string[];
  technicalHighlights: string[];
  classification?: string[];
  variants?: Array<{ name: string; description: string; features: string[] }>;
  applications: string[];
}

interface Product {
  id: string;
  nameEn: string;
  nameVn: string;
  image: string;
  icon: string;
  accent: string;
  shortDescription: string;
  description: string;
  catalogue: string;
  subcategories: Subcategory[];
  applications: string[];
}

export function ProductList() {
  const products = (productsData.categories as unknown as Product[]) || [];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50/50 to-white py-16 md:py-24">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-gradient-to-b from-blue-100/20 to-transparent blur-3xl" />
        {/* Bottom glow */}
        <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-amber-100/10 to-transparent blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="mb-16 space-y-4 text-center">
            <div className="inline-flex items-center justify-center rounded-full border border-neutral-200/50 bg-white/50 px-4 py-2 backdrop-blur-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                📦 Hệ sinh thái sản phẩm
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
              Sản phẩm & Giải pháp
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              Bộ sưu tập toàn diện các sản phẩm và giải pháp kỹ thuật chuyên dụng cho cầu đường, hạ tầng giao thông và công trình dân dụng
            </p>
          </div>
        </Reveal>

        {/* Products Grid */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {products.map((category, index) => (
            <Reveal key={category.id} delay={index * 100}>
              <ProductCard
                category={category}
                index={index}
              />
            </Reveal>
          ))}
        </div>

        {/* CTA Section */}
        <Reveal delay={200}>
          <div className="mt-16 rounded-2xl border border-neutral-200/50 bg-gradient-to-r from-white/50 to-white/30 backdrop-blur-sm p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Cần tư vấn giải pháp phù hợp?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
              Đội ngũ kỹ thuật chuyên môn của chúng tôi luôn sẵn sàng hỗ trợ và tư vấn về các sản phẩm và giải pháp phù hợp nhất cho dự án của bạn.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-neutral-900 text-white font-semibold transition-all duration-300 hover:bg-neutral-800 hover:shadow-lg"
            >
              Liên hệ ngay
              <span className="ml-2">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
