import { db } from "@/lib/db";

export async function listProducts(limit = 24) {
  return db.product.findMany({ orderBy: { createdAt: "desc" }, take: limit });
}

export async function getProductById(id: string) {
  return db.product.findUnique({ where: { id } });
}
