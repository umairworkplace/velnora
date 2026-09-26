export type UserRole = "CUSTOMER" | "SELLER" | "ADMIN";

export type SessionUser = {
  id: string;
  email: string;
  name: string | null;
  role: UserRole;
};
