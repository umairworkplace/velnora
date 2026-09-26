export const orderStatuses = ["PENDING", "PAID", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"] as const;
export type OrderStatus = (typeof orderStatuses)[number];

const transitions: Record<OrderStatus, readonly OrderStatus[]> = {
  PENDING: ["PAID", "CANCELLED"],
  PAID: ["PROCESSING", "CANCELLED"],
  PROCESSING: ["SHIPPED", "CANCELLED"],
  SHIPPED: ["DELIVERED"],
  DELIVERED: [],
  CANCELLED: [],
};

export function canTransition(from: OrderStatus, to: OrderStatus) {
  return transitions[from].includes(to);
}
