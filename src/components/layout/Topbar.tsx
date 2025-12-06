import { icons, images } from "@/src/assets";
import Image from "next/image";
import Link from "next/link";
import DropDown from "../ui/DropDown";
import SearchInput from "../ui/SearchInput";
import Container from "./container";
import { TCategory } from "@/src/lib/types";

export const Topbar = ({ categories }: { categories: TCategory[] }) => {
  return (
    <header className="bg-brand-header shadow-sm text-white">
      <Container className=" h-20 flex items-center justify-between">
        {/* Left: Logo + Category + Search */}
        <div className="flex flex-1 items-center gap-6">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            {" "}
            <Image
              src={images.logo}
              alt="Win app logo"
              width={132.5}
              height={48}
              priority
            />
          </Link>
          <div className="flex-1 hidden md:flex mx-5 ml-10 max-w-[534px]">
            <DropDown items={categories} />
            <SearchInput />
          </div>
        </div>

        {/* Right: Contact + Icons */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex flex-col text-sm text-white">
            <span className="font-medium">Call Us Now</span>
            <span className="text-white font-semibold">+011 5827918</span>
            <Link href="/signin" className="text-sm hover:underline">
              Sign In
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-slate-600 hover:text-brand-accent">
              <Image
                src={icons.userIcon}
                alt="user icon"
                width={24}
                height={24}
                priority
              />
            </button>
            <button className="relative text-slate-600 hover:text-brand-accent">
              <Image
                src={icons.heartIcon}
                alt="heart icon"
                width={24}
                height={24}
                priority
              />
            </button>
            <button className="relative text-slate-600 hover:text-brand-accent">
              <Image
                src={icons.cartIcon}
                alt="cart icon"
                width={24}
                height={24}
                priority
              />
              <span className="absolute -top-3 right-1 text-yellow-400 text-xs font-bold ">
                3
              </span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};
