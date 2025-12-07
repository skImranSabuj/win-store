import { statics } from "@/src/assets";
import Image from "next/image";

const images = [
  statics.electronics,
  statics.fashion,
  statics.accappliances,
  statics.stores,
];

export const Card = ({ item, index }) => {
  return (
    <div className="w-[278px] h-[199px] relative overflow-visible ml-0.5">
      <Image
        src={images[index % images.length]}
        alt="category image"
        fill
        className="object-contain"
      />
      <div className="absolute bottom-5 left-0 flex justify-between items-center bg-[#FEF9F9] opacity-95 w-[270px] py-4 shadow shadow-black px-2 text-[20px]">
        <p>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
        <button className="text-brand-accent-light">Shop</button>
      </div>
    </div>
  );
};
