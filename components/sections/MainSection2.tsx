import React from "react";
import Index from "../sub/Cube";
import { WebTechStacks, mobileArtech } from "@/constants";
import Carousel from "../sub/Carousel";

const MainSection2 = () => {
  return (
    <section className="w-full h-auto shadow-lg  flex flex-col  items-center justify-center text-white ">

      {/**Center*/}

      <div className=" w-[50%] h-full px-10 py-10 bg-black">
        <div className="flex justify-center text-7xl">
          <h1 className="font-semibold ">Tech Stacks</h1>
        </div>
        <Index />
      </div>

 {/**Infinite Cartousel */}
    <div className="w-full flex justify-center items-center h-auto  ">
        <Carousel/>
    </div>


    </section>
  );
};

export default MainSection2;
