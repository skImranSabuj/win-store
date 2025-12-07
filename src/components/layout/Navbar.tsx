"use client";

import Container from "./container";
import Link from "next/link";
import Image from "next/image";
import { icons, images } from "@/src/assets";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuItems = [
    "Home",
    "Easy Monthly Installments",
    "Shop by brands",
    "Become a Vendor",
  ];

  const socialIcons = [
    images.fbLogo,
    images.twitterLogo,
    images.instagramLogo,
    images.linkedinLogo,
  ];

  return (
    <div className="bg-brand-nav text-white">
      <Container className="h-[49px] flex items-center justify-between">
        {/* LEFT SECTION */}
        <div className="flex items-center">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="h-8 w-8 flex justify-center items-center md:hidden"
          >
            <Image
              src={icons.menuIcon}
              alt="menu"
              width={22}
              height={22}
              className="h-6 w-auto"
            />
          </button>

          {/* Desktop Category Button */}
          <div className="hidden md:flex items-center">
            <div className="h-8 w-8 flex justify-center items-center">
              <Image
                src={icons.menuIcon}
                alt="menu"
                width={22}
                height={22}
                className="h-6 w-auto"
              />
            </div>
            <h1 className="mx-3 whitespace-nowrap">Browse By Category</h1>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center px-4">
            {menuItems.map((item) => (
              <Link
                href="#"
                key={item}
                className="mx-4 text-sm hover:underline"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT SECTION: SOCIAL ICONS */}
        <div className="flex items-center">
          {socialIcons.map((item, idx) => (
            <div
              key={idx}
              className="mx-2 h-8 w-8 flex justify-center items-center"
            >
              <Image
                src={item}
                alt="social icon"
                width={24}
                height={24}
                className="h-5 w-auto"
              />
            </div>
          ))}
        </div>
      </Container>

      {/* MOBILE DROPDOWN MENU */}
      {openMenu && (
        <div className="md:hidden bg-brand-nav border-t border-white/10 py-2">
          <div className="px-5 flex flex-col gap-3">
            {menuItems.map((item) => (
              <Link
                href="#"
                key={item}
                className="text-sm py-2 border-b border-white/10"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
