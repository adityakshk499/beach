import React from "react";
import Herovid from "../assets/beachVid.mp4";
const Hero = () => {
  return (
    <div className="w-full h-screen relative top-[-80px] -z-10 ">
      <video
        className="object-cover h-full  brightness-50  w-full"
        src={Herovid}
        loop={true}
        autoPlay={true}
        muted={true}
      />
      <div className="absolute top-0 flex-col flex w-full h-full items-center  text-center px-10 space-y-4  justify-center">
        <p className="text-white text-xl font-semibold"> First Class Travel</p>
        <p className="text-white text-xl font-semibold"> Top 1% Locations Worldwide</p>
        <input className="p-3 w-[100%] sm:w-[60%] rounded-xl" type="text" placeholder="Search Destinations"/>
      </div>
    </div>
  );
};

export default Hero;
