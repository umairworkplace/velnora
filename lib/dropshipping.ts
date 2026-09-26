export interface SupplierProduct { externalId: string; title: string; price: number; available: boolean; }
export interface DropshipAdapter { name: string; search(query: string): Promise<SupplierProduct[]>; }

export class DemoSupplierAdapter implements DropshipAdapter {
  name = "demo-supplier";
  async search(query: string) {
    return [{ externalId: "demo", title: `${query} supplier item`, price: 19.99, available: true }];
  }
}
