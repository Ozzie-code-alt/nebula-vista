"use client"
import React from "react";
import Page from "../components/sub/Page";
import "../app/globals.css"
import TransitionEffect from "@/components/sub/TransitionEffect";
import Image from "next/image";



const MainPage = () => {
  return (
    <>
    <TransitionEffect/>
  
    <video
    autoPlay
    muted
    loop
    className="absolute  w-full h-full object-cover z-[-1]"
    >
      
    <source src="/Background.webm"  type="video/webm"/>
    </video>
    <Page>
      <div className=" w-full h-full flex flex-row justify-center items-center">
        {/*Left Div*/}
      <div className="flex flex-col w-full justify-center items-center">
       <div className="md:text-2xl lg:text-7xl text-white">
          Providing <br/>
          the <span>Best</span> <br/>
          Project Experience

       </div>
      </div>

      {/*Right Div*/}
        <div className=" flex flex-col w-full justify-center items-center">   
        <Image 
        src="/mainIconsdark.svg"
        width={650}
        height={650}
        alt="HeroImage.png"
        />
          
        </div>

      </div>
    </Page>

    </>
  );
};

export default MainPage;
