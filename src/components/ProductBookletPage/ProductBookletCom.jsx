import React from "react";
import Book from "../../images/Product Booklet/JewlleryBooklet1.pdf";
import PB_1 from "../../images/Product Booklet/i1.jpg";
import PB_2 from "../../images/Product Booklet/i2.jpg";
import PB_3 from "../../images/Product Booklet/i3.jpg";
import PB_4 from "../../images/Product Booklet/i4.jpg";
import PB_5 from "../../images/Product Booklet/i5.jpg";
import PB_6 from "../../images/Product Booklet/i6.jpg";

const ProductBookletCom = () => {
  return (
    <div className="main bg-black md:flex md:justify-center md:items-center md:flex-col">
      <div className="pdf-area bg-black md:px-0 lg:px-24 lg:py-20 xl:px-28 xl:py-12">
        <embed
          className="h-[500px] w-[1000px]"
          src={Book}
          width="100%"
          height="600px"
        />
      </div>
      <div className="about bg-black w-full flex flex-col justify-center items-center xl:flex xl:flex-row xl:px-28 xl:py-12">
        <div className="category md:py-8 lg:py-0 lg:pb-20 xl:pr-12 xl:pb-40">
          <div className="md:h-[200px] md:w-[450px] flex flex-col shadow-2xl py-10 md:py-0">
            <div className="bg-black text-[30px] md:text-[38px] text-white py-4 px-6 flex-1 rounded-t-lg">
              Udai Lal Bagrecha and Sons
            </div>
            <div className="text-[22px] md:text-[20px] bg-[#141414] text-white py-4 px-6 flex-1 rounded-b-lg">
              Project Type <br />
              <span className="text-[#FFFFFF8C]">Digital Product Booklet</span>
            </div>
          </div>
        </div>
        <div className="desc bg-black space-y-8 px-4 md:px-16 lg:px-24 xl:pl-4">
          <p className="text-[#8B8B8B] text-[20px] text-justify">
            In creating the booklet for Udai Lal Bagrecha and Sons, a jewelry
            showroom, focus was placed on showcasing their exquisite jewelry.
            Images spotlight the detailed craftsmanship of each piece, centrally
            positioned to captivate viewers.{" "}
          </p>
          <p className="text-[#8B8B8B] text-[20px] text-justify">
            A classic serif font was selected for its elegance and ease of
            reading, mirroring the sophistication of the jewelry. The color
            palette of Barossa Deep Pink with white and gold was chosen to
            complement the jewelry's luster, setting a luxurious backdrop. This
            booklet harmoniously marries tradition with contemporary design,
            reflecting the showroom's rich heritage and forward-looking ethos in
            a concise, visually appealing format.
          </p>
        </div>
      </div>
      <div className="photos bg-black columns-1 py-8 px-4 md:columns-1 lg:columns-2 space-y-6 gap-6 md:py-12">
        <img
          alt="SampleImage"
          src={PB_1}
          className="md:h-[450px] md:w-[450px] object-cover"
        />
        <img
          alt="SampleImage"
          src={PB_6}
          className="md:h-[550px] md:w-[450px] object-cover"
        />
        <img
          alt="SampleImage"
          src={PB_5}
          className="md:h-[450px] md:w-[450px] object-cover"
        />
        <img
          alt="SampleImage"
          src={PB_2}
          className="md:h-[450px] md:w-[450px] object-cover"
        />
        <img
          alt="SampleImage"
          src={PB_4}
          className="md:h-[450px] md:w-[450px] object-cover"
        />
        <img
          alt="SampleImage"
          src={PB_3}
          className="md:h-[550px] md:w-[450px] object-cover"
        />
      </div>
    </div>
  );
};

export default ProductBookletCom;
