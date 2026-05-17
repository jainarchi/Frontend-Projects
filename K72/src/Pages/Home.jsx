import React from "react";

import HomeHeroText from "../Components/home/HomeHeroText";
import HomeBottomText from "../Components/home/HomeBottomText";
import Video from "../Components/home/Bg_Video";



const Home = () => {
  return (
    <>
      <div className="bg-red-900 w-screen h-screen fixed">
        <Video />
      </div>

      <div className="h-screen w-screen relative flex flex-col justify-between pb-2 overflow-hidden">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </>
  );
};

export default Home;
