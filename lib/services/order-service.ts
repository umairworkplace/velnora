import { db } from "@/lib/db";
import type { OrderStatus, OrderSummary } from "@/lib/domain/orders";

export function orderTotal(items: Array<{ quantity: number; unitPrice: number }>) {
  return items.reduce((total, item) => total + item.quantity * item.unitPrice, 0);
}

export function canTransitionOrder(from: OrderStatus, to: OrderStatus) {
  const transitions: Record<OrderStatus, OrderStatus[]> = {
    pending: ["paid", "cancelled"], paid: ["processing", "cancelled"], processing: ["shipped", "cancelled"], shipped: ["delivered"], delivered: [], cancelled: [],
  };
  return transitions[from].includes(to);
}

export function summarizeOrder(order: OrderSummary) {
  return `${order.id} · ${orderStatusText(order.status)} · ${order.itemCount} items`;
}

function orderStatusText(status: OrderStatus) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export async function getUserOrders(userId: string) {
  return db.order.findMany({ where: { userId }, include: { items: { include: { product: true } } }, orderBy: { createdAt: "desc" } });
}

export async function getOrder(orderId: string) {
  return db.order.findUnique({ where: { id: orderId }, include: { items: { include: { product: true } }, user: true } });
}
