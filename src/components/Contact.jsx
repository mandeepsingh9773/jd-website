import React from "react";
import insta from "../images/insta.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import line from "../images/Line 2.png";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="bg-black text-white space-y- flex flex-col md:flex md:flex-row md:py-8 lg:flex lg:flex-row lg:justify-between lg:py-12 xl:flex xl:flex-row xl:justify-between xl:py-14">
      <div className="logos flex flex-row justify-center items-center space-x-12 md:flex md:flex-col md:gap-8 md:justify-center md:items-end md:mt-0 md:pr-10 md:pb-[12rem] md:w-1/4 lg:flex lg:flex-col lg:gap-8 lg:justify-center lg:items-end lg:mt-4 lg:pr-14 lg:pb-[13rem] lg:w-1/4 xl:flex xl:flex-col xl:gap-8 xl:justify-center xl:items-end xl:mt-4 xl:pr-14 xl:pb-[13rem] xl:w-1/4">
        <img
          className="pt-6 md:p-0 md:w-[30px] lg:w-[33px] xl:w-[33px]"
          src={youtube}
          alt="youtube"
        />
        <img
          className="pt-6 md:p-0 md:w-[30px] lg:w-[33px] xl:w-[33px]"
          src={insta}
          alt="instagram"
        />
        <img
          className="pt-6 md:p-0 md:w-[30px] lg:w-[33px] xl:w-[33px]"
          src={twitter}
          alt="twitter"
        />
      </div>

      <div className="email flex flex-col px-6 py-5 space-y-4 text-left md:w-1/4 md:p-0 lg:w-1/4 lg:px-4 lg:py-10 lg:gap-4">
        <img className="" src={line} alt="line" />
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
      <div className="form font-custom1 md:flex md:w-1/2 lg:flex lg-w-auto lg:px-16 lg:py-10 xl:flex xl:w-1/2 xl:px-16 xl:py-10">
        <form
          className="flex flex-col px-6 text-white"
          onSubmit={handleSubmit}
        >
          <input
            className="p-2 md:w-full lg:w-[410px] md:h-[45px] md:p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
          <br />
          <input
            className="p-2 md:w-full lg:w-[410px] md:h-[45px] md:p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100"
            type="text"
            id="contact"
            name="contact"
            placeholder="Contact"
          />
          <br />
          <input
            className="p-2 md:w-full lg:w-[410px] md:h-[45px] md:p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
          />
          <br />
          <textarea
            className="p-2 md:w-auto lg:w-[410px] md:h-[100px] md:mb-6 md:p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100 resize-none"
            id="message"
            name="message"
            placeholder="Message"
          ></textarea>
          <button className="my-8 p-2 sm:w-full md:w-full lg:w-auto md:p-1 md:h-[35px] md:m-0 bg-[#303030] text-[#A4A4A4] hover:bg-gray-800">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
