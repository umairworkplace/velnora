import type { UserRole } from "@/lib/domain/users";

export const protectedAreas = {
  customer: ["shop"],
  seller: ["shop", "seller"],
  admin: ["shop", "seller", "admin"],
} as const satisfies Record<UserRole, readonly string[]>;

export function roleCanEnter(role: UserRole, area: keyof typeof protectedAreas) {
  return protectedAreas[role].includes(area);
}
