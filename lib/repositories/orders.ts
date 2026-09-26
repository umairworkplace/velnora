import { db } from "../db";

export function listOrdersForUser(userId: string) {
  return db.order.findMany({ where: { userId }, include: { items: { include: { product: true } } }, orderBy: { createdAt: "desc" } });
}

export function getOrderById(id: string) {
  return db.order.findUnique({ where: { id }, include: { items: { include: { product: true } }, user: true } });
}
