"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Card } from "./Card";
import { TCategory } from "@/src/lib/types";

export default function CategoryCarousel({
  categories,
}: {
  categories: TCategory[];
}) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={1}
      spaceBetween={20}
      breakpoints={{
        640: { slidesPerView: 1 },
        1024: { slidesPerView: 4 },
      }}
    >
      {categories.map((item, index) => (
        <SwiperSlide key={index}>
          <Card index={index} item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
