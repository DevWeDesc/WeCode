"use client";
import { AboutData, AboutDataCards } from "@/data/Data";
import { MdVerified } from "react-icons/md";
import about from "@/image/pngtree-people-working-at-home-office-picture-image_8715243.png";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { containerAnimation } from "@/animations/AnimationsDefault";

export const About = () => {
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
      className="grid py-10 lg:py-20"
    >
      {" "}
      <div className="lg:grid-cols-2 grid xxl:grid-cols-3">
        <div className="h-full hidden lg:flex lg:justify-center lg:items-center">
          <Image alt="" src={about} className="object-scale-down" />
        </div>
        <div className="lg:px-12 py-6 xxl:py-0 space-y-3 xxl:col-span-2 xxl:pr-96">
          <span className="w-full flex text-3xl md:text-4xl font-mono">
            Somos a <h1 className="ml-2">WeDescCode</h1>!
          </span>
          <p className="text-xl font-mono">
            Software personalizado para sua empresa!
          </p>
          <p className="brightness-75 transition-all hover:brightness-100">
            Justamente por ser criado conforme os processos e necessidades de
            cada negócio, a adaptação, a flexibilidade e a personalização já são
            vantajosas por si mesmas.
          </p>
          {AboutData.map((data, index) => (
            <p key={index} className="flex items-center gap-2">
              <MdVerified />
              <span> {data.name}</span>
            </p>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 mt-10 lg:pb-0 lg:pr-20 xxl:grid-cols-2 xxl:pr-96 gap-8">
        {AboutDataCards.map((data, index) => (
          <div
            className="p-10 bg-gray-700  rounded-2xl brightness-90 transition-all hover:brightness-100 hover:shadow-2xl hover:shadow-gray-600"
            key={index}
          >
            <p className="leading-relaxed">
              <strong className="text-lg font-mono">{data.title}</strong>{" "}
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
