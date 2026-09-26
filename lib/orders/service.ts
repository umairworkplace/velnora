import { db } from "@/lib/db";
import { adjustInventory } from "@/lib/inventory/service";

export async function createOrder(userId: string, items: Array<{ productId: string; quantity: number }>) {
  if (!items.length) throw new Error("EMPTY_ORDER");
  return db.$transaction(async (tx) => {
    const products = await Promise.all(items.map((item) => tx.product.findUnique({ where: { id: item.productId } })));
    if (products.some((product) => !product)) throw new Error("PRODUCT_NOT_FOUND");
    let total = 0;
    for (const [index, product] of products.entries()) {
      const item = items[index];
      if (!product || product.stock < item.quantity) throw new Error("INSUFFICIENT_STOCK");
      total += Number(product.price) * item.quantity;
    }
    const order = await tx.order.create({ data: { userId, total, items: { create: items.map((item, index) => ({ productId: item.productId, quantity: item.quantity, unitPrice: products[index]!.price })) } }, include: { items: true } });
    for (const item of items) await adjustInventory(item.productId, -item.quantity);
    return order;
  });
}
