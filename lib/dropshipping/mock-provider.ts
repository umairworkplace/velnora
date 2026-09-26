import type { DropshippingProvider, FulfillmentRequest, SupplierProduct } from "./types";

const products: SupplierProduct[] = [
  { externalId: "demo-001", title: "Minimal Desk Lamp", price: 29.99, currency: "USD", available: true, supplier: "Velnora Demo Supplier" },
  { externalId: "demo-002", title: "Everyday Backpack", price: 44.5, currency: "USD", available: true, supplier: "Velnora Demo Supplier" },
];

export const mockDropshippingProvider: DropshippingProvider = {
  async search(query) {
    const normalized = query.trim().toLowerCase();
    return normalized ? products.filter((product) => product.title.toLowerCase().includes(normalized)) : products;
  },
  async fulfill(request: FulfillmentRequest) {
    return { externalOrderId: `demo-${request.orderId}`, status: "submitted" };
  },
};
