import { db } from "@/lib/db";

export async function createOrder(
  userId: string,
  items: Array<{ productId: string; quantity: number }>,
) {
  if (!items.length) throw new Error("EMPTY_ORDER");

  return db.$transaction(async (tx) => {
    const products = await Promise.all(
      items.map((item) => tx.product.findUnique({ where: { id: item.productId } })),
    );

    if (products.some((product) => !product)) throw new Error("PRODUCT_NOT_FOUND");

    let total = 0;
    for (const [index, product] of products.entries()) {
      const item = items[index];
      if (!product || !Number.isInteger(item.quantity) || item.quantity <= 0) {
        throw new Error("INVALID_QUANTITY");
      }
      if (product.stock < item.quantity) throw new Error("INSUFFICIENT_STOCK");
      total += Number(product.price) * item.quantity;
    }

    const order = await tx.order.create({
      data: {
        userId,
        total,
        items: {
          create: items.map((item, index) => ({
            productId: item.productId,
            quantity: item.quantity,
            unitPrice: products[index]!.price,
          })),
        },
      },
      include: { items: true },
    });

    for (const item of items) {
      const result = await tx.product.updateMany({
        where: { id: item.productId, stock: { gte: item.quantity } },
        data: { stock: { decrement: item.quantity } },
      });
      if (result.count !== 1) throw new Error("INVENTORY_UPDATE_FAILED");
    }

    return order;
  });
}
