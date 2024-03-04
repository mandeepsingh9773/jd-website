import React from "react";
import insta from "../images/insta.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import line from "../images/Line 2.png";
import unsplash from "../images/unsplash_2.png"

const Contact = () => {
  return (
    <div
      className="flex bg-black text-white justify-between py-12"
    >
      <div className="logos w-1/4 flex flex-col gap-8 justify-center items-end pr-14 pb-[13rem]">
        <img className="w-[35px]" src={youtube} alt="instagram" />
        <img className="w-[35px]" src={insta} alt="instagram" />
        <img className="w-[35px]" src={twitter} alt="instagram" />
      </div>
      <div className="email w-1/4 text-left flex flex-col px-4 py-10 gap-4">
        <img src={line} alt="line" />
        <p className="text-[45px] font-custom1">
          Let’s <span className="text-[#FF9000]">Create...</span>
        </p>
        <p className="text-[20px] w-[340px] text-[#8B8B8B]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <p className="text-[22px]">jayswarankar07@gmail.com</p>
      </div>
      <div className="form w-1/2 flex relative px-16 py-10 font-custom1">
        <form className="flex flex-col text-white">
          <input
            className="h-[45px] w-[410px] p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
          <br />
          <input
            className="h-[45px] w-[410px] p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100"
            type="text"
            id="contact"
            name="contact"
            placeholder="Contact"
          />
          <br />
          <input
            className="h-[45px]  w-[410px] p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
          />
          <br />
          <textarea
            className="h-[100px] w-[410px] mb-6 p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100 resize-none"
            id="message"
            name="message"
            placeholder="Message"
          ></textarea>
          <button className="p-1 h-[35px] w-[410px] bg-[#303030] text-[#A4A4A4] hover:bg-gray-800">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
