import type { ProductSummary } from "@/lib/domain/catalog";

export function recommendProducts(products: ProductSummary[], excludeId?: string) {
  return products.filter((product) => product.id !== excludeId && product.status === "active" && product.stock > 0).slice(0, 4);
}
