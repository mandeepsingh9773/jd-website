import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Web_1 from "../../images/Category Images/w1.jpg";
import Web_2 from "../../images/Category Images/w2.jpg";
import Web_3 from "../../images/Category Images/w3.jpg";
import Web_4 from "../../images/Category Images/w4.jpg";
import Web_5 from "../../images/Category Images/w5.jpg";
import Web_6 from "../../images/Category Images/w6.jpg";
import Web_7 from "../../images/Category Images/w7.jpg";
import Web_8 from "../../images/Category Images/w8.jpg";
import Phone_1 from "../../images/Category Images/m1.jpg";
import Phone_2 from "../../images/Category Images/m2.jpg";
import Phone_3 from "../../images/Category Images/m3.jpg";
import Phone_4 from "../../images/Category Images/m4.jpg";
import Phone_5 from "../../images/Category Images/m5.jpg";
import Phone_6 from "../../images/Category Images/m6.jpg";
import Phone_7 from "../../images/Category Images/m7.jpg";
import Phone_8 from "../../images/Category Images/m8.jpg";

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    { name: "All" },
    { name: "Branding" },
    { name: "UI/UX" },
    { name: "Cinematography" },
    { name: "Decor" },
  ];

  const cards = [
    {
      category: "Branding",
      image: isMobile ? Phone_1 : Web_1,
      title: "Logo",
      description: "Branding, Logo",
      id: "Branding",
    },
    {
      category: "UIUX",
      image: isMobile ? Phone_2 : Web_2,
      title: "UI/UX Design",
      description: "UI/UX, Web Design",
      id: "UI/UX",
    },
    {
      category: "Promo Banners",
      image: isMobile ? Phone_3 : Web_3,
      title: "Promo Banners",
      description: "Branding, Banners",
      id: "Branding",
    },
    {
      category: "Business Branding",
      image: isMobile ? Phone_4 : Web_4,
      title: "Business Branding",
      description: "Card, Letterhead",
      id: "Branding",
    },
    {
      category: "cinematography",
      image: isMobile ? Phone_5 : Web_5,
      title: "Corporate Promo",
      description: "Cinematography, Script",
      id: "Cinematography",
    },
    {
      category: "Art & Decor",
      image: isMobile ? Phone_6 : Web_6,
      title: "Art & Decor",
      description: "Frames, Artwork",
      id: "Decor",
    },
    {
      category: "Standees",
      image: isMobile ? Phone_7 : Web_7,
      title: "Standees",
      description: "Branding, Showcase",
      id: "Branding",
    },
    {
      category: "Product Booklet",
      image: isMobile ? Phone_8 : Web_8,
      title: "Product Booklet",
      description: "Product Showcase",
      id: "Branding",
    },
  ];

  const filteredCards =
    selectedCategory === "All"
      ? cards
      : cards.filter((card) => card.id === selectedCategory);

  return (
    <div id="category" className="main bg-black md:p-6">
      <div className="category-buttons hidden md:flex md:flex-row md:gap-8 md:pt-12 md:justify-start md:px-24">
        {categories.map((category) => (
          <motion.button
            key={category.name}
            className="bg-black text-white md:text-[24px] hover:text-[#FF9000]"
            style={{
              color: selectedCategory === category.name ? "#FF9000" : "white",
            }}
            initial="hidden"
            animate="visible"
            whileTap={{ scale: 0.8 }}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </motion.button>
        ))}
      </div>
      <div className="cards font-custom3 flex flex-col gap-10 py-8 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 xl:gap-8 md:px-24 md:py-12">
        {filteredCards.map((card, index) => (
          <Link
            key={index}
            to={`/${card.category.toLowerCase().replace(/\s+/g, "")}`}
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <motion.div
              className="image_card1 font-custom3 flex flex-col md:h-[95%] md:w-[auto] lg:w-auto lg:h-[95%] xl:w-[290px] hover:cursor-pointer"
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              <img
                className="w-full h-[200px] object-cover md:h-[410px] md:w-[290px] md:object-cover grayscale hover:grayscale-0 overflow-hidden"
                src={card.image}
                alt="category"
              />
              <p className="font-custom3 text-white pt-2 text-center md:text-[25px] md:text-left md:pt-2 ">
                {card.title}
              </p>
              <p className="font-custom3 text-[#8B8B8B] text-center md:text-[20px] md:text-left">
                {card.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
