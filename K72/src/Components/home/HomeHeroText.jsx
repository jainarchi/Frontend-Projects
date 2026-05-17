import React from "react";
import Video from "./Bg_Video";

const HomeHeroText = () => {
  return (
    <>
      <div className="text-center text-[10vw] uppercase text-white">
        <div className="leading-[8vw]">the spark for</div>
        <div className="leading-[10vw] justify-center flex items-center ">
          All
          <div className="relative h-[7vw] w-[16vw] rounded-full overflow-hidden border-2">
            <Video />
          </div>
          Things
        </div>

        <div className="leading-[8vw]">Creative</div>
      </div>

      <div className=" text-white pr-1.5">
        <p className=" w-[300px] ml-auto">
          K72 is an agency that builds brands from every angle. Today, tomorrow
          and years from now. We think the best sparks fly when comfort zones
          get left behind and friction infuses our strategies, rands and
          communications with real feeling. We’re transparent, honest and say
          what we mean, and when we believe in something, we’re all in.
        </p>
      </div>
    </>
  );
};

export default HomeHeroText;
