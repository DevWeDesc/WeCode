"use client";
import React, { ReactNode, useState } from "react";
import { MdVerified } from "react-icons/md";
import about from "@/image/robotic-hand.png";
import Image from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiCsharp,
  SiFastify,
  SiTailwindcss,
  SiStyledcomponents,
  SiChakraui,
  SiBootstrap,
  SiMui,
  SiJavascript,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiMongoose,
} from "react-icons/si";
import { IDivTecnologies } from "@/interfaces/interface";

const classTecnologi = ` text-5xl lg:text-6xl xxl:text-7xl transition-all`;

export const Tecnologies = () => {
  return (
    <div className="grid grid-rows-1 px-10 lg:px-0 w-full pb-20">
      {" "}
      <div className="xxl:grid-cols-3  lg:grid-cols-2 grid">
        <div className="flex flex-col xxl:col-span-2 h-full justify-between  py-3 space-y-3 ">
          <div className="space-y-4 pt-16 xxl:pt-32">
            <h2 className="w-full flex text-3xl md:text-4xl xxl:text-5xl font-mono">
              Nossas Tecnologias!
            </h2>
            <p className="text-lg lg:text-xl xxl:text-2xl font-mono">
              A Tecnologia: Força Transformadora da Era Moderna!
            </p>
            <p className="brightness-75 transition-all xxl:text-lg hover:brightness-100 pr-12">
              A Tecnologia: Força Transformadora da Era Moderna A tecnologia é a
              força motriz da inovação, capacitando-nos a superar desafios,
              conectar pessoas e revolucionar setores.
            </p>
          </div>
          <h3 className="text-2xl lg:text-3xl xxl:text-4xl font-mono pt-5">
            Linguagens de programação, Bibliotecas e Frameworks!
          </h3>
        </div>
        <div className="h-full hidden lg:flex w-full justify-center xxl:justify-end  xxl:col-span-1">
          <Image
            alt=""
            src={about}
            className=" w-[350px] xxl:w-auto object-scale-down"
          />
        </div>
      </div>
      <div className="mt-0 gap-8">
        <div className="grid lg:pr-20 xxl:pr-0 lg:grid-cols-5 xl:grid-cols-5 xxl:grid-cols-5 lg:grid-rows-2 grid-cols-2 gap-10 lg:gap-7 space-y-10">
          <DivTecnologies color="#000" bg="#FFF">
            <SiNextdotjs className={`${classTecnologi}`} />
            <p className="lg:text-2xl font-mono">NextJs</p>
          </DivTecnologies>
          <DivTecnologies color="#FFF" bg="rgb(14 165 233)">
            <SiReact className={classTecnologi} />
            <p className="lg:text-2xl font-mono ">React</p>
          </DivTecnologies>
          <DivTecnologies color="#FFF" bg="rgb(30 64 175)">
            <SiTypescript className={`${classTecnologi} `} />
            <p className="lg:text-2xl font-mono">TypeScript</p>
          </DivTecnologies>
          <DivTecnologies color="rgb(22 163 74)" bg="#FFF">
            <SiNodedotjs className={`${classTecnologi}  `} />
            <p className="lg:text-2xl font-mono">NodeJs</p>
          </DivTecnologies>
          <DivTecnologies color="rgb(147 51 234)" bg="#FFF">
            <SiCsharp className={`${classTecnologi}  `} />
            <p className="lg:text-2xl font-mono">C Sharp</p>
          </DivTecnologies>
          <DivTecnologies color="black" bg="#FFF">
            <SiFastify className={`${classTecnologi}  `} />
            <p className="lg:text-2xl font-mono">Fastify</p>
          </DivTecnologies>
          <DivTecnologies color="rgb(56 189 248)" bg="rgb(8 47 73)">
            <SiTailwindcss className={`${classTecnologi}   `} />
            <p className="lg:text-2xl font-mono">TailwindCSS</p>
          </DivTecnologies>
          <DivTecnologies color="#000" bg="rgb(249 168 212)">
            <SiStyledcomponents className={`${classTecnologi} `} />
            <p className="lg:text-2xl font-mono">Styled-Components</p>
          </DivTecnologies>
          <DivTecnologies color="#FFF" bg="rgb(45 212 191)">
            <SiChakraui className={`${classTecnologi} `} />
            <p className="lg:text-2xl font-mono">Chakra-UI</p>
          </DivTecnologies>
          <DivTecnologies color="rgb(107 33 168)" bg="#FFF">
            <SiBootstrap className={`${classTecnologi}  `} />
            <p className="lg:text-2xl font-mono">BOOTSTRAP</p>
          </DivTecnologies>
          <DivTecnologies color="rgb(29 78 216)" bg="#FFF">
            <SiMui className={`${classTecnologi}  `} />
            <p className="lg:text-2xl font-mono"> MUI</p>
          </DivTecnologies>
          <DivTecnologies color="black" bg="rgb(250 204 21)">
            <SiJavascript className={`${classTecnologi}  `} />
            <p className="lg:text-2xl font-mono"> JavaScript</p>
          </DivTecnologies>
          <p className="pt-16 text-2xl md:text-3xl xxl:text-4xl col-span-2 lg:col-span-5 xl:col-span-5 xxl:col-span-5 font-mono">
            Bancos de Dados e ORMs!
          </p>
          <DivTecnologies color="#FFF" bg="rgb(8 47 73)">
            <SiPrisma className={`${classTecnologi}  `} />
            <p className="lg:text-2xl font-mono"> Prisma</p>
          </DivTecnologies>
          <DivTecnologies color="rgb(30 64 175)" bg="#FFF">
            <SiPostgresql className={`${classTecnologi}  `} />
            <p className="lg:text-2xl font-mono"> PostgreSQL</p>
          </DivTecnologies>
          <DivTecnologies color="rgb(34 197 94)" bg="rgb(8 47 73)">
            <SiMongodb className={`${classTecnologi}  `} />
            <p className="lg:text-2xl font-mono"> MongoDB</p>
          </DivTecnologies>
          <DivTecnologies color="rgb(136 19 55)" bg="#FFF">
            <SiMongoose className={`${classTecnologi}  `} />
            <p className="lg:text-2xl font-mono"> Mongoose</p>
          </DivTecnologies>
        </div>
      </div>
    </div>
  );
};

