"use server";

import { apiFetch } from "@/src/lib/fetcher";
import { TCategory, TProduct } from "../types";

const TAG_ALL = "products";
const TAG_SINGLE = (id: number) => `product:${id}`;

export async function getAllProducts(): Promise<TProduct[]> {
  const data = await apiFetch<TProduct[]>("/products", {
    next: { revalidate: 60, tags: [TAG_ALL] },
  });
  return data;
}

export async function getProductById(id: number): Promise<TProduct> {
  const data = await apiFetch<TProduct>(`/products/${id}`, {
    next: { revalidate: 300, tags: [TAG_SINGLE(id)] },
  });
  return data;
}

export async function getCategories(): Promise<TCategory[]> {
  const res = await apiFetch<{
    data: TCategory[];
  }>("/products/categories", {
    next: { revalidate: 600, tags: ["categories"] },
  });
  if (res?.data) {
    return res.data;
  } else {
    return [];
  }
}
