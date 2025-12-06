import { icons } from "@/src/assets";
import Image from "next/image";

const SearchInput = () => {
  return (
    <div className="flex md:flex-1/2 border rounded-tr-md rounded-br-md h-[39px] overflow-hidden">
      <input
        type="text"
        placeholder="Search for products"
        className="w-full bg-white text-black px-2 focus:outline-none"
      />
      <button className="bg-grey-light text-white p-2">
        <Image
          src={icons.searchIcon}
          alt="search icon"
          width={24}
          height={24}
          priority
        />
      </button>
    </div>
  );
};

export default SearchInput;
