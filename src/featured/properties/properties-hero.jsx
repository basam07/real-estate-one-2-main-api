"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function PropertiesHero({ property }) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prev => prev + 1);
  }, [property.images]);

  return (
    <div className="flex justify-between gap-4">
      {property?.images?.length > 0 ? (
        <Swiper
          key={key} // Force re-render when images change
          modules={[Navigation, Scrollbar, Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1.8}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {property.images.map((data, index) => (
            <SwiperSlide key={index} className="max-h-[400px] max-w-[400px]">
              <Image
                src={`/${data}`}
                width={300}
                height={300}
                alt={`Property Image ${index}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
}
