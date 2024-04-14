import React, { useState } from "react";
import Line from "../../images/Line 6.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Subscribed successfully!");
    setEmail("");
  };

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

  const handleEmailClick = () => {
    window.open("mailto:velarstudioswork@gmail.com", "_blank");
  };

  return (
    <div className="font-custom1 text-white bg-black flex flex-col pl-8 gap-10 md:flex md:flex-row md:space-x-4 lg:flex lg:flex-row lg:space-x-4 px-10 xl:flex-row xl:justify-center xl:space-x-4 xl:py-12">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="text-left mt-10 md:mt-3">
        <img className="w-[15rem] md:w-[16rem]" src={Line} alt="line" />
        <p className="pt-8 text-[20px] md:text-[20px] md:pt-[1.2rem]">
          <span className="text-[#FF9000] ">Velar</span> Designing Studios
        </p>
        <p
          className="text-[#8B8B8B] text-[18px] pt-2 md:pt-2 hover:cursor-pointer"
          onClick={handleEmailClick}
        >
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
        <Link
          to="https://www.linkedin.com/in/jaydeepswarnkar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-[#8B8B8B] text-[18px] pt-2 md:pt-2">LinkedIn</p>
        </Link>
        <Link
          to="https://www.instagram.com/velarstudios.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-[#8B8B8B] text-[18px]">Instagram</p>
        </Link>
        <Link
          to="https://twitter.com/jaydeeps07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-[#8B8B8B] text-[18px]">Twitter</p>
        </Link>
      </div>
      <div className="flex flex-col md:flex md:flex-col md:gap-4 md:mt-3">
        <img
          className="hidden md:inline-block md:w-[14rem]"
          src={Line}
          alt="line"
        />
        <div className="flex flex-col gap-4 pt-[8px] md:w-auto">
          <input
            className="w-1/2 md:w-full p-1 text-sm md:text-base text-black"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleEmailChange}
          />
          <motion.button
            className="w-1/2 p-1 bg-[#303030] text-[#A4A4A4] hover:bg-gray-800 md:w-auto"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            onClick={handleEmailSubmit}
          >
            Subscribe
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
