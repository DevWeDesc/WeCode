"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
//import "swiper/css/pagination";
import "../styles/Swiper.css";
import Image from "next/image";
import Logo from "@/image/Desc-Logo-Branco 1.png";
import { ISwiperService } from "@/interfaces/interface";
import { SwiperData } from "@/data/Data";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import { Navigation } from "swiper/modules";

export const SwipperService = ({ quantitySlides }: ISwiperService) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(currentIndex);

  const handleSlideChange = (swiper: number | any) => {
    setCurrentIndex(swiper.realIndex);
  };
  return (
    <>
      <Swiper
        className="mySwiper"
        effect={"auto"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={quantitySlides}
        coverflowEffect={{
          rotate: 50,
          stretch: 100,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        initialSlide={1}
        onSlideChange={handleSlideChange}
        spaceBetween={100}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        navigation={true}
      >
        {SwiperData.map((swiper, index) => (
          <SwiperSlide
            key={index}
            className={`shadow-2xl shadow-[#342b36] max-w-md xxl:max-w-lg transition-all w-full ${
              index === currentIndex ? "sm:scale-110" : "scale-95"
            } rounded-3xl border-t-[26px] mt-10 mb-10 sm:mb-20`}
          >
            <div className="space-y-4">
              <Image
                alt=""
                className="mt-6 mx-5 object-scale-down"
                src={Logo}
              />
              <h2 className=" px-5 text-3xl xxl:text-4xl font-mono min-h-[68.4px] xxl:min-h-[136px]">
                {swiper.title}
              </h2>
              {!swiper.image && (
                <Skeleton className="w-full min-h-[174px] bg-gray-600" />
              )}
              {swiper.image && (
                <Image
                  src={swiper.image}
                  className="object-scale-down"
                  alt=""
                />
              )}
              <p className="px-5">{swiper.description}</p>
            </div>

            <div className="py-4 mt-4 w-full flex justify-between items-center border-t-2 border-white">
              <div>
                <strong className="min-w-full pl-10 brightness-150 text-[12px]">
                  Data da Entrega
                </strong>
                <p className="pl-10 text-[13px]">
                  {swiper.date ? swiper.date : "Em progresso..."}
                </p>
              </div>
              <Link
                target="_blank"
                title={`Link para o site da empresa ${swiper.title.substring(
                  8
                )}`}
                href={swiper.url}
              >
                <button className="mr-10 border-[1px] text-[13px] py-2 px-6 rounded-2xl border-red-600 hover:border-[2px] transition-all">
                  Veja Mais
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
