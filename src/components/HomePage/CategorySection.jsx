import React, { useState } from "react";
import { motion } from "framer-motion";
import Category_5 from "../../images/category_5.png";
import Category_1 from "../../images/category_1.png";
import Category_2 from "../../images/category_2.png";
import Category_3 from "../../images/category_3.png";
import Category_4 from "../../images/category_4.png";
import { Link } from "react-router-dom";

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
      image: Category_5,
      title: "Logo",
      description: "Branding, Logo",
      id: "Branding",
    },
    {
      category: "UIUX",
      image: Category_2,
      title: "UI/UX Design",
      description: "UI/UX, Web Design",
      id: "UI/UX",
    },
    {
      category: "Promo Banners",
      image: Category_4,
      title: "Promo Banners",
      description: "Branding, Banners",
      id: "Branding",
    },
    {
      category: "Business Branding",
      image: Category_3,
      title: "Business Branding",
      description: "Card, Letterhead",
      id: "Branding",
    },
    {
      category: "cinematography",
      image: Category_3,
      title: "Corporate Promo",
      description: "Cinematography, Script",
      id: "Cinematography",
    },
    {
      category: "Art & Decor",
      image: Category_1,
      title: "Art & Decor",
      description: "Frames, Artwork",
      id: "Decor",
    },
    {
      category: "Standees",
      image: Category_2,
      title: "Standees",
      description: "Branding, Showcase",
      id: "Branding",
    },
    {
      category: "Product Booklet",
      image: Category_4,
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
            style={{ color: selectedCategory === category.name ? '#FF9000' : 'white' }}
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
