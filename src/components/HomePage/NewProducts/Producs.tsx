import { getAllProducts } from "@/src/lib/actions/products";
import Container from "../../layout/container";
import { ProductCard } from "./ProductCard";

const Products = async () => {
  const newProducts = await getAllProducts();
  console.log({ newProducts });
  return (
    <Container className="px-12 py-12">
      <div className="px-2">
        <h2 className="text-2xl text-brand-accent-light ml-10 mb-2">
          Best Deals
        </h2>
        <div className="grid grid-cols-6 gap-4">
          {newProducts?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Products;
