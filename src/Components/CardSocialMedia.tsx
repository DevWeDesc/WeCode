import React from "react";
import { ISocialMedia } from "@/interfaces/interface";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

export const CardSocialMedia = ({
  followers,
  children,
  textButton,
  url,
  socialMedia,
}: ISocialMedia) => {
  return (
    <div
      className={`flex items-center flex-col rounded-xl py-10 bg-transparent shadow-md shadow-emerald-700 hover:shadow-xl hover:shadow-emerald-700`}
    >
      {children}
      <div className="pt-3">
        <p className="text-4xl font-mono xxl:text-5xl">{followers}</p>
        <p className="text-[12px] xxl:text-[14px] brightness-90">seguidores</p>
      </div>
      <button className="mt-2 py-2 px-4 border-[2px] brightness-90 hover:brightness-100 transition-all  hover:shadow-lg hover:shadow-emerald-800 border-white rounded-lg flex items-center gap-2">
        <Link href={url} title={`Link para ${socialMedia}`} target="_blank">
          {textButton}
        </Link>{" "}
        <FiArrowUpRight />
      </button>
    </div>
  );
};
