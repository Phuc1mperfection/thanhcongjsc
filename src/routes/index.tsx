import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import {
  About,
  Products,
  Applications,
  Capability,
  Catalogue,
  Contact,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thanh Cong JSC | Giải pháp kỹ thuật hạ tầng giao thông" },
      {
        name: "description",
        content:
          "Thanh Cong JSC cung cấp sản phẩm, vật tư và giải pháp kỹ thuật cho cầu đường, khe co giãn, gối cầu, địa kỹ thuật, tường chống ồn và bảo trì hạ tầng giao thông.",
      },
      { property: "og:title", content: "Thanh Cong JSC | Giải pháp kỹ thuật hạ tầng giao thông" },
      {
        property: "og:description",
        content:
          "Sản phẩm, vật tư và giải pháp kỹ thuật cho cầu đường, hạ tầng giao thông, địa kỹ thuật và công trình đô thị.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Thanh Cong JSC",
          url: "https://thanhcongjsc.com",
          email: "info@thanhcongjsc.com",
          description:
            "Cung cấp sản phẩm, vật tư và giải pháp kỹ thuật cho cầu đường, hạ tầng giao thông, địa kỹ thuật và công trình đô thị.",
          areaServed: "VN",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Applications />
        <Capability />
        <Catalogue />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
