import type { Role } from "./types";

export interface SessionUser { id: string; email: string; name?: string; role: Role; }

export function hasRole(user: SessionUser | null, roles: Role[]) {
  return Boolean(user && roles.includes(user.role));
}

export function requireRole(user: SessionUser | null, roles: Role[]) {
  if (!hasRole(user, roles)) throw new Error("Unauthorized");
  return user;
}
