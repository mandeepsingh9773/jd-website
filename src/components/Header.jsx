import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.2 },
    },
  };
  return (
    <div className="header-main text-[20px] font-custom1 bg-black md:flex md:items-center md:justify-between md:w-auto md:px-12 md:pt-6">
      <div className="p-6 md:p-6">
        <motion.p
          className="text-[1.3rem] md:text-4xl md:pl-0 md:text-left text-white"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <span className="text-[#FF9000]">Velar </span>{" "}
          <br className="hidden md:inline-block" />
          Designing Studios{" "}
        </motion.p>
      </div>
      <div className="hidden md:inline-block md:p-6">
        <motion.button
          className="md:text-[30px] md:pl-4 md:pb-6 text-white tracking-wide hover:text-[#FF9000]"
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.2 }}
          variants={textVariants}
          
        >
          Let's Create...
        </motion.button>
      </div>
    </div>
  );
};

export default Header;
