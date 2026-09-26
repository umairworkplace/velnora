import { featuredProducts } from "./catalog";

export function recommendProducts(limit = 3) {
  return featuredProducts.slice(0, Math.max(0, limit));
}
