import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface INav {
  reflink: string;
  name: string;
  onclick?: () => void;
  selected?: string;
}

export interface ISocialMedia {
  socialMedia: string;
  url: string;
  followers: string;
  children: ReactNode;
  textButton: string;
}

export interface IWeOnboarding {
  logo?: string | any;
  title: string;
  description: string;
  colorButton: string;
  imageRigth: string | StaticImageData;
}

export interface ISwiperService {
  quantitySlides: number;
}

export interface ISwiperData {
  image: string | StaticImageData;
  url: string;
  date?: string;
  title: string;
  description: string;
}
export interface IFooterDataMap {
  name: string;
  url: string;
}

export interface IDivTecnologies {
  children: ReactNode;
  bg: string;
  color: string;
}

export interface ISkeletonSwiper {
  scale?: string;
}

export interface IInputs {
  name: string;
  email: string;
  content: string;
}
