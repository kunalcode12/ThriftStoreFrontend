import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative border-gray-400 w-full">
      {/* Background Image */}
      <img className="w-[2200px]" src={assets.homeImg} alt="Hero Background" />

      {/* Overlay Text and Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">WE LOVE</h1>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">PRE-LOVED</h2>
        <Link to="/collection">
          <button className="px-6 py-2 border border-gray-700 text-gray-700 font-medium rounded hover:bg-gray-100">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
