export type OrderStatus = "pending" | "paid" | "processing" | "shipped" | "delivered" | "cancelled";

export interface OrderSummary {
  id: string;
  customerName: string;
  status: OrderStatus;
  total: number;
  currency: string;
  itemCount: number;
  createdAt: string;
}

export const orderStatusLabel: Record<OrderStatus, string> = {
  pending: "Pending", paid: "Paid", processing: "Processing", shipped: "Shipped", delivered: "Delivered", cancelled: "Cancelled",
};
