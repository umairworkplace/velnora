import { db } from "../db";

export function listProducts() {
  return db.product.findMany({ orderBy: { createdAt: "desc" } });
}

export function getProductById(id: string) {
  return db.product.findUnique({ where: { id } });
}

export function listSellerProducts(sellerId: string) {
  return db.product.findMany({ where: { sellerId }, orderBy: { updatedAt: "desc" } });
}
