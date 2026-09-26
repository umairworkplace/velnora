import type { InventoryItem } from "@/lib/domain/inventory";

export function availableToSell(item: InventoryItem) {
  return Math.max(0, item.available - item.reserved);
}

export function needsReorder(item: InventoryItem) {
  return availableToSell(item) <= item.reorderPoint;
}
