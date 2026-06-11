import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CatalogueViewer } from "@/components/catalogue/CatalogueViewer";

export const Route = createFileRoute("/catalogue")({
  head: () => ({
    meta: [
      { title: "Catalogue sản phẩm | Thanh Cong JSC" },
      {
        name: "description",
        content:
          "Catalogue sản phẩm và giải pháp kỹ thuật của Thanh Cong JSC: gối cầu, khe co giãn, tường chống ồn, giải pháp địa kỹ thuật.",
      },
      { property: "og:title", content: "Catalogue sản phẩm | Thanh Cong JSC" },
      {
        property: "og:description",
        content:
          "Xem catalogue sản phẩm dạng lật sách - Sản phẩm & Giải pháp kỹ thuật hạ tầng giao thông.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/catalogue" }],
  }),
  component: CataloguePage,
});

function CataloguePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <CatalogueViewer />
      </main>
      <Footer />
    </div>
  );
}
