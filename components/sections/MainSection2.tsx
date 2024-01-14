import React from "react";
import Index from "../sub/Cube";
import { WebTechStacks, mobileArtech } from "@/constants";

const MainSection2 = () => {
  return (
    <section className="w-full h-auto shadow-lg md:flex-row flex flex-col  justify-center  text-white ">
      {/**Left*/}
      <div className=" border border-red-500 h-full w-full px-10 py-10">
        {WebTechStacks.map((web) => (
          <div className=" group h-auto px-10 py-10 flex flex-row justify-center items-center gap-20 ">
            <div className="flex w-full h-auto justify-end ">
              <img
                src={web.img}
                alt="techImage"
                className="w-[100px] px-5"
              />
            </div>
            <div className="flex  w-full justify-start">
              <h1 className="md:text-xl text-3xl  group-hover:opacity-100 opacity-0 duration-500   text-white ">
                {web.title}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/**Center*/}
      <div className="  border border-red-500 w-full h-full px-10 py-10">
        <div className="flex justify-center text-7xl">
          <h1>Tech Stacks</h1>
        </div>
        {/*Put tech stacks here */}

        <Index />

      
      </div>

      {/**Right*/}
      <div className="  border border-red-500 h-full w-full px-10 py-10">
        {mobileArtech.map((tech) => (
          <div className=" h-auto px-10 py-10 flex justify-center items-center gap-10">
            <img src={tech.img} alt="techImage" className="w-[70px]" />
            <h1 className="md:text-xl text-3xl">{tech.title}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainSection2;
