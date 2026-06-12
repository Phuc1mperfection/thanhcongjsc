import { createFileRoute } from "@tanstack/react-router";
import { ProductDetail } from "@/components/products/ProductDetail";
import productsData from "@/data/products.json";

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

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function findProduct(categoryId: string, subcategorySlug: string) {
  const categories = (productsData.categories as unknown as Category[]) || [];
  const category = categories.find((c) => c.id === categoryId);
  if (!category) return null;

  const subcategory = category.subcategories.find(
    (s) => slugify(s.name) === subcategorySlug
  );
  if (!subcategory) return null;

  return { category, subcategory };
}

export const Route = createFileRoute(
  "/products/$categoryId/$subcategorySlug"
)({
  head: ({ params }) => {
    const result = findProduct(params.categoryId, params.subcategorySlug);
    if (!result) {
      return {
        meta: [{ title: "Sản phẩm không tìm thấy | Thanh Cong JSC" }],
      };
    }

    const { category, subcategory } = result;
    const productName = subcategory.name.split(" (")[0];

    return {
      meta: [
        {
          title: `${productName} | ${category.nameVn} | Thanh Cong JSC`,
        },
        {
          name: "description",
          content: subcategory.description,
        },
        {
          property: "og:title",
          content: `${productName} | ${category.nameVn} | Thanh Cong JSC`,
        },
        {
          property: "og:description",
          content: subcategory.description,
        },
        { property: "og:type", content: "website" },
      ],
      links: [
        {
          rel: "canonical",
          href: `/products/${params.categoryId}/${params.subcategorySlug}`,
        },
      ],
    };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { categoryId, subcategorySlug } = Route.useParams();
  const result = findProduct(categoryId, subcategorySlug);

  if (!result) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-deep mb-4">
            Không tìm thấy sản phẩm
          </h1>
          <p className="text-ink-soft mb-6">
            Sản phẩm bạn tìm không tồn tại hoặc đã bị di chuyển.
          </p>
          <a
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-deep text-deep-foreground font-semibold hover:bg-gold hover:text-gold-foreground transition"
          >
            Quay lại danh sách sản phẩm
          </a>
        </div>
      </div>
    );
  }

  return (
    <ProductDetail
      category={result.category}
      subcategory={result.subcategory}
    />
  );
}