"use server";

import { apiFetch } from "@/src/lib/fetcher";
import { TCategory, TProduct } from "../types";

const TAG_ALL = "products";
const TAG_SINGLE = (id: number) => `product:${id}`;

export async function getAllProducts(limit?: number): Promise<TProduct[]> {
  let endPoint = "/products";
  if (limit) {
    endPoint += `?limit=${limit}`;
  }

  const res = await apiFetch<{ data: TProduct[] }>(endPoint, {
    revalidate: 60,
    tags: [TAG_ALL],
  });

  return res?.data ?? [];
}

export async function getProductById(id: number): Promise<TProduct> {
  return apiFetch<TProduct>(`/products/${id}`, {
    revalidate: 300,
    tags: [TAG_SINGLE(id)],
  });
}

export async function getCategories(): Promise<TCategory[]> {
  const res = await apiFetch<{ data: TCategory[] }>("/products/categories", {
    revalidate: 600,
    tags: ["categories"],
  });

  return res?.data ?? [];
}
