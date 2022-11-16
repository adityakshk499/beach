import React from "react";
import { RiCustomerService2Fill, RiGlobalFill } from "react-icons/ri";

const Forms = () => {
  return (
    <div className="flex-col md:px-14 flex space-y-10 items-center justify-center h-fit px-3 my-10">
    <div className="flex flex-col space-y-4 justify-around  md:flex-row">
        <div className="md:mx-4 md:w-[50%]">
      <h1 className="text-2xl text-center my-3 font-bold">
        LUXURY INCLUDED VACATIONS FOR TWO PEOPLE
      </h1>
      <p>
        Come experience the very pinnacle of luxury Caribbean all-inclusive
        vacations for couples at BEACHES Resorts. Our luxury beach resorts, set
        along the most gorgeous tropical settings and exquisite beaches in Saint
        Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and Curaçao,
        feature unlimited gourmet dining, unique bars serving premium liquors
        and wines, and every land and water sport, including complimentary green
        fees at our golf resorts and certified scuba diving at most resorts. If
        you are planning a wedding, BEACHES is the leader in Caribbean
        destination weddings and honeymoon packages.
      </p>
      <div className="flex flex-col md:items-center md:justify-center md:mt-6  md:flex-row">
        <div className="text-center p-4">
          <button className="text-white w-fit bg-gradient-to-r from-blue-900 to-cyan-500 p-4 rounded-lg">
            <RiCustomerService2Fill size={40} />
          </button>
          <h1 className="text-2xl font-bold">LEADING SERVICE</h1>
          <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
        </div>

        <div className="text-center p-4">
          <button className="text-white w-fit bg-gradient-to-r from-blue-900 to-cyan-500 p-4 rounded-lg">
            <RiGlobalFill size={40} />
          </button>
          <h1 className="text-2xl font-bold">LEADING SERVICE</h1>
          <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
        </div>
      </div>
      </div>
      <div className="flex md:w-[30%]  flex-col h-full space-y-2  border  ">
        <p className="text-center text-xl font-semibold my-2">
          GET AN ADDITIONAL 10% OFF
        </p>
        <p className="text-center text-lg mb-2 text-red-600">12 HOURS LEFT</p>
        <h1 className="bg-[#1f2937] text-md text-white p-2 w-full text-center">
          BOOK NOW AND SAVE
        </h1>
        <label className="text-left" htmlFor="destination">
          Destination:
        </label>
        <select className="p-2 mt-1 border w-full" name="" id="destination">
            <option value="Grande Antiguaa">Grande Antiguaa</option>
            <option value="Key West">Key West</option>
            <option value="Maldives">Maldives</option>
            <option value="Cozumel">Cozumel</option>
        </select>
        <label htmlFor="in">Check-In:</label>
        <input id="in" className="border p-2 w-full" type="date" />
        <label htmlFor="out">Check-Out:</label>
        <input id="out" className="border p-2 w-full" type="date" />

        <button className="text-white w-full mt-2 bg-gradient-to-r from-blue-900 to-cyan-500 p-4 rounded-lg">Rates & Availabilities</button>
      </div>
    </div>
    </div>
  );
};

export default Forms;
