import type { Role } from "./velnora-types";

const permissions: Record<Role, string[]> = {
  CUSTOMER: ["catalog.read", "cart.write", "order.read.own", "order.write.own"],
  SELLER: ["catalog.read", "product.write.own", "inventory.write.own", "order.read.seller"],
  ADMIN: ["*"]
};

export function can(role: Role, permission: string): boolean {
  return permissions[role].includes("*") || permissions[role].includes(permission);
}
