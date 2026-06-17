import { Link } from "@tanstack/react-router";
import { Lightbulb, Download, ArrowRight } from "lucide-react";
import type { Category, SubCategory } from "@/types/products";
import { getSubcategorySlug } from "@/lib/product-utils";
import { ProductHero } from "./ProductHero";
import { ProductFeatures } from "./ProductFeatures";
import { ProductStructure } from "./ProductStructure";
import { ProductHighlights, ProductClassification } from "./ProductHighlights";
import { ProductVariants } from "./ProductVariants";
import { ProductApplications } from "./ProductApplications";
import { ProductSidebar } from "./ProductSidebar";
import { ProductImageGallery, ProductPlaceholder } from "./ProductImageGallery";

export function ProductDetail({
  category,
  subcategory,
}: {
  category: Category;
  subcategory: SubCategory;
}) {
  const slug = getSubcategorySlug(subcategory);
  const related = category.subcategories.filter((s) => getSubcategorySlug(s) !== slug).slice(0, 4);

  let sectionIndex = 1;
  const featuresSectionNumber = subcategory.features?.length ? ++sectionIndex : 0;
  const structureSectionNumber = subcategory.structure?.length ? ++sectionIndex : 0;
  const highlightsSectionNumber = subcategory.technicalHighlights?.length ? ++sectionIndex : 0;
  const classificationSectionNumber = subcategory.classification?.length ? ++sectionIndex : 0;
  const variantsSectionNumber = subcategory.variants?.length ? ++sectionIndex : 0;
  const applicationsSectionNumber = subcategory.applications?.length ? ++sectionIndex : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/30 to-white">
      <ProductHero category={category} subcategory={subcategory} />

      <div className="container-tc">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          <ProductSidebar category={category} activeSlug={slug} />

          <div className="min-w-0">
            <ProductImageGallery category={category} subcategory={subcategory} />

            {/* Concept */}
            <section className="py-2 md:py-6">
              <div className="rounded-3xl border border-deep/10 bg-card p-6 md:p-10 shadow-[var(--shadow-card)] relative overflow-hidden">
                <div className={`absolute -top-16 -right-16 w-64 h-64 rounded-full bg-gradient-to-br ${category.accent} opacity-20 blur-3xl`} />
                <div className="relative flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gold/15 text-gold shrink-0">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">01</div>
                    <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold text-deep">
                      Khái niệm sản phẩm
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-ink leading-relaxed">
                      {subcategory.concept}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {featuresSectionNumber > 0 && (
              <ProductFeatures features={subcategory.features} sectionNumber={featuresSectionNumber} />
            )}
            {structureSectionNumber > 0 && (
              <ProductStructure structure={subcategory.structure ?? []} sectionNumber={structureSectionNumber} />
            )}
            {highlightsSectionNumber > 0 && (
              <ProductHighlights highlights={subcategory.technicalHighlights ?? []} sectionNumber={highlightsSectionNumber} />
            )}
            {classificationSectionNumber > 0 && (
              <ProductClassification items={subcategory.classification ?? []} sectionNumber={classificationSectionNumber} />
            )}
            {variantsSectionNumber > 0 && (
              <ProductVariants variants={subcategory.variants} sectionNumber={variantsSectionNumber} />
            )}
            {applicationsSectionNumber > 0 && (
              <ProductApplications applications={subcategory.applications} sectionNumber={applicationsSectionNumber} />
            )}

            {/* Catalogue download */}
            <section className="py-10">
              <div className="rounded-2xl border border-gold/30 bg-gradient-to-r from-gold/10 to-gold/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Tài liệu kỹ thuật</div>
                  <h3 className="mt-2 text-xl md:text-2xl font-display font-bold text-deep">
                    Catalogue {category.nameVn}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">Thông số kỹ thuật chi tiết, bản vẽ và hướng dẫn lắp đặt.</p>
                </div>
                <a
                  href={category.catalogue}
                  download
                  className="inline-flex items-center gap-2 rounded-md bg-deep text-white px-6 py-3.5 text-sm font-semibold hover:bg-gold hover:text-gold-foreground transition shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Tải catalogue PDF
                </a>
              </div>
            </section>

            {/* Related */}
            {related.length > 0 && (
              <section className="py-10">
                <header className="mb-6">
                  <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Sản phẩm liên quan</div>
                  <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold text-deep">
                    Khác trong {category.nameVn}
                  </h2>
                </header>
                <div className="grid gap-4 sm:grid-cols-2">
                  {related.map((r) => (
                    <Link
                      key={r.name}
                      to="/products/$categoryId/$subcategorySlug"
                      params={{ categoryId: category.id, subcategorySlug: getSubcategorySlug(r) }}
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-deep/10 bg-card p-5 shadow-sm hover:shadow-md hover:border-gold/40 hover:-translate-y-0.5 transition"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-deep/10">
                          <ProductPlaceholder
                            category={category}
                            subcategory={r}
                            label=""
                            iconSize="w-7 h-7"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="font-display font-semibold text-deep truncate">
                            {r.name}
                          </div>
                          <div className="text-xs text-ink-soft truncate">{r.description}</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-deep shrink-0 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Contact CTA */}
            <section className="py-10">
              <div className="relative overflow-hidden rounded-3xl border border-deep/10 bg-deep p-8 md:p-12">
                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/20 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
                <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="max-w-xl">
                    <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Tư vấn chuyên sâu</div>
                    <h2 className="mt-3 text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                      Cần tư vấn về {subcategory.name}?
                    </h2>
                    <p className="mt-2 text-sm text-white/70">
                      Đội ngũ kỹ sư Thanh Cong JSC sẵn sàng hỗ trợ thiết kế, lựa chọn và lắp đặt phù hợp với dự án.
                    </p>
                  </div>
                  <Link
                    to="/"
                    hash="contact"
                    className="shrink-0 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground hover:brightness-95 transition shadow-lg"
                  >
                    Liên hệ ngay
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}