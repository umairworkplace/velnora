export function hasStock(stock: number, requested: number) {
  return Number.isInteger(stock) && Number.isInteger(requested) && stock >= 0 && requested > 0 && stock >= requested;
}

export function nextStock(stock: number, delta: number) {
  const result = stock + delta;
  if (!Number.isInteger(result) || result < 0) throw new Error("Inventory cannot become negative");
  return result;
}
