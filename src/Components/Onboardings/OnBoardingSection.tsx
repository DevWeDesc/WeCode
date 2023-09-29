import React from "react";
import { WeOnboarding } from "./WeOnboarding";
import Logo from "@/image/Desc-Logo-Branco 1.png";
import ImageSecondOnboarding from "@/image/RigthOn2.png";
import ImageOnboarding from "@/image/ImageRigthOnboargding.png";

export const OnBoardingSection = () => {
  return (
    <div className="space-y-10 pt-10 lg:space-y-0">
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
    </div>
  );
};
