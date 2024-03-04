import React from "react";

const Header = () => {
  return (
    <div className="header-main w-auto font-custom1 flex items-center justify-between bg-black px-12 pt-6">
      <div className="p-6">
        <p className="text-4xl pl-0 text-white text-left">
          <span className="text-[#FF9000]">Velar</span> <br />
          Designing Studios{" "}
        </p>
      </div>
      <div className="p-6">
        <button className="text-2xl pl-4 pb-6 text-white tracking-wide hover:text-[#FF9000]">Let's Create...</button>
      </div>
    </div>
  );
};

export default Header;
