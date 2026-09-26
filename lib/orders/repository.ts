import { db } from "@/lib/db";

export function listOrders(userId: string) {
  return db.order.findMany({ where: { userId }, include: { items: true }, orderBy: { createdAt: "desc" } });
}

export function getOrder(id: string) {
  return db.order.findUnique({ where: { id }, include: { items: true } });
}
