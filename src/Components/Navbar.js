import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { RiUser3Line } from "react-icons/ri";
import {
  HiOutlineChevronDoubleDown,
  HiOutlineChevronDoubleUp,
} from "react-icons/hi";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsPinterest,
  BsInstagram,
} from "react-icons/bs";
const Navbar = () => {
  const [nav, setnav] = useState(true);

  function handlenav() {
    setnav(!nav);
  }

  return (
    <div className={nav===true?"text-white  w-full h-[80px]  z-10 ":'text-black  w-full h-[80px]  z-10 bg-gradient-to-r from-cyan-100 to-cyan-50 '}>
      <div className="p-5 flex flex-row justify-between items-center ">
        <div>
          <h1 className="text-4xl font-bold">BEACHES.</h1>
        </div>
        <div className="hidden sm:flex space-x-6  items-center justify-center text-lg font-medium text-white">
          <p>Home</p>
          <p>Destinations</p>
          <p>Travel</p>
          <p>View</p>
          <p>Book</p>
        </div>
        <div className="hidden sm:flex">
          <BiSearch size={21} />
          <RiUser3Line size={21} />
        </div>
        <div onClick={handlenav} className="sm:hidden">
          {nav === false ? (
            <HiOutlineChevronDoubleDown size={30} />
          ) : (
            <HiOutlineChevronDoubleUp size={30} />
          )}
        </div>
      </div>
      <div className={nav===false?"text-black  bg-gradient-to-r from-cyan-100 to-cyan-50 sm:hidden rounded-b-3xl absolute h-[70vh] w-full top-[80px]":"hidden"}>
        <ul className="flex flex-col text-center justify-center m-4">
          <li onClick={handlenav} className="p-3 text-lg  font-bold">Home</li>
          <li onClick={handlenav} className="p-3 text-lg font-bold" >Destinations</li>
          <li onClick={handlenav} className="p-3 text-lg font-bold">Travel</li>
          <li onClick={handlenav} className="p-3 text-lg font-bold">View</li>
          <li onClick={handlenav} className="p-3 text-lg font-bold">Book</li>
          <li onClick={handlenav} className="p-3 text-lg font-bold">
            <button className="text-white w-full bg-gradient-to-r from-blue-900 to-cyan-500 p-4 rounded-2xl">Search</button>
          </li>
          <li onClick={handlenav} className="p-3 text-lg font-bold">
            <button className="text-white w-full bg-gradient-to-r from-blue-900 to-cyan-500 p-4 rounded-2xl">Account</button>
          </li>
          <li>
            <div className="mt-3 p-3 flex flex-row justify-between items-center">
              <BsFacebook onClick={handlenav} className="cursor-pointer" size={30} color={'blue'} />
              <BsTwitter onClick={handlenav} className="cursor-pointer" size={30} color={'blue'} />
              <BsYoutube onClick={handlenav} className="cursor-pointer" size={30} color={'blue'} />
              <BsPinterest onClick={handlenav} className="cursor-pointer" size={30} color={'blue'} />
              <BsInstagram onClick={handlenav} className="cursor-pointer" size={30} color={'blue'} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
