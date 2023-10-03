"use client";
import React, { useEffect, useState } from "react";
import BannerImage from "@/image/imgBanner.png";
import Image from "next/image";
import Link from "next/link";

export const Banner = () => {
  const text =
    " Mantenha o foco no seu negócio, enquanto a WeDesc cuida da sua T.I";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);
  return (
    <div className="lg:min-h-[725px] text-center lg:text-left h-full w-full flex items-center">
      <div className="flex flex-col items-center lg:items-start lg:justify-center z-[2] bg-none lg:max-w-[720px] space-y-2">
        {" "}
        <h1 className="text-3xl md:text-4xl xxl:text-5xl font-mono">
          {displayText}
        </h1>
        <p className="brightness-75 hover:brightness-90 transition-all xxl:text-[20px] xxl:max-w-2xl lg:max-w-[600px]">
          Equipe especializada em TI pronta para atender às suas necessidades.
          Aumente a produtividade e reduza custos com nossos serviços de TI.
        </p>
        <Link href="#services" className="w-full lg:max-w-[200px]" about="">
          <button className="w-full lg:max-w-[200px] xxl:text-[20px] xxl:py-4 xxl:max-w-xs rounded-md py-2 brightness-90 hover:brightness-110 hover:border-[2px] hover:ml-4 transition-all mt-4 border-[1px] border-[#DC2626]">
            Nossos trabalhos!
          </button>
        </Link>
      </div>
      <Image
        alt=""
        src={BannerImage}
        className="absolute right-0 lg:object-contain  hidden md:block lg:block  top-3 xl:top-16  xxl:top-0 h-screen"
      ></Image>
    </div>
  );
};
