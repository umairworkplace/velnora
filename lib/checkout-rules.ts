import type { CartLine } from "./cart";

export function checkoutTotal(lines: CartLine[], shipping = 0, tax = 0): number {
  const subtotal = lines.reduce((sum, line) => sum + line.quantity * line.unitPrice, 0);
  return Math.round((subtotal + shipping + tax) * 100) / 100;
}

export function assertCheckoutReady(lines: CartLine[]): void {
  if (lines.length === 0) throw new Error("Cart is empty");
  for (const line of lines) {
    if (!Number.isInteger(line.quantity) || line.quantity <= 0) throw new Error("Invalid cart quantity");
    if (!Number.isFinite(line.unitPrice) || line.unitPrice < 0) throw new Error("Invalid cart price");
  }
}
