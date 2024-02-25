"use client";
import React from "react";
import "../globals.css";
import TransitionEffect from "@/components/sub/TransitionEffect";
import Image from "next/image";
import MainSection2 from "@/components/sections/MainSection2";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import MainSection3 from "@/components/sections/MainSection3";

const MainPage = () => {
  return (
    <div>
      <TransitionEffect />
      <video
        autoPlay
        muted
        loop
        className="absolute w-screen h-screen object-cover z-[-2]"
        preload="true"
      >
        <source src="/moonbg.webm" type="video/webm" />
      </video>

      <motion.div
        className="w-full h-screen flex flex-col justify-center items-center"
        initial="hidden"
        animate="visible"
      >
        {/*Left Div*/}
        <motion.div
          variants={slideInFromTop}
          className="flex flex-col w-full justify-center items-center gap-10"
        >
          <div className="md:text-2xl lg:text-7xl  text-center text-white pr-16">
            <p className="textShadow">
              Providing 
              the <span>Best </span> 
              Project Experience
            </p>
          </div>

          <motion.div
          variants={slideInFromRight(1.9)}
          className="max-w-7xl text-2xl text-center text-white pr-16">
            <p className="textShadow ">
            Justin Santos, a skilled web developer from the Philippines, specializes in crafting visually appealing and user-friendly websites, as showcased in his diverse and innovative portfolio.            </p>
          </motion.div>
        </motion.div>

        {/*Right Div*/}
        {/* <motion.div
          variants={slideInFromRight(1.5)}
          className=" flex flex-col w-full justify-center items-center"
        >
          <Image
            src="/mainIconsdark.svg"
            width={650}
            height={650}
            alt="HeroImage.png"
          />
        </motion.div> */}
      </motion.div>

      <MainSection2 />
      <MainSection3/>
    </div>
  );
};

export default MainPage;
