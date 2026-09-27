export type CartLine = {
  productId: string;
  unitPrice: number;
  quantity: number;
};

export function cartTotal(lines: CartLine[]) {
  return lines.reduce((total, line) => total + line.unitPrice * line.quantity, 0);
}

export function addCartLine(lines: CartLine[], productId: string, unitPrice: number, quantity = 1) {
  if (!Number.isInteger(quantity) || quantity <= 0) throw new Error("INVALID_QUANTITY");
  const existing = lines.find((line) => line.productId === productId);
  if (existing) {
    return lines.map((line) =>
      line.productId === productId ? { ...line, quantity: line.quantity + quantity } : line,
    );
  }
  return [...lines, { productId, unitPrice, quantity }];
}

export function removeCartLine(lines: CartLine[], productId: string) {
  return lines.filter((line) => line.productId !== productId);
}
