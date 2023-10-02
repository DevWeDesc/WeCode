"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { containerAnimation } from "@/animations/AnimationsDefault";

import React from "react";
import { WeOnboarding } from "./WeOnboarding";
import Logo from "@/image/Desc-Logo-Branco 1.png";
import ImageSecondOnboarding from "@/image/RigthOn2.png";
import ImageOnboarding from "@/image/ImageRigthOnboargding.png";

export const OnBoardingSection = () => {
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
      className="space-y-10 bg-transparent pt-10 lg:space-y-0"
    >
      {" "}
      <WeOnboarding
        colorButton="#DC2626"
        description="Nosso processo de onboarding é cuidadosamente 
  projetado para proporcionar uma transição suave e eficiente 
  ao nosso serviço."
        imageRigth={ImageOnboarding}
        title="Nosso Onboarding"
        logo={""}
      />
      <WeOnboarding
        colorButton="#0088FF"
        description="garantindo que você tenha uma experiência 
  simplificada e completa desde o início."
        imageRigth={ImageSecondOnboarding}
        title="Com uma abordagem 
  orientada e personalizada, 
  iremos guiá-lo passo a passo "
        logo={Logo}
      />
    </motion.div>
  );
};
