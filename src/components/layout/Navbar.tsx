import Container from "./container";
import Link from "next/link";
import Image from "next/image";
import { icons, images } from "@/src/assets";

const Navbar = () => {
  return (
    <div className="bg-brand-nav text-white">
      <Container className="h-[49px] w-full flex-1 flex flex-row justify-between  items-center">
        <div className="flex flex-2">
          <Image
            src={icons.menuIcon}
            alt="Win app logo"
            width={24}
            height={24}
            priority
          />
          <h1 className="mx-3">Brouse By Category</h1>
          <nav className="px-4">
            {[
              "Home",
              "Easy Monthly Installments",
              "Shop by brands",
              "Become a Vendor",
            ].map((item) => (
              <Link href="#" key={item} className="mx-4 text-sm">
                {item}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 justify-end items-center">
          {[
            images.fbLogo,
            images.twitterLogo,
            images.instagramLogo,
            images.linkedinLogo,
          ].map((item, idx) => (
            <div
              key={idx}
              className="mx-3 h-8 w-8 flex justify-center items-center"
            >
              <Image
                src={item}
                alt="social logo"
                width={24}
                height={24}
                objectFit="contain"
                className="h-6 w-auto"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
