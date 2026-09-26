export type Role = "CUSTOMER" | "SELLER" | "ADMIN";

export type SessionUser = {
  id: string;
  email: string;
  role: Role;
};

export function hasRole(user: SessionUser | null, roles: Role[]) {
  return !!user && roles.includes(user.role);
}

export function requireRole(user: SessionUser | null, roles: Role[]) {
  if (!hasRole(user, roles)) throw new Error("Forbidden");
  return user;
}
