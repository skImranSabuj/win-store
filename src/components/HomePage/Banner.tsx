import { images } from "@/src/assets";
import Image from "next/image";
import Container from "../layout/container";

const Banner = () => {
  return (
    <div className="relative h-[344px] w-full bg-amber-200">
      <Image
        src={images.bannerBg}
        alt="Win app logo"
        fill
        objectFit="fill"
        className="absolute top-0 left-0"
      />
      <div className="z-1 absolute h-[344px] w-full px-6 py-12">
        <Container>
          <div className="md:w-1/2">
            <h1 className="text-6xl font-medium text-brand-accent-light">
              <span className="text-black">Shop</span> Computer & experience
            </h1>
            <p className="my-2 text-xl text-[13px] font-light">
              You cannot inspect quality into the product; it is already there.{" "}
              <br />I am not a product of my circumstances. I am a product of my
              decisions.
            </p>
            <button className="bg-[#14B1F0] px-8 py-3 rounded-md text-white">
              View More
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
