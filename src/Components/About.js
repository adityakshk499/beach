import React from "react";
import maldives1 from '../assets/maldives.jpg'
import borabora from '../assets/borabora.jpg'
import keywest from '../assets/keywest.jpg'
import maldives2 from '../assets/maldives2.jpg'
import borabora2 from '../assets/borabora2.jpg'


const About = () => {
  return (
    <div className=" md:px-14 h-fit w-full ">
      <div className="flex flex-col text-center justify-center items-center px-3 space-y-4">
        <h1 className="text-2xl md:text-4xl font-bold">All-Inclusive Resorts</h1>
        <h5 className="text-l  md:text-2xl font-normal">On the Caribbean's Best Beaches</h5>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <img className="w-[100%]" src={maldives1} alt='/' />
            <div className="grid grid-cols-2 gap-4">
            <img  src={borabora} alt="/" />
            <img className="w-[100%] h-[90%]" src={keywest} alt="/" />
            <img className="w-[100%] h-[88%]" src={maldives2} alt="/" />
            <img  className="w-[100%] h-[88%]" src={borabora2} alt="/" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
