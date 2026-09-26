import type { CartItem } from "./types";

export function cartTotal(items: CartItem[]) {
  return items.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
}

export function addToCart(items: CartItem[], productId: string, unitPrice: number, quantity = 1) {
  const existing = items.find((item) => item.productId === productId);
  if (existing) return items.map((item) => item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item);
  return [...items, { productId, unitPrice, quantity }];
}
