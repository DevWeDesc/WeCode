"use client";
import React from "react";
import Image from "next/image";
import { INav } from "@/interfaces/interface";

export const Nav = ({ reflink, name, onclick, selected }: INav) => {
  return (
    <ul
      className="ml-12 md:mr-5 xl:mr-0 flex w-full text-md gap-6 pt-2 lg:text-xs"
      onClick={onclick}
    >
      <li
        className={
          selected === name
            ? "xl:w-full transition-all border-[white] brightness-90 border-b-[2px] py-2 xl:py-0 px-1"
            : "xl:w-full brightness-50 transition-all hover:border-[white] hover:brightness-90 py-2 xl:py-0 border-b-[0px] border-[black]"
        }
      >
        <a href={reflink} className="xl:w-full">
          {" "}
          {name}
        </a>
      </li>
    </ul>
  );
};
