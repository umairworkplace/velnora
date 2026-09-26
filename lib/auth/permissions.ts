import type { UserRole } from "./types";

const permissions = {
  CUSTOMER: ["catalog:read", "cart:write", "orders:read", "orders:create"],
  SELLER: ["catalog:read", "products:write", "inventory:write", "orders:read", "orders:fulfill"],
  ADMIN: ["catalog:read", "products:write", "inventory:write", "orders:read", "orders:fulfill", "users:manage", "analytics:read"],
} as const;

export type Permission = (typeof permissions)[UserRole][number];

export function can(role: UserRole, permission: Permission) {
  return permissions[role].includes(permission as never);
}
