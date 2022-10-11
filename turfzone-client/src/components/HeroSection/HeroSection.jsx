import React from "react";
import Navbar from "../Navbar";
import { Footballer1 } from "../../assets/images";

const HeroSection = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center w-full">
        <div>
          <img src={Footballer1} alt="Footballer" className="w-1/2 h-1/2" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-black">
            Connecting the turfs
          </h1>
          <p className="text-lg text-black">
            Turf zone is a sportsground and outdoor playground booking portal
            that provides easy booking facility for schools, clubs and other
            sports organizations across Kenya. Enabling them to easily book a
            turf playground online - anytime, anywhere.
          </p>
          <a
            href="#"
            className="px-4 py-2 text-lg font-bold text-white bg-pink-500 rounded-md hover:bg-pink-600"
          >
            Book Turf
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
