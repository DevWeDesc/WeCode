"use client";
import { Banner } from "@/Components/Banner";
import { Header } from "@/Components/Header";
import { SubBanner } from "@/Components/SubBanner";
import { Footer } from "@/Components/Footer";
import { SocialMedia } from "@/Components/SocialMedia";
import { OnBoardingSection } from "@/Components/Onboardings/OnBoardingSection";
import { Services } from "@/Components/Services";
import { About } from "@/Components/About";
import { Tecnologies } from "@/Components/Tecnologies";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const container = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.25,
      },
    },
  };
  return (
    <>
      <Header />
      <ToastContainer />
      <main className="flex flex-col w-full bg-primary">
        <motion.section
          variants={container}
          initial="hidden"
          animate="visible"
          id="init"
          className="px-10 lg:px-0 lg:pl-20 xxl:pl-96 flex items-center h-screen w-full bg-[#170f18] justify-center"
        >
          <Banner />
        </motion.section>
        <section
          id="about"
          className="px-10 lg:px-0 lg:pl-20 bg-primary xxl:pl-96 h-full"
        >
          <About />
        </section>
        <section id="+desc">
          <SubBanner />
        </section>
        <section
          id="services"
          className="px-10 lg:px-20 lg:block xxl:px-96 bg-primary py-10 h-full"
        >
          <Services />
        </section>
        <section
          id="tecnologies"
          className="lg:pl-20 bg-primary xxl:px-96 h-full"
        >
          <Tecnologies />
        </section>
        <section id="sociais">
          <SocialMedia />
        </section>
        <section id="onboarding">
          <OnBoardingSection />
        </section>
        <Footer />
      </main>
    </>
  );
}
