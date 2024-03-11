import React from "react";
import "./CategorySection.css"
import Category_5 from "../images/category_5.png"
import Category_1 from "../images/category_1.png"
import Category_2 from "../images/category_2.png"
import Category_3 from "../images/category_3.png"
import Category_4 from "../images/category_4.png"

const CategorySection = () => {
  return (
    <div className="main bg-black md:p-6">
      <div className="category flex flex-row gap-6 pt-12 px-4 justify-center md:justify-start md:px-24">
        <button className="bg-black text-white md:text-[24px] hover:text-[#FF9000]">
          View All
        </button>
        <button className="bg-black text-white md:text-[24px] hover:text-[#FF9000]">
          Branding
        </button>
        <button className="bg-black text-white md:text-[24px] hover:text-[#FF9000]">
          Digital Media
        </button>
        <button className="bg-black text-white md:text-[24px] hover:text-[#FF9000]">
          Graphics{" "}
        </button>
      </div>
      <div className="cards flex flex-col gap-10 py-8 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 xl:gap-8 md:px-24 md:py-12">
        <div className="image_card1 flex flex-col md:h-[95%] md:w-[auto] lg:w-auto lg:h-[95%] xl:w-[290px]">
          <img
            className="w-full h-[200px] object-cover md:h-[410px] md:w-[290px] md:object-cover grayscale hover:grayscale-0 overflow-hidden"
            src={Category_5}
            alt="category"
          />
          <p className=" text-white pt-2 md:text-[25px] md:text-left md:pt-2 ">
            Education Institute
          </p>
          <p className=" text-[#8B8B8B] md:text-[20px] md:text-left">
            Branding, Logo
          </p>
        </div>
        <div className="image_card2 flex flex-col md:h-[95%] md:w-[auto] lg:w-auto lg:h-[95%] xl:w-[290px]">
          <img
            className="w-full h-[200px] object-cover md:h-[410px] md:w-[290px] md:object-cover grayscale hover:grayscale-0"
            src={Category_2}
            alt="category"
          />
          <p className="text-white pt-2 md:text-[25px] md:text-left md:pt-2">
            Backdrops
          </p>
          <p className="text-[#8B8B8B] md:text-[20px] md:text-left">
            Branding, Banners
          </p>
        </div>
        <div className="image_card3 flex flex-col md:h-[95%] md:w-[auto] lg:w-auto lg:h-[95%] xl:w-[290px]">
          <img
            className="w-full h-[200px] object-cover md:h-[410px] md:w-[290px] md:object-cover grayscale hover:grayscale-0"
            src={Category_4}
            alt="category"
          />
          <p className="text-white pt-2 md:text-[25px] md:text-left md:pt-2">
            Product Booklet
          </p>
          <p className="text-[#8B8B8B] md:text-[20px] md:text-left">
            Product Showcase
          </p>
        </div>
        <div className="image_card4 flex flex-col md:h-[95%] md:w-[auto] lg:w-auto lg:h-[95%] xl:w-[290px]">
          <img
            className="w-full h-[200px] object-cover md:h-[410px] md:w-[290px] md:object-cover grayscale hover:grayscale-0"
            src={Category_3}
            alt="category"
          />
          <p className="text-white pt-2 md:text-[25px] md:text-left md:pt-2">
            Corporate
          </p>
          <p className="text-[#8B8B8B] md:text-[20px] md:text-left ">
            Cinematography
          </p>
        </div>
        <div className="image_card5 flex flex-col md:h-[95%] md:w-[auto] lg:w-auto lg:h-[95%] xl:w-[290px]">
          <img
            className="w-full h-[200px] object-cover md:h-[410px] md:w-[290px] md:object-cover grayscale hover:grayscale-0"
            src={Category_1}
            alt="category"
          />
          <p className="text-white pt-2 md:text-[25px] md:text-left md:pt-2">
            Custom Frames
          </p>
          <p className="text-[#8B8B8B] md:text-[20px] md:text-left">
            Home Decor, Frames
          </p>
        </div>
        <div className="image_card6 flex flex-col md:h-[95%] md:w-[auto] lg:w-auto lg:h-[95%] xl:w-[290px]">
          <img
            className="w-full h-[200px] object-cover md:h-[410px] md:w-[290px] md:object-cover grayscale hover:grayscale-0 "
            src={Category_2}
            alt="category"
          />
          <p className="text-white pt-2 md:text-[25px] md:text-left md:pt-2">
            Backdrops
          </p>
          <p className="text-[#8B8B8B] md:text-[20px] md:text-left">
            Branding, Banners
          </p>
        </div>
        <div className="image_card7 flex flex-col md:h-[95%] md:w-[auto] lg:w-auto lg:h-[95%] xl:w-[290px]">
          <img
            className="w-full h-[200px] object-cover md:h-[410px] md:w-[290px] md:object-cover grayscale hover:grayscale-0"
            src={Category_4}
            alt="category"
          />
          <p className="text-white pt-2 md:text-[25px] md:text-left md:pt-2">
            Product Booklet
          </p>
          <p className="text-[#8B8B8B] md:text-[20px] md:text-left">
            Product Showcase
          </p>
        </div>
        <div className="image_card8 flex flex-col md:h-[95%] md:w-[auto] lg:w-auto lg:h-[95%] xl:w-[290px] ">
          <img
            className="w-full h-[200px] object-cover md:h-[410px] md:w-[290px] md:object-cover grayscale hover:grayscale-0"
            src={Category_3}
            alt="category"
          />
          <p className="text-white pt-2 md:text-[25px] md:text-left md:pt-2">
            Corporate
          </p>
          <p className="text-[#8B8B8B] md:text-[20px] md:text-left ">
            Cinematography
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
