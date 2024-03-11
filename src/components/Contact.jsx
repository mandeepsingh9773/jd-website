import React from "react";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import line from "../images/Line 2.png";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="main bg-black text-white space-y- flex flex-col md:flex md:flex-row md:py-8 lg:flex lg:flex-row lg:justify-between lg:py-12 xl:flex xl:flex-row xl:justify-between xl:py-14">
        <div className="logo-email md:flex md:flex-row md:justify-center md:w-1/2 xl:w-1/2">
          <div className="logos flex flex-row justify-center items-center space-x-12 pt-6 pb-1 md:flex md:flex-col md:gap-8 md:justify-center md:items-end md:pr-14 md:pb-[18rem] md:w-1/4  lg:flex lg:flex-col lg:gap-8 lg:justify-center lg:items-end lg:mt-4 lg:pr-14 lg:pb-[18rem] lg:pt-4 lg:w-1/2 xl:flex xl:flex-col xl:gap-8 xl:justify-center xl:items-end xl:pr-14 xl:pt-4 xl:pb-[18rem] xl:w-1/2">
            <motion.div
              className=" hover:cursor-pointer"
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.5 }}
            >
              <FaYoutube size={37} />
            </motion.div>
            <motion.div
              className=" hover:cursor-pointer"
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.5 }}
            >
              <FaInstagram size={37.5} />
            </motion.div>
            <motion.dev
              className=" hover:cursor-pointer"
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.5 }}
            >
              <FaXTwitter size={34.5} />
            </motion.dev>
            <motion.div
              className=" hover:cursor-pointer"
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.5 }}
            >
              <FaLinkedin size={37.5} />
            </motion.div>
          </div>
          <div className="email flex flex-col px-6 py-5 space-y-4 text-left md:w-1/2 md:p-0 lg:w-1/2 lg:px-4 lg:py-10 lg:gap-4">
            <img
              className="py-4 md:py-0 lg:py-0 xl:py-0"
              src={line}
              alt="line"
            />
            <p className="text-[25px] font-custom1 md:text-[25px] lg:text-[35px] xl:text-[40px]">
              Let’s <span className="text-[#FF9000]">Create...</span>
            </p>
            <p className="text-[16px] md:text-[15px] lg:text-[18px] xl:text-[20px] xl:w-[340px] text-[#8B8B8B]">
              Get in touch today to discuss your project and discover how we can
              help you!
            </p>
            <p className="md:text-[15px] lg:text-[19px] xl:text-[22px]">
              jayswarankar07@gmail.com
            </p>
          </div>
        </div>

        <div className="form font-custom1 w-full md:w-1/2 lg:flex lg-w-1/2 lg:px-8 lg:py-10 xl:flex xl:w-1/2 xl:px-16 xl:py-10">
          <form
            className="flex flex-col px-6 text-white"
            onSubmit={handleSubmit}
          >
            <input
              className="p-2 w-full md:w-full lg:w-[410px] xl:w-[410px] h-[45px] md:p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
            />
            <br />
            <input
              className="p-2 w-full md:w-full lg:w-[410px] xl:w-[410px] h-[45px] md:p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100"
              type="text"
              id="contact"
              name="contact"
              placeholder="Contact"
            />
            <br />
            <input
              className="p-2 w-full md:w-full lg:w-[410px] xl:w-[410px] h-[45px] md:p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
            />
            <br />
            <textarea
              className="p-2 w-full md:w-full lg:w-[410px] xl:w-[410px] h-[100px] mb-6 md:p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100 resize-none"
              id="message"
              name="message"
              placeholder="Message"
            ></textarea>
            <button className="my-8 p-2 w-full md:w-auto lg:w-auto xl:w-auto h-[35px] m-0 bg-[#303030] text-[#A4A4A4] hover:bg-gray-800">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
