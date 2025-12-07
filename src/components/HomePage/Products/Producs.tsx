import { getAllProducts } from "@/src/lib/actions/products";
import Container from "../../layout/container";
import { ProductCard } from "./ProductCard";
import { TCategory } from "@/src/lib/types";
import { Suspense } from "react";
import { ProductsNav } from "./ProductsNav";

const Products = async ({
  categories,
  selectedCategory,
}: {
  categories: TCategory[];
  selectedCategory: string;
}) => {
  const newProducts = await getAllProducts();
  console.log({ newProducts });
  return (
    <Container className="px-4 md:px-12 py-12">
      <div className="px-2 mb-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-4">
          <h2 className="text-2xl text-brand-accent-light mb-2">
            Best <span className="text-black">Deals</span>
          </h2>

          <Suspense fallback={<p>Loading..</p>}>
            <ProductsNav categories={categories} selected={selectedCategory} />
          </Suspense>
        </div>

        <div
          className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-4 
        lg:grid-cols-5 
        xl:grid-cols-6 
        gap-4
      "
        >
          {newProducts?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Products;
