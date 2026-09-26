import { db } from "../db";

export function listInventoryForSeller(sellerId: string) {
  return db.product.findMany({ where: { sellerId }, select: { id: true, name: true, stock: true, status: true, updatedAt: true }, orderBy: { stock: "asc" } });
}
