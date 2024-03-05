import React from "react";

const Header = () => {
  return (
    <div className="header-main text-[20px] font-custom1 bg-black md:flex md:items-center md:justify-between md:w-auto md:px-12 md:pt-6">
      <div className="p-6 md:p-6">
        <p className="text-[1.3rem] md:text-4xl md:pl-0 md:text-left text-white">
          <span className="text-[#FF9000]">Velar </span> <br className="hidden md:inline-block" />
          Designing Studios{" "}
        </p>
      </div>
      <div className="hidden md:inline-block md:p-6">
        <button className="md:text-2xl md:pl-4 md:pb-6 text-white tracking-wide hover:text-[#FF9000]">
          Let's Create...
        </button>
      </div>
    </div>
  );
};

export default Header;
