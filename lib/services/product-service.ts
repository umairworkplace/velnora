import type { ProductSummary } from "@/lib/domain/catalog";

export function normalizeProduct(input: Partial<ProductSummary> & Pick<ProductSummary, "id" | "name" | "price">): ProductSummary {
  const slug = input.slug ?? input.name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return { id: input.id, name: input.name, slug, price: input.price, currency: input.currency ?? "USD", stock: input.stock ?? 0, status: input.status ?? "draft", imageUrl: input.imageUrl };
}
