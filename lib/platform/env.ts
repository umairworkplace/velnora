export function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

export const env = {
  get databaseUrl() { return process.env.DATABASE_URL; },
  get nodeEnv() { return process.env.NODE_ENV ?? "development"; },
};
