import type { CartLine } from "./cart";

export function validateCart(lines: CartLine[]) {
  if (!lines.length) throw new Error("EMPTY_CART");
  for (const line of lines) {
    if (!line.productId) throw new Error("INVALID_PRODUCT");
    if (!Number.isInteger(line.quantity) || line.quantity <= 0) throw new Error("INVALID_QUANTITY");
    if (!Number.isFinite(line.unitPrice) || line.unitPrice < 0) throw new Error("INVALID_PRICE");
  }
  return true;
}
