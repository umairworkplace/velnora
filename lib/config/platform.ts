export const platformConfig = {
  name: "Velnora",
  tagline: "The Modern Commerce Platform",
  defaultCurrency: "USD",
  roles: ["customer", "seller", "admin"] as const,
  features: {
    storefront: true,
    sellerWorkspace: true,
    adminConsole: true,
    inventory: true,
    orders: true,
    recommendations: true,
    dropshipping: true,
    analytics: true,
  },
};
