export type OrderItemInput = {
  productId: string;
  quantity: number;
  unitPrice: number;
};

export type CreateOrderInput = {
  userId: string;
  items: OrderItemInput[];
};

export type OrderRecord = CreateOrderInput & {
  id: string;
  status: "PENDING";
  total: number;
  createdAt: string;
};

export function createOrder(input: CreateOrderInput): OrderRecord {
  const items = input.items.map((item) => ({
    productId: String(item.productId),
    quantity: Math.max(1, Math.floor(Number(item.quantity))),
    unitPrice: Number(item.unitPrice),
  }));

  const total = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);

  return {
    id: `order_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    userId: input.userId,
    items,
    status: "PENDING",
    total: Number(total.toFixed(2)),
    createdAt: new Date().toISOString(),
  };
}
