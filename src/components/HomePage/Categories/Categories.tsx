import { statics } from "@/src/assets";
import { getCategories } from "@/src/lib/actions/products";
import Image from "next/image";
import React from "react";
import Container from "../../layout/container";
import { Card } from "./Card";
import CategoryCarousel from "./CategoryCarousel";

const images = [
  statics.electronics,
  statics.fashion,
  statics.accappliances,
  statics.stores,
];

const Categories = async () => {
  const categories = await getCategories();
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
