"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
export default function TickerSlider() {
  const tickers = [
    {
      title: "Twiggy",
      image: "/images/tickers/001-twiggy.webp",
      href: "#",
    },
    {
      title: "iCat",
      image: "/images/tickers/002-icat.webp",
      href: "#",
    },
    {
      title: "Tigra",
      image: "/images/tickers/003-tigra.webp",
      href: "#",
    },
    {
      title: "LongAI",
      image: "/images/tickers/004-longai.webp",
      href: "#",
    },
    {
      title: "Rasta",
      image: "/images/tickers/005-rasta.webp",
      href: "#",
    },
    {
      title: "Moon",
      image: "/images/tickers/006-moon.png",
      href: "#",
    },
    {
      title: "Turkish",
      image: "/images/tickers/007-turkish.png",
      href: "#",
    },
    {
      title: "Snaut",
      image: "/images/tickers/006-moon.png",
      href: "#",
    },
    {
      title: "Test",
      image: "/images/tickers/009-test.webp",
      href: "#",
    },
    {
      title: "Gandhi",
      image: "/images/tickers/010-gandhi.webp",
      href: "#",
    },
  ];

  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={5}
      autoplay={{
        delay: 1000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay]}
    >
      {tickers.map((ticker, index) => (
        <SwiperSlide key={index}>
          <div className="flex  flex-row space-x-2 cursor-pointer hover:bg-gray-900 w-[150px] p-2 rounded-md items-center">
            <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center font-bold ">
              {index + 1}
            </span>
            <span className="uppercase text-[12px]">{ticker.title}</span>
            <a href={ticker.href}>
              <Image
                src={ticker.image}
                alt={ticker.title}
                width={25}
                height={25}
                className="rounded-full"
              />
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
