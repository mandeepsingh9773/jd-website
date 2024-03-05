import React from "react";

const Header = () => {
  return (
    <div className="header-main font-custom1 bg-black flex justify-center items-center md:justify-between  md:w-auto md:px-12 md:pt-6">
      <div className="md:p-6">
        <p className=" md:text-4xl md:pl-0 md:text-left text-white ">
          <span className="text-[#FF9000]">Velar</span> <br />
          Designing Studios{" "}
        </p>
      </div>
      <div className="md:p-6">
        <button className="md:text-2xl md:pl-4 md:pb-6 text-white tracking-wide hover:text-[#FF9000]">Let's Create...</button>
      </div>
    </div>
  );
};

export default Header;
