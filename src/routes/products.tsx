import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Sản phẩm & Giải pháp | Thanh Cong JSC" },
      {
        name: "description",
        content:
          "Danh mục sản phẩm và giải pháp kỹ thuật của Thanh Cong JSC: khe co giãn, gối cầu, vật liệu địa kỹ thuật, tường chống ồn và bảo trì hạ tầng giao thông.",
      },
      { property: "og:title", content: "Sản phẩm & Giải pháp | Thanh Cong JSC" },
      {
        property: "og:description",
        content:
          "Hệ sinh thái sản phẩm chuyên dụng cho cầu đường, hạ tầng giao thông và công trình dân dụng.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
