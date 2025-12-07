import { getCategories } from "@/src/lib/actions/products";
import React from "react";
import Container from "../../layout/container";
import CategoryCarousel from "./CategoryCarousel";
import { TCategory } from "@/src/lib/types";

const Categories = async ({ categories }: { categories: TCategory[] }) => {
  return (
    <div className="h-[231px]  bg-linear-to-b from-[#F3EDC9] to-white">
      <Container>
        <div className="flex justify-between py-4 px-8">
          <CategoryCarousel categories={[...categories, ...categories]} />
        </div>
        <hr className="border-grey-light mx-10" />
      </Container>
    </div>
  );
};

export default Categories;
