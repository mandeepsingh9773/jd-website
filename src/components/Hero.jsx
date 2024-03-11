// import React from "react";

// const Hero = () => {
//   return (
//     <div className="bg-black flex flex-col items-start gap-y-20 pl-6 pt-20 md:flex md:justify-center md:items-center md:pt-36 md:pb-44 md:px-[12rem] md:h-98">
//       <p className="font-custom2 text-white w-[95%] tracking-[0.1rem] text-left text-[45px] mb-2 md:w-[100%] md:text-[62px] md:leading-normal md:tracking-normal md:text-center">
//         We help <span className="text-[#FF9000]">brands</span> and{" "}
//         <span className="text-[#FF9000]">agencies</span> with meaningful and{" "}
//         <span className="text-[#FF9000]">meticulously visual experiences.</span>
//       </p>
//       <button className="md:hidden inline-block text-xl border border-white px-[1.5rem] py-[0.4rem] mb-14 rounded-full md:text-2xl md:pl-4 md:pb-6 text-white tracking-wide hover:text-[#FF9000]">
//         Let's Create...
//       </button>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <div className="bg-black flex flex-col items-start gap-y-20 pl-6 pt-20 md:flex md:justify-center md:items-center md:pt-36 md:pb-44 md:px-[12rem] md:h-98">
      <motion.p
        className="font-custom2 text-white w-[95%] tracking-[0.1rem] text-left text-[45px] mb-2 md:w-[100%] md:text-[62px] md:leading-normal md:tracking-normal md:text-center"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        We help <span className="text-[#FF9000]">brands</span> and{" "}
        <span className="text-[#FF9000]">agencies</span> with meaningful and{" "}
        <span className="text-[#FF9000]">meticulously visual experiences.</span>
      </motion.p>
      <motion.button
        className="md:hidden inline-block text-xl border border-white px-[1.5rem] py-[0.4rem] mb-14 rounded-full md:text-2xl md:pl-4 md:pb-6 text-white tracking-wide hover:text-[#FF9000]"
        initial="hidden"
        animate="visible"
        variants={textVariants }
      >
        Let's Create...
      </motion.button>
    </div>
  );
};

export default Hero;
