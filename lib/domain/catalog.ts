export type ProductStatus = "draft" | "active" | "archived";

export interface ProductSummary {
  id: string;
  name: string;
  slug: string;
  price: number;
  currency: string;
  stock: number;
  status: ProductStatus;
  imageUrl?: string;
}

export function formatMoney(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
}
