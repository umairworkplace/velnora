import { db } from "@/lib/db";
import type { InventoryItem } from "@/lib/domain/inventory";

export function availableToSell(item: InventoryItem) {
  return Math.max(0, item.available - item.reserved);
}

export function needsReorder(item: InventoryItem) {
  return availableToSell(item) <= item.reorderPoint;
}

export async function getProductStock(productId: string) {
  return db.product.findUnique({ where: { id: productId }, select: { id: true, stock: true } });
}

export async function adjustProductStock(productId: string, delta: number) {
  return db.product.update({ where: { id: productId }, data: { stock: { increment: delta } } });
}
