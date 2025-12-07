import Banner from "@/src/components/HomePage/Banner";
import Categories from "@/src/components/HomePage/Categories/Categories";
import NewProducts from "@/src/components/HomePage/NewProducts/NewProducts";
import Products from "@/src/components/HomePage/NewProducts/Producs";

export default async function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <NewProducts />
      <Products />
    </>
  );
}
