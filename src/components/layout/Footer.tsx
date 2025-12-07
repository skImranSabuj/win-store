import { images } from "@/src/assets";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#3A3A3A] text-white">
      <div className="max-w-7xl mx-auto py-8 px-6">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* LEFT SECTION */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <Image
                src={images.logo}
                alt="WinStore"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>

            <p className="text-[#32C8D9] text-lg sm:text-xl font-medium mb-3">
              Got questions? Call us 24/7!
            </p>

            <p className="leading-relaxed text-sm sm:text-base">
              03 111 666 144
            </p>
            <p className="leading-relaxed text-sm sm:text-base mb-6">
              0317 1777015.
            </p>

            <p className="text-[#32C8D9] text-lg sm:text-xl font-medium mb-2">
              Contact info
            </p>
            <p className="text-sm sm:text-base mb-6">info@winstore.pk</p>

            {/* Social Icons */}
            <div className="flex items-center">
              <div className="flex justify-between items-center">
                {[
                  images.fbLogo,
                  images.twitterLogo,
                  images.instagramLogo,
                  images.linkedinLogo,
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="mr-4 h-8 w-8 flex justify-center items-center"
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
            </div>
          </div>

          {/* TRENDING */}
          <div>
            <h3 className="text-[#32C8D9] text-xl sm:text-2xl font-medium mb-4">
              Trending
            </h3>
            <ul className="space-y-2 text-[13px] sm:text-base">
              <li>Installments</li>
              <li>Electronics</li>
              <li>Grocery</li>
              <li>Health & Beauty</li>
              <li>Home Appliances</li>
              <li>Mobile Accessories</li>
            </ul>
          </div>

          {/* INFORMATION */}
          <div>
            <h3 className="text-[#32C8D9] text-xl sm:text-2xl font-medium mb-4">
              Information
            </h3>
            <ul className="space-y-2 text-[13px] sm:text-base">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping & Return</li>
              <li>Privacy policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* CUSTOMER CARE */}
          <div>
            <h3 className="text-[#32C8D9] text-xl sm:text-2xl font-medium mb-4">
              Customer Care
            </h3>
            <ul className="space-y-2 text-[13px] sm:text-base">
              <li>My Account</li>
              <li>Track Your Order</li>
              <li>Recently Viewed</li>
              <li>Wishlist</li>
              <li>Compare</li>
              <li>Become a Vendor</li>
            </ul>
          </div>
        </div>

        {/* PAYMENT LOGOS */}
        <div className="flex flex-wrap justify-end items-center gap-4 sm:gap-6 -mt-16 sm:mt-2">
          <Image
            src={images.visa}
            alt="Visa"
            width={90}
            height={50}
            className="object-contain"
          />
          <Image
            src={images.master}
            alt="Mastercard"
            width={90}
            height={50}
            className="object-contain"
          />
          <Image
            src={images.cash}
            alt="Cash On Delivery"
            width={110}
            height={50}
            className="object-contain"
          />
          <Image
            src={images.easy}
            alt="Easy Installment Plans"
            width={110}
            height={50}
            className="object-contain"
          />
        </div>
      </div>
      {/* Bottom section */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto py-8 px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white text-sm">
          <p>© 2021 Winstore. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
