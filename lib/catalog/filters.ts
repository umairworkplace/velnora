export type CatalogFilters = {
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  status?: "DRAFT" | "ACTIVE" | "ARCHIVED";
};

export function matchesCatalogFilters(product: { name: string; description?: string | null; price: number; status: string }, filters: CatalogFilters) {
  const text = `${product.name} ${product.description ?? ""}`.toLowerCase();
  if (filters.search && !text.includes(filters.search.toLowerCase())) return false;
  if (filters.minPrice !== undefined && product.price < filters.minPrice) return false;
  if (filters.maxPrice !== undefined && product.price > filters.maxPrice) return false;
  if (filters.status && product.status !== filters.status) return false;
  return true;
}
