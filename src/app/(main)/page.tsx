import Banner from "@/src/components/HomePage/Banner";
import Categories from "@/src/components/HomePage/Categories/Categories";
import NewProducts from "@/src/components/HomePage/Products/NewProducts";
import Products from "@/src/components/HomePage/Products/Producs";
import { getCategories } from "@/src/lib/actions/products";

export default async function Home({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const selectedCategory = searchParams?.category ?? "electronics";

  const categories = await getCategories();
  return (
    <>
      <Banner />
      <Categories categories={categories} />
      <NewProducts />
      <Products categories={categories} selectedCategory={selectedCategory} />
    </>
  );
}
