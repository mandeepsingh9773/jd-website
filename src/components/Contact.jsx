import React from "react";
import insta from "../images/insta.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import line from "../images/Line 2.png";

const Contact = () => {
  return (
    <div
      className="flex bg-black text-white justify-between md:py-12"
    >
      <div className="logos md:w-1/4 flex flex-col gap-8 justify-center items-end md:pr-14 md:pb-[13rem]">
        <img className="md:w-[35px]" src={youtube} alt="instagram" />
        <img className="md:w-[35px]" src={insta} alt="instagram" />
        <img className="md:w-[35px]" src={twitter} alt="instagram" />
      </div>
      <div className="email md:w-1/4 text-left flex flex-col md:px-4 md:py-10 md:gap-4">
        <img src={line} alt="line" />
        <p className="md:text-[45px] font-custom1">
          Let’s <span className="text-[#FF9000]">Create...</span>
        </p>
        <p className="md:text-[20px] md:w-[340px] text-[#8B8B8B]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <p className="md:text-[22px]">jayswarankar07@gmail.com</p>
      </div>
      <div className="form md:w-1/2 flex relative md:px-16 md:py-10 font-custom1">
        <form className="flex flex-col text-white">
          <input
            className="md:h-[45px] md:w-[410px] md:p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
          <br />
          <input
            className="md:h-[45px] md:w-[410px] md:p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100"
            type="text"
            id="contact"
            name="contact"
            placeholder="Contact"
          />
          <br />
          <input
            className="md:h-[45px] md:w-[410px] md:p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
          />
          <br />
          <textarea
            className="md:h-[100px] md:w-[410px] md:mb-6 md:p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100 resize-none"
            id="message"
            name="message"
            placeholder="Message"
          ></textarea>
          <button className="md:p-1 md:h-[35px] md:w-[410px] bg-[#303030] text-[#A4A4A4] hover:bg-gray-800">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
