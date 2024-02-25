import React from "react";

const MainSection3 = () => {
  return (
    <section className="h-screen w-screen ">
      <div className="w-full h-full flex border border-red-500 ">
        {/*Left Div */}
        <div className="border px-20 py-20 flex flex-col w-full border-blue-500">
          <div className="border h-full w-full flex flex-col   border-yellow-500">
            <div className="h-full flex flex-col gap-10 border border-green-500 justify-center items-center">
              <div className="w-full flex ">
                <h1 className=" text-white text-left text-[70px]">
                  Design, Development, <br /> Optimize. I'm doing it all
                </h1>
              </div>

              <div className="flex flex-col w-full border  justify-start items-center gap-10">
                <div className="flex justify-start w-full">
                  <p className="text-white text-[20px] text-left max-w-[400px]">
                    Ali Saeed specializes in Branding, Presentation Design and
                    Web Design for companies and startups in the Middle East. He
                    is passionate about good user interface and clean, simple
                    design principles.
                  </p>
                </div>
                <div className="flex justify-start w-full">
                  <p className="text-white text-[20px] text-left max-w-[400px]">
                    Ali Saeed is an accomplished web designer in Kuwait, focused
                    on crafting user experiences that are designed to engage,
                    convert and delight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Right Div */}
        <div className="border flex flex-col w-full border-green-500"></div>
      </div>
    </section>
  );
};

export default MainSection3;
