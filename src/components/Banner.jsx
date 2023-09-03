import React from "react";
import Typed from "react-typed";
import BannerImg from "../assets/bannerpizza.jpg";

function Banner() {
  return (
    <div className="banner text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center py-[-10]">
        <p className="text-[#c20404] font-bold p-2">
          Growing with Data bla bla
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow withe the jad
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast,flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTB", "Fun", "Sasss"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-red-600">
          Do whateever u want in this paragaraph and done somethings
        </p>
        <button className="bg-[#c20404] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Banner;
