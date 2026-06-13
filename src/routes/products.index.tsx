import { createFileRoute } from "@tanstack/react-router";
import { ProductList } from "@/components/products/ProductList";

export const Route = createFileRoute("/products/")({
  component: ProductsIndex,
});

function ProductsIndex() {
  return <ProductList />;
}