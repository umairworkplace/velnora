import type { UserRole } from "@/lib/domain/users";

type ProtectedArea = "shop" | "seller" | "admin";

export function roleCanEnter(role: UserRole, area: ProtectedArea): boolean {
  if (area === "shop") return true;
  if (area === "seller") return role === "seller" || role === "admin";
  return role === "admin";
}

export function assertRoleCanEnter(role: UserRole, area: ProtectedArea): void {
  if (!roleCanEnter(role, area)) throw new Error("FORBIDDEN");
}
