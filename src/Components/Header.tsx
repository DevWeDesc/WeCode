"use client";
import React, { useState } from "react";
import Logo from "@/image/logo.png";
import Image from "next/image";
import { PrimaryNav, SecondNav } from "@/data/Data";
import { Nav } from "./Nav";
import { INav } from "@/interfaces/interface";
import { ModalContact } from "./ModalContact";

export const Header = () => {
  const [selected, setSelected] = useState("");
  const [openHamburguer, setOpenHamburguer] = useState(false);
  const ulStyle =
    "ml-12 md:mr-5 xl:mr-0 flex w-full text-md gap-6 pt-2 lg:text-xs";
  const liStyle =
    "xl:w-full transition-all hover:border-[white] hover:brightness-90 py-2 xl:py-0 border-b-[0px] border-[black]";

  return (
    <header
      className={`${
        openHamburguer ? "opacity-100" : "opacity-100 h-full"
      } font-sans fixed xl:relative xl:h-full xl:w-full z-20 xl:bg-[#170f18] bg-[#170f18] text-white h-screen ${
        openHamburguer
          ? " w-[50%] md:w-[35%] sm:w-[35%] h-full"
          : "w-0 px-[0px]"
      }  transition-all py-2 px-10 min-h-32 xl:px-20 flex flex-col justify-start xl:flex-row items-center xl:justify-between `}
    >
      <div
        className={`transition-all bg-[#170f18] flex items-center justify-center h-12 gap-2 absolute w-screen top-0  left-0 px-10 xl:hidden`}
      >
        <div
          onClick={() =>
            openHamburguer ? setOpenHamburguer(false) : setOpenHamburguer(true)
          }
          className={`max-w-[50px] h-12 flex flex-col gap-8 absolute top-0 pt-4 left-0 z-10 px-10 xl:hidden`}
        >
          <div
            className={`${
              openHamburguer ? "absolute rotate-45 mt-2" : "absolute  mt-2"
            } h-[2px] transition-all brightness-75 w-8 bg-white`}
          ></div>
          <div
            className={`h-[1px] w-8 ${
              openHamburguer ? "hidden" : "block"
            } bg-white h-[2px] brightness-75`}
          ></div>
          <div
            className={` ${
              openHamburguer
                ? "absolute rotate-[130deg] mt-2"
                : " absolute  mt-4"
            } h-[2px] brightness-75 w-8 bg-white transition-all`}
          ></div>
        </div>
        <Image alt="" className=" xl:block" src={Logo} />
      </div>

      <div
        className={`flex flex-col justify-center ${
          openHamburguer ? "flex" : "hidden xl:flex"
        } xl:flex-row items-center md:items-end mt-10 xl:items-center xl:mt-0 `}
      >
        <Image
          alt=""
          className="hidden xl:flex xl:h-12 xl:object-scale-down"
          src={Logo}
        />
        {PrimaryNav.map((data: INav, index) => (
          <Nav
            onclick={() => {
              setSelected(data.name);
              setOpenHamburguer(false);
            }}
            selected={selected}
            name={data.name}
            reflink={data.reflink}
            key={index}
          />
        ))}
        <ul className={ulStyle}>
          <li className={liStyle}>
            <ModalContact />
          </li>{" "}
        </ul>
      </div>
      <div
        className={`flex flex-col ${
          openHamburguer ? "flex" : "hidden xl:flex"
        } xl:flex-row items-center md:items-end xl:items-center`}
      >
        {SecondNav.map((data: INav, index) => (
          <Nav
            onclick={() => {
              setSelected(data.name);
              setOpenHamburguer(false);
            }}
            selected={selected}
            name={data.name}
            reflink={data.reflink}
            key={index}
          />
        ))}
      </div>
    </header>
  );
};
