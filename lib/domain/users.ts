export type UserRole = "customer" | "seller" | "admin";

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export function canAccess(role: UserRole, area: "shop" | "seller" | "admin") {
  if (area === "shop") return true;
  if (area === "seller") return role === "seller" || role === "admin";
  return role === "admin";
}
