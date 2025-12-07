import { TProduct } from "@/src/lib/types";
import Image from "next/image";

export function ProductCard({ product }: { product: TProduct }) {
  return (
    <div
      className="
        border border-slate-200 bg-white shadow-sm overflow-hidden 
        w-full p-3 flex flex-col
      "
    >
      {/* Title */}
      <div>
        <p className="text-xs sm:text-sm text-slate-500">{product.category}</p>
        <h3 className="text-sm sm:text-base font-semibold text-slate-800 line-clamp-1">
          {product.title}
        </h3>
      </div>

      {/* Image */}
      <div className="aspect-video flex items-center justify-center w-full my-3">
        <Image
          src={product.image}
          alt={product.title}
          width={180}
          height={140}
          className="object-contain w-full h-auto max-h-40"
        />
      </div>

      {/* Price + Button */}
      <div className="mt-auto">
        <div className="text-center">
          <span className="text-xs sm:text-sm line-through text-slate-400">
            RS {(product.price * 1.2).toFixed(2)}
          </span>
          <span className="text-sm sm:text-md text-brand-accent ml-1">
            RS {product.price.toFixed(2)}
          </span>
        </div>

        <button
          className="
            mt-2 w-full bg-teal-500 text-white 
            py-2 text-sm font-medium 
            hover:bg-teal-600 transition rounded-md
          "
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
