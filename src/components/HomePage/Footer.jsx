import React from "react";
import Line from "../../images/Line 6.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCategory = () => {
    setTimeout(() => {
      const categoryElement = document.getElementById("category");
      if (categoryElement) {
        const yOffset = 0;
        const y =
          categoryElement.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="font-custom1 text-white bg-black flex flex-col pl-8 gap-10 md:flex md:flex-row md:space-x-4 lg:flex lg:flex-row lg:space-x-4 px-10 xl:flex-row xl:justify-center xl:space-x-4 xl:py-12">
      <div className="text-left mt-10 md:mt-3">
        <img className="w-[15rem] md:w-[16rem]" src={Line} alt="line" />
        <p className="pt-8 text-[20px] md:text-[20px] md:pt-[1.2rem]">
          <span className="text-[#FF9000] ">Velar</span> Designing Studios
        </p>
        <p className="text-[#8B8B8B] text-[18px] pt-2 md:pt-2">
          velarstudioswork@gmail.com
        </p>
      </div>
      <div className="text-left">
        <img
          className="hidden md:inline-block md:w-[16rem]"
          src={Line}
          alt="line"
        />
        <p className="text-[21px] md:text-[20px] md:pt-2">Sitemap</p>
        <Link
          to="/"
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <p className="text-[#8B8B8B] text-[18px] pt-2 md:pt-2">Home</p>
        </Link>
        <Link to="/#category">
          <p
            onClick={scrollToCategory}
            className="text-[#8B8B8B] text-[18px] hover:cursor-pointer"
          >
            Portfolio
          </p>
        </Link>
        <p
          onClick={scrollToContact}
          className="text-[#8B8B8B] text-[18px] hover:cursor-pointer"
        >
          Contact Us
        </p>
      </div>
      <div className="text-left">
        <img
          className="hidden md:inline-block md:w-[16rem]"
          src={Line}
          alt="line"
        />
        <p className="text-[21px] md:text-[20px] md:pt-2">Social Links</p>
        <p className="text-[#8B8B8B] text-[18px] pt-2 md:pt-2">LinkedIn</p>
        <p className="text-[#8B8B8B] text-[18px]">Instagram</p>
        <p className="text-[#8B8B8B] text-[18px]">Beehance</p>
      </div>
      <div className="flex flex-col md:flex md:flex-col md:gap-4 md:mt-3">
        <img
          className="hidden md:inline-block md:w-[16rem]"
          src={Line}
          alt="line"
        />
        <input
          className="w-1/2 md:w-auto p-1 mb-4 md:mb-0 md:text-[18px] md:p-2 text-black"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
        />
        <motion.button
          className="w-1/2 p-1 md:w-auto lg:w-auto bg-[#303030] text-[#A4A4A4] hover:bg-gray-800 md:p-2 md:text-[18px]"
          whileTap={{ scale: 0.7 }}
          whileHover={{ scale: 1.2 }}
        >
          Subscribe
        </motion.button>
      </div>
    </div>
  );
};

export default Footer;
