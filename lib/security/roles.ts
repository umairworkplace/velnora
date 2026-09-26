import type { UserRole } from "@/lib/domain/users";

type ProtectedArea = "shop" | "seller" | "admin";

export const protectedAreas: Record<UserRole, readonly ProtectedArea[]> = {
  customer: ["shop"],
  seller: ["shop", "seller"],
  admin: ["shop", "seller", "admin"],
};

export function roleCanEnter(role: UserRole, area: ProtectedArea) {
  return protectedAreas[role].includes(area);
}
