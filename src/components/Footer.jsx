import React from "react";
import Line from "../images/Line 6.png";
const Footer = () => {
  return (
    <div className="font-custom1 text-white bg-black flex flex-col pl-8 gap-10 md:flex md:flex-row md:space-x-4 lg:flex lg:flex-row lg:space-x-4 px-10 xl:flex-row xl:justify-center xl:space-x-4">
      <div className="text-left mt-10 md:mt-3">
        <img className="w-[15rem] md:w-[16rem]" src={Line} alt="line" />
        <p className="pt-8 text-[18px] md:text-[20px] md:pt-[1.2rem]">
          <span className="text-[#FF9000] ">Velar</span> Designing Studios
        </p>
        <p className="text-[#8B8B8B] pt-2 md:pt-2">jayswarankar07@gmail.com</p>
      </div>
      <div className="text-left">
        <img
          className="hidden md:inline-block md:w-[16rem]"
          src={Line}
          alt="line"
        />
        <p className="text-[18px] md:text-[20px] md:pt-2">Sitemap</p>
        <p className="text-[#8B8B8B] pt-2 md:pt-2">Home</p>
        <p className="text-[#8B8B8B]">Portfolio</p>
        <p className="text-[#8B8B8B]">Contact Us</p>
      </div>
      <div className="text-left">
        <img
          className="hidden md:inline-block md:w-[16rem]"
          src={Line}
          alt="line"
        />
        <p className="text-[18px] md:text-[20px] md:pt-2">Social Links</p>
        <p className="text-[#8B8B8B] pt-2 md:pt-2">LinkedIn</p>
        <p className="text-[#8B8B8B]">Instagram</p>
        <p className="text-[#8B8B8B]">Beehance</p>
      </div>
      <div className="flex flex-col md:flex md:flex-col md:gap-4 md:mt-3">
        <img
          className="hidden md:inline-block md:w-[16rem]"
          src={Line}
          alt="line"
        />
        <input
          className="w-1/2 md:w-auto p-1 mb-4 md:text-[18px] md:p-2 text-black"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
        />
        <button className="w-1/2 md:w-auto lg:w-auto p-1 bg-[#303030] text-[#A4A4A4] hover:bg-gray-800 md:p-2 md:text-[18px]">
          Subscribe
        </button>
      </div>
    </div>
  );
};
export default Footer;
