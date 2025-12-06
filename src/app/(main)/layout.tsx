import { Topbar } from "@/src/components/layout/Topbar";
import { getCategories } from "@/src/lib/actions/products";
import React, { ReactNode } from "react";

const layout = async ({ children }: { children: ReactNode }) => {
  const categories = await getCategories();
  console.log({ categories });
  return (
    <div>
      <Topbar categories={categories} />
      <div>{children}</div>
    </div>
  );
};

export default layout;
