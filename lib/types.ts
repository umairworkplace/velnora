export type Role = "CUSTOMER" | "SELLER" | "ADMIN";
export type ProductStatus = "DRAFT" | "ACTIVE" | "ARCHIVED";
export type OrderStatus = "PENDING" | "PAID" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED";

export interface ProductSummary { id: string; name: string; slug: string; price: number; stock: number; status: ProductStatus; }
export interface CartItem { productId: string; quantity: number; unitPrice: number; }
export type CartLine = CartItem;
