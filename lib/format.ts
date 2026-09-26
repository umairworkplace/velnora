export function money(value: number | string) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number(value));
}

export function slugify(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
