"use client";

import { TCategory } from "@/src/lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export function ProductsNav({
  categories,
  selected,
}: {
  categories: TCategory[];
  selected?: string;
}) {
  const router = useRouter();
  const params = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handleClick = (category: string) => {
    startTransition(() => {
      const next = new URLSearchParams(params);
      if (category === selected) {
        next.delete("category");
      } else {
        next.set("category", category);
      }
      router.replace(`/?${next.toString()}`);
    });
  };

  return (
    <nav className="flex flex-wrap gap-4">
      {categories.map((cat) => {
        const isActive =
          cat?.name?.toLowerCase() === selected?.toLocaleLowerCase();
        return (
          <button
            key={cat.id}
            onClick={() => handleClick(cat.name)}
            className={`px-4 py-2 text-sm font-medium transition cursor-pointer ${
              isActive
                ? "text-brand-accent-light border-b-2 border-brand-accent-dark"
                : " text-slate-700 hover:text-brand-header"
            } ${isPending ? "opacity-50 pointer-events-none" : ""}`}
          >
            {cat?.name?.toUpperCase()}
          </button>
        );
      })}
    </nav>
  );
}
