"use client";
import React from "react";
import "../globals.css";
import TransitionEffect from "@/components/sub/TransitionEffect";
import MainSection2 from "@/components/sections/MainSection2";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import MainSection3 from "@/components/sections/MainSection3";
import { GlobeDemo } from "@/components/ui/globeBG";

const MainPage = () => {
  return (
    <div>
      <TransitionEffect />
      <div className="absolute w-screen h-screen z-50">
        <GlobeDemo />
      </div>

      <motion.div
        className="w-full h-screen flex flex-col justify-center items-center"
        initial="hidden"
        animate="visible"
      >
      </motion.div>

      <MainSection2 />
      <MainSection3 />
    </div>
  );
};

export default MainPage;
