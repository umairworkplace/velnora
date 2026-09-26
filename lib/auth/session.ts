import type { UserRole } from "@/lib/domain/users";

export type SessionUser = { id: string; email: string; role: UserRole };

export function hasRole(user: SessionUser | null, roles: UserRole[]) {
  return !!user && roles.includes(user.role);
}

export function requireRole(user: SessionUser | null, roles: UserRole[]) {
  if (!hasRole(user, roles)) throw new Error("FORBIDDEN");
  return user;
}
