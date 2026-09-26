export type Role = "CUSTOMER" | "SELLER" | "ADMIN";
export type ProductStatus = "DRAFT" | "ACTIVE" | "ARCHIVED";
export type OrderStatus = "PENDING" | "PAID" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED";

export type SessionUser = { id: string; email: string; name?: string; role: Role };
export type ProductSummary = { id: string; name: string; slug: string; price: number; stock: number; status: ProductStatus };
export type OrderSummary = { id: string; total: number; status: OrderStatus; createdAt: string };
