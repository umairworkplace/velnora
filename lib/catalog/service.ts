import { db } from "@/lib/db";

export async function createProduct(input: { sellerId: string; name: string; slug: string; price: number; stock?: number; description?: string }) {
  return db.product.create({ data: { ...input, price: input.price, stock: input.stock ?? 0 } });
}

export async function updateProduct(id: string, input: { name?: string; price?: number; stock?: number; description?: string; status?: "DRAFT" | "ACTIVE" | "ARCHIVED" }) {
  return db.product.update({ where: { id }, data: input });
}
