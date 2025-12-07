import { getAllProducts } from "@/src/lib/actions/products";
import Container from "../../layout/container";
import { ProductCard } from "./ProductCard";

const NewProducts = async () => {
  const newProducts = await getAllProducts(10);

  return (
    <Container className="px-4 sm:px-8 md:px-12 py-12">
      <div className="px-2">
        <h2 className="text-xl sm:text-2xl text-brand-accent-light ml-2 sm:ml-10 mb-4">
          New <span className="text-black">Arrivals</span>
        </h2>

        <div
          className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5 
          xl:grid-cols-6 
          gap-x-4 sm:gap-x-6 
          gap-y-6 sm:gap-y-8
        "
        >
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default NewProducts;
