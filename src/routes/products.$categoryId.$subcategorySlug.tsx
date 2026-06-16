import { createFileRoute, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductDetail } from "@/components/products/ProductDetail";
import { findProduct } from "@/lib/products";

export const Route = createFileRoute("/products/$categoryId/$subcategorySlug")({
  loader: ({ params }) => {
    const found = findProduct(params.categoryId, params.subcategorySlug);
    if (!found) throw notFound();
    return found;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Sản phẩm | Thanh Cong JSC" }] };
    }
    const { category, subcategory } = loaderData;
    const title = `${subcategory.name} | ${category.nameVn} | Thanh Cong JSC`;
    const description = subcategory.description;
    const url = `/products/${params.categoryId}/${params.subcategorySlug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container-tc py-32 text-center">
        <h1 className="text-3xl font-display font-bold text-deep">Không tìm thấy sản phẩm</h1>
        <p className="mt-3 text-ink-soft">Sản phẩm bạn tìm không tồn tại hoặc đã được thay đổi.</p>
        <a href="/products" className="mt-6 inline-block rounded-md bg-deep text-white px-6 py-3 text-sm font-semibold">
          Về danh mục sản phẩm
        </a>
      </main>
      <Footer />
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container-tc py-32 text-center">
        <h1 className="text-3xl font-display font-bold text-deep">Đã xảy ra lỗi</h1>
        <p className="mt-3 text-ink-soft">{error.message}</p>
        <button onClick={reset} className="mt-6 rounded-md bg-deep text-white px-6 py-3 text-sm font-semibold">
          Thử lại
        </button>
      </main>
      <Footer />
    </div>
  ),
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { category, subcategory } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductDetail category={category} subcategory={subcategory} />
      </main>
    </div>
  );
}