"use client";
import { icons, images } from "@/src/assets";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "../ui/SearchInput";
import Container from "./container";
import { TCategory } from "@/src/lib/types";
import dynamic from "next/dynamic";
import { useState } from "react";

const DropDown = dynamic(() => import("../ui/DropDown"));

export const Topbar = ({ categories }: { categories: TCategory[] }) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <header className="bg-brand-header shadow-sm text-white">
      <Container className="h-20 flex items-center justify-between">
        {/* LEFT: LOGO + SEARCH (mobile) */}
        <div className="flex items-center gap-4 flex-1">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <Image
              src={images.logo}
              alt="Win app logo"
              width={120}
              height={40}
              priority
              className="w-auto h-10 object-contain"
            />
          </Link>

          {/* Mobile Search Button */}
          <button
            className="md:hidden ml-2"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            <Image src={icons.searchIcon} alt="search" width={24} height={24} />
          </button>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 mx-5 ml-10 max-w-[534px]">
            <DropDown items={categories} />
            <SearchInput />
          </div>
        </div>

        {/* RIGHT: CONTACT + ICONS */}
        <div className="flex items-center gap-4">
          {/* Contact (Desktop Only) */}
          <div className="hidden lg:flex flex-col text-sm text-white mr-4">
            <span className="font-medium">Call Us Now</span>
            <span className="font-semibold">+011 5827918</span>
            <Link href="/signin" className="hover:underline">
              Sign In
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="relative">
              <Image
                src={icons.userIcon}
                alt="user icon"
                width={22}
                height={22}
              />
            </button>

            <button className="relative">
              <Image
                src={icons.heartIcon}
                alt="heart icon"
                width={22}
                height={22}
              />
            </button>

            <button className="relative flex items-center">
              <Image
                src={icons.cartIcon}
                alt="cart icon"
                width={24}
                height={24}
              />
              <span className="absolute -top-2 left-3 bg-yellow-400 text-black text-xs px-1 rounded font-bold">
                3
              </span>
              <span className="ml-1 hidden sm:inline">Cart</span>
            </button>
          </div>
        </div>
      </Container>

      {/* MOBILE SEARCH BAR DROPDOWN */}
      {showMobileSearch && (
        <div className="md:hidden bg-brand-header py-3 px-5">
          <SearchInput />
        </div>
      )}
    </header>
  );
};
