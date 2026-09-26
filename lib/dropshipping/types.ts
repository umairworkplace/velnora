export interface SupplierProduct {
  externalId: string;
  title: string;
  price: number;
  currency: string;
  available: boolean;
  supplier: string;
}

export interface FulfillmentRequest {
  orderId: string;
  supplierProductId: string;
  quantity: number;
  shippingAddress: string;
}

export interface DropshippingProvider {
  search(query: string): Promise<SupplierProduct[]>;
  fulfill(request: FulfillmentRequest): Promise<{ externalOrderId: string; status: string }>;
}
