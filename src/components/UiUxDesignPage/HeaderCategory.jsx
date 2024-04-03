import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeaderCategory = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.2 },
    },
  };
  return (
    <div className="header-main text-[20px] font-custom1 bg-black flex justify-center md:flex md:items-center md:justify-between md:w-auto md:px-12 md:pt-6">
      <div className="p-6 md:p-6">
        <Link to="/">
          <motion.p
            className="text-[1.3rem] md:text-2xl md:pl-0 md:text-left text-white lg:text-3xl"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <span className="text-[#FF9000]">Velar </span> Designing Studios{" "}
          </motion.p>
        </Link>
      </div>
      <div className="hidden md:inline-block md:p-6 ">
        <motion.button
          className="md:text-2x md:pl-4 text-white tracking-wide hover:text-[#FF9000] lg:text-3xl"
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          variants={textVariants}
          onClick={scrollToContact}
        >
          Let's Create...
        </motion.button>
      </div>
    </div>
  );
};

export default HeaderCategory;
