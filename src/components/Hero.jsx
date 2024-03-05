import React from "react";

const Hero = () => {
  return (
    <div className="bg-black flex flex-col items-start gap-y-20 pl-6 pt-20 md:pt-36 md:pb-44 md:px-20 font-custom2 md:h-98">
      <p className="w-[85%] tracking-[0.1rem] text-left text-[45px] mb-2 md:w-[80%] font-custom2 md:text-[62px] text-white leading-normal md:tracking-normal">
        We help <span className="text-[#FF9000]">brands</span> and <span className="text-[#FF9000]">agencies</span> with meaningful
        and <span className="text-[#FF9000]">meticulously visual experiences.</span>
      </p>
      <button className="text-xl border border-white px-[1.5rem] py-[0.4rem] rounded-full md:text-2xl md:pl-4 md:pb-6 text-white tracking-wide hover:text-[#FF9000]">
          Let's Create...
      </button>
    </div>
  );
};

export default Hero;
