export const ROLES = ["CUSTOMER", "SELLER", "ADMIN"] as const;
export type Role = (typeof ROLES)[number];

export function canManageCatalog(role: Role) {
  return role === "SELLER" || role === "ADMIN";
}

export function canManagePlatform(role: Role) {
  return role === "ADMIN";
}
