import { db } from "@/lib/db";

export async function listProducts(limit = 24) {
  return db.product.findMany({
    where: { status: "ACTIVE" },
    orderBy: { createdAt: "desc" },
    take: Math.min(Math.max(limit, 1), 100),
  });
}

export async function getProductBySlug(slug: string) {
  return db.product.findUnique({ where: { slug } });
}
