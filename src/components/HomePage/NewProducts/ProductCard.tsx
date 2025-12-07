import { TProduct } from "@/src/lib/types";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: { product: TProduct }) {
  return (
    <div className="border border-slate-200 bg-white shadow-sm overflow-hidden w-[186px] h-[286px] p-1.5 flex flex-col">
      <div>
        <p className="text-sm text-slate-500">{product.category}</p>
        <h3 className="text-lg font-semibold text-slate-800 line-clamp-1">
          {product.title}
        </h3>
      </div>
      {/* Image */}
      <div className="aspect-video flex flex-1 items-center justify-center w-[158px] h-[129px] p-2 my-2">
        <Image
          src={product.image}
          alt={product.title}
          width={80}
          height={70}
          className="object-contain max-h-70"
        />
      </div>

      {/* Content */}
      <div className="">
        {/* Price */}
        <div className="text-center">
          <span className="text-sm line-through text-slate-400">
            RS {(product.price * 1.2).toFixed(2)}
          </span>
          <span className="text-md text-brand-accent ml-1">
            RS {product.price.toFixed(2)}
          </span>
        </div>

        {/* Button */}
        <button className="mt-1 w-full bg-teal-500 text-white py-2 text-sm font-medium hover:bg-teal-600 transition">
          Add to cart
        </button>
      </div>
    </div>
  );
}
