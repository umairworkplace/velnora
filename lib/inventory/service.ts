import { db } from "@/lib/db";

export async function adjustInventory(productId: string, delta: number) {
  const product = await db.product.findUnique({ where: { id: productId }, select: { stock: true } });
  if (!product) throw new Error("PRODUCT_NOT_FOUND");
  const nextStock = product.stock + delta;
  if (nextStock < 0) throw new Error("INSUFFICIENT_STOCK");
  return db.product.update({ where: { id: productId }, data: { stock: nextStock } });
}
