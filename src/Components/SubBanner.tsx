"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { containerAnimation } from "@/animations/AnimationsDefault";

export const SubBanner = () => {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isView) {
      mainControls.start("visible");
    }
  }, [isView]);

  return (
    <motion.div
      variants={containerAnimation}
      initial="hidden"
      animate={mainControls}
      ref={ref}
      className="md:py-24 px-10 md:px-0 gap-5 xxl:gap-10 grid xxl:px-96 grid-rows-2 md:grid-rows-1 md:grid-cols-2 bg-gradient-to-r from-[#100515] to-[#290738]"
    >
      <div className="w-full h-full flex items-center justify-center xxl:justify-start">
        <p className="m-0 md:py-20 md:px-0 text-center md:text-left pt-10 xxl:text-3xl  text-md md:text-2xl max-w-[350px] xxl:max-w-xl  leading-relaxed font-mono">
          Nossa paixão é oferecer soluções tecnológicas inovadoras que
          impulsionam o crescimento e otimizam a eficiência do seu negócio.
        </p>
      </div>
      <div className="flex items-center justify-center mb-10 md:pr-10 lg:pr-20 xxl:pr-0 lg:mb-0">
        <div className=" h-[100%] w-full xxl:w-full md:h-[80%] lg:h-full xxl:h-[90%] bg-black border-[1px] border-[#0088FF]"></div>
      </div>
    </motion.div>
  );
};
