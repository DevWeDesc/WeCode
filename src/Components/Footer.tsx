"use client";
import Logo from "@/image/Desc-Logo-Branco 1.png";
import Image from "next/image";
import arrowTop from "@/image/CaretUp.png";
import iconMap from "@/image/map-pin.png";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { PrimaryNav, SecondNav, SupData } from "@/data/Data";
import Link from "next/link";

export const Footer = () => {
  const formatNav = (word: string) => {
    const primaryLetter =
      word != "+WEDESC" ? word.substring(0, 1) : word.substring(0, 2);
    const restLetters =
      word != "+WEDESC"
        ? word.substring(1).toLowerCase()
        : word.substring(2).toLowerCase();
    return `${primaryLetter}${restLetters}`;
  };

  return (
    <footer className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-4 py-20 px-10 bg-primary lg:p-20 ">
      <div className="flex space-x-20">
        <div className="space-y-4">
          {" "}
          <h3 className="text-lg font-mono">MAPA DO SITE</h3>
          {PrimaryNav.map((data, index) => (
            <p key={index}>
              <a href={data.reflink}>{`${formatNav(data.name)}`}</a>
            </p>
          ))}
          {SecondNav.map((data, index) => (
            <p key={index}>
              <a href={data.reflink}>{`${formatNav(data.name)}`}</a>
            </p>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {" "}
        <h3 className="text-lg font-mono">PRECISA DE SUPORTE?</h3>
        {SupData.map((data, index) => (
          <p className="cursor-pointer" key={index}>
            {data.name}
          </p>
        ))}
      </div>
      <div className="space-y-4">
        {" "}
        <h3 className="text-lg font-mono">SIGA-NOS</h3>
        <div className="flex items-center gap-4">
          <Link
            target="_blank"
            title="link para o Linkedin da WeDescCode"
            href="https://www.linkedin.com/company/wedesctecnologia/"
          >
            <FaLinkedinIn className="text-4xl  hover:bg-blue-500 p-1 hover:p-2 rounded-md transition-all" />
          </Link>
          <Link
            className="flex justify-center items-center"
            title="link para o Facebook da WeDescCode"
            target="_blank"
            href="https://www.youtube.com/@WeDesc."
          >
            <div className="absolute z-[-1] w-3 h-3 bg-white" />{" "}
            <FaYoutube className="text-4xl hover:text-red-500 p-0 hover:p-[2px] bg-black hover:bg-transparent rounded-md transition-all" />
          </Link>
          <Link
            title="link para o Instagram da WeDescCode"
            target="_blank"
            href="https://www.instagram.com/we.desc/"
          >
            {" "}
            <FiInstagram className="text-4xl p-0 hover:p-1 rounded-md hover:bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 transition-all" />
          </Link>
        </div>
        <Image src={Logo} alt="" />
        <p className="max-w-[217px]">
          Nós acreditamos no sucesso dos nossos clientes
        </p>
      </div>
      <div className="space-y-10">
        <a href="#init" className="flex items-center gap-6">
          <p>Voltar ao topo </p> <Image alt="" src={arrowTop}></Image>
        </a>

        <div className="flex flex-col gap-4">
          {" "}
          <h3 className="flex gap-2">
            {" "}
            <Image alt="" className="object-scale-down" src={iconMap} />{" "}
            <p className="text-2xl">São Paulo</p>{" "}
          </h3>
          <p className="max-w-[300px] leading-[40px]">
            R. Adolfo Bastos, 598 - 71 - Vila Bastos Santo André - SP, 09041-000
          </p>
        </div>
      </div>
    </footer>
  );
};
