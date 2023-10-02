"use client";
import { useEffect, useState, useRef } from "react";
import { SwipperService } from "./SwipperService";
import { SkeletonSwiper } from "./SkeletonSwiper";
import { motion, useInView, useAnimation } from "framer-motion";
import { containerAnimation } from "@/animations/AnimationsDefault";

export const Services = () => {
  const [quantitySlides, setQuantitySlides] = useState(3.5);
  const [loadingSwiper, setLoadingSwiper] = useState(false);
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isView) {
      mainControls.start("visible");
    }
  }, [isView]);

  useEffect(() => {
    if (window.innerWidth >= 1600) {
      setQuantitySlides(2.5);
    } else if (window.innerWidth >= 1280) {
      setQuantitySlides(3);
    } else if (window.innerWidth > 1024) {
      setQuantitySlides(2.5);
    } else if (window.innerWidth >= 658) {
      setQuantitySlides(2);
    } else if (window.innerWidth >= 558) {
      setQuantitySlides(1.2);
    } else {
      setQuantitySlides(1);
    }
    setLoadingSwiper(true);
  }, []);

  return (
    <motion.div
      variants={containerAnimation}
      initial="hidden"
      animate={mainControls}
      ref={ref}
    >
      <div className="w-full pb-6 bg-transparent flex flex-col items-center">
        <h3 className="pb-6 w-full text-center text-4xl xxl:text-5xl font-mono ">
          Nossos Serviços
        </h3>{" "}
        <p className="text-center max-w-[800px] brightness-75 leading-relaxed hover:brightness-100 transition-all">
          Na vanguarda da inovação tecnológica, a WeDesc é sua parceira de
          confiança para soluções de desenvolvimento de sistemas que impulsionam
          a transformação digital. Oferecemos uma gama abrangente de serviços,
          projetados para atender às necessidades únicas do seu negócio e
          alavancar sua vantagem competitiva.
        </p>
      </div>
      {!loadingSwiper && (
        <div className=" mt-16 mb-[116px] md:mb-16 md:mt-[70px] lg:mb-12 lg:mt-1 w-full lg:h-[40rem] xxl:h-auto xxl:mt-12 xxl:gap-20 xxl:pb-36 grid lg:gap-28 sm:gap-14  sm:grid-cols-3">
          <SkeletonSwiper />
          <SkeletonSwiper scale="scale-110" />
          <SkeletonSwiper />
        </div>
      )}
      {loadingSwiper && <SwipperService quantitySlides={quantitySlides} />}
    </motion.div>
  );
};