const DivTecnologies = ({ children, bg, color }: IDivTecnologies) => {
  const [styleDiv, setStyleDiv] = useState({
    backgroundColor: "",
    filter: "",
    color: "",
  });
  const [continueStyle, setContinueStyle] = useState(false);

  const handleStyle = () => {
    if (bg != "" || continueStyle) {
      setStyleDiv({ backgroundColor: bg, color: color, filter: "" });
      // setContinueStyle(true);
      //continueStyle ? setContinueStyle(false) : null;
    } else {
      setStyleDiv({
        filter: "brightness(1.5)",
        backgroundColor: "",
        color: "",
      });
      //setContinueStyle(false);
    }
  };
  const handleStyleDisable = () => {
    if (continueStyle) {
      null;
    } else {
      setStyleDiv({ backgroundColor: "", filter: "", color: "" });
      //setContinueStyle(false);
    }
  };

  const handleStyleClick = () => {
    if (continueStyle) {
      setStyleDiv({ backgroundColor: bg, color: color, filter: "" });
    } else {
      setStyleDiv({ backgroundColor: "", filter: "", color: "" });
    }
  };
  return (
    <div
      onMouseOver={handleStyle}
      onMouseOut={handleStyleDisable}
      onClick={() => {
        if (continueStyle) {
          setContinueStyle(false);
          handleStyleClick();
        } else {
          setContinueStyle(true);
          handleStyleClick();
        }
      }}
      style={styleDiv}
      className="text-center rounded-md w-full gap-4 flex-col h-full shadow-lg brightness-90 hover:brightness-110 hover:scale-105 transition-all hover:shadow-xl hover:shadow-gray-700 shadow-gray-700 mt-10 flex justify-center items-center"
    >
      {children}
    </div>
  );
};
