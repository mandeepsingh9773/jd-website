import React from "react";
import Line from "../images/Line 6.png";

const Footer = () => {
  return (
    <div className="flex flex-col pl-8 gap-10 md:flex-row justify-center text-white bg-black md:gap-10 font-custom1">
      <div className="text-left">
        <img className="w-[15rem] md:w-[16rem]" src={Line} alt="line" />
        <p className="pt-4 text-[18px] md:text-[20px] md:pt-2">
          <span className="text-[#FF9000] ">Velar</span> Designing Studios
        </p>
        <p className="text-[#8B8B8B] pt-2 md:pt-2">jayswarankar07@gmail.com</p>
      </div>
      <div className="text-left">
        <img className="hidden md:inline-block md:w-[16rem]" src={Line} alt="line" />
        <p className="text-[18px] md:text-[20px] md:pt-2">Sitemap</p>
        <p className="text-[#8B8B8B] pt-2 md:pt-2">Home</p>
        <p className="text-[#8B8B8B]">Portfolio</p>
        <p className="text-[#8B8B8B]">Contact Us</p>
      </div>
      <div className="text-left">
        <img className="hidden md:inline-block md:w-[16rem]" src={Line} alt="line" />
        <p className="text-[18px] md:text-[20px] md:pt-2">Social Links</p>
        <p className="text-[#8B8B8B] pt-2 md:pt-2">LinkedIn</p>
        <p className="text-[#8B8B8B]">Instagram</p>
        <p className="text-[#8B8B8B]">Beehance</p>
      </div>
      <div className="flex flex-col md:gap-4">
        <img className="hidden md:inline-block md:w-[16rem]" src={Line} alt="line" />
        <input className="w-1/2 p-1 mb-4 md:text-[18px] md:p-2 text-black" type="text" id="email" name="email" placeholder="Email" />
        <button className="w-1/2 p-1 bg-[#303030] text-[#A4A4A4] hover:bg-gray-800 md:p-2 md:text-[18px]">Subscribe</button>
      </div>
    </div>
    
  );
};
export default Footer;
