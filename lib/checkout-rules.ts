import type { CartItem } from "./types";

export function checkoutTotal(items: CartItem[], shipping = 0, tax = 0): number {
  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  return Math.round((subtotal + shipping + tax) * 100) / 100;
}

export function assertCheckoutReady(items: CartItem[]): void {
  if (items.length === 0) throw new Error("Cart is empty");
  for (const item of items) {
    if (!Number.isInteger(item.quantity) || item.quantity <= 0) throw new Error("Invalid cart quantity");
    if (!Number.isFinite(item.unitPrice) || item.unitPrice < 0) throw new Error("Invalid cart price");
  }
}
