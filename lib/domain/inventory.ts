export interface InventoryItem {
  productId: string;
  productName: string;
  sku: string;
  available: number;
  reserved: number;
  reorderPoint: number;
}

export function inventoryState(item: InventoryItem) {
  if (item.available <= 0) return "out" as const;
  if (item.available <= item.reorderPoint) return "low" as const;
  return "healthy" as const;
}
