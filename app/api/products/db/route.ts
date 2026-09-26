import { ok, fail } from "@/lib/api";
import { listProducts } from "@/lib/catalog-service";

export async function GET(request: Request) {
  try {
    const limit = Number(new URL(request.url).searchParams.get("limit") ?? "24");
    return ok(await listProducts(Number.isFinite(limit) ? limit : 24));
  } catch {
    return fail("Database is not available", 503);
  }
}
