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
        className=" w-full h-screen flex flex-col justify-center items-center"
        initial="hidden"
        animate="visible"
      >
        {/*Left Div*/}
        <motion.div
          variants={slideInFromTop}
          className="flex flex-col w-full justify-center items-center"
        >
          <div className="md:text-2xl lg:text-7xl  text-center text-white pr-16">
            <p className="textShadow">
              Providing <br />
              the <span>Best</span> <br />
              Project Experience
            </p>
          </div>
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
    </div>
  );
};

export default MainPage;
