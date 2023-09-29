import React from "react";
import Image from "next/image";
import { IWeOnboarding } from "@/interfaces/interface";

export const WeOnboarding = ({
  logo,
  title,
  description,
  colorButton,
  imageRigth,
}: IWeOnboarding) => {
  return (
    <div className="lg:grid bg-transparent bg-primary lg:grid-cols-2 px-10 lg:px-20 xxl:px-96">
      <div className="w-full h-full flex items-center">
        <div className="space-y-4">
          {logo != "" && <Image alt="" src={logo} />}
          <h2 className="font-mono text-3xl md:text-4xl xxl:text-5xl xxl:max-w-2xl max-w-lg">
            {title}
          </h2>
          <p className="lg:text-[20px] brightness-75 max-w-xl hover:brightness-100 transition-all">
            {description}
          </p>
          <button
            style={{ backgroundColor: colorButton }}
            className={`py-2 xxl:text-[20px] px-6 rounded-md hover:brightness-90 brightness-110 transition-all hover:ml-2`}
          >
            Ver Onboarding
          </button>
        </div>
      </div>
      <div className="hidden lg:block lg:z-[-1]">
        <Image
          alt=""
          className="object-scale-down hover:scale-105 transition-all"
          src={imageRigth}
        />
      </div>
    </div>
  );
};
