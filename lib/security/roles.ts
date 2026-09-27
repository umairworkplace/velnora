import type { UserRole } from "@/lib/domain/users";

type ProtectedArea = "shop" | "seller" | "admin";

export function roleCanEnter(role: UserRole, area: ProtectedArea | string): boolean {
  if (area === "shop") return true;
  if (area === "seller") return role === "seller" || role === "admin";
  if (area === "admin") return role === "admin";
  return false;
}

export function assertRoleCanEnter(role: UserRole, area: ProtectedArea | string): void {
  if (!roleCanEnter(role, area)) throw new Error("FORBIDDEN");
}
