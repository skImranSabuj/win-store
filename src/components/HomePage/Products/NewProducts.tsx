import { getAllProducts } from "@/src/lib/actions/products";
import Container from "../../layout/container";
import { ProductCard } from "./ProductCard";

const NewProducts = async () => {
  const newProducts = await getAllProducts(10);
  console.log({ newProducts });
  return (
    <Container className="px-12 py-12">
      <div className="px-2">
        <h2 className="text-2xl text-brand-accent-light ml-10 mb-2">
          New Arrivals
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-8">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default NewProducts;
