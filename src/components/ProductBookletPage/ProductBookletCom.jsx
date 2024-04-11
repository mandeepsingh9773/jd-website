import React from "react";
import PageFlip from "react-pageflip";
import PDF_1 from "../../images/Product Booklet/PDF_Images/i1.jpg";
import PDF_2 from "../../images/Product Booklet/PDF_Images/i2.jpg";
import PDF_3 from "../../images/Product Booklet/PDF_Images/i3.jpg";
import PDF_4 from "../../images/Product Booklet/PDF_Images/i4.jpg";
import PDF_5 from "../../images/Product Booklet/PDF_Images/i5.jpg";
import PDF_6 from "../../images/Product Booklet/PDF_Images/i6.jpg";
import PDF_7 from "../../images/Product Booklet/PDF_Images/i7.jpg";
import PDF_8 from "../../images/Product Booklet/PDF_Images/i8.jpg";
import PDF_9 from "../../images/Product Booklet/PDF_Images/i9.jpg";
import PDF_10 from "../../images/Product Booklet/PDF_Images/i10.jpg";
import PDF_11 from "../../images/Product Booklet/PDF_Images/i11.jpg";
import PDF_12 from "../../images/Product Booklet/PDF_Images/i12.jpg";
import PDF_13 from "../../images/Product Booklet/PDF_Images/i13.jpg";
import PDF_14 from "../../images/Product Booklet/PDF_Images/i14.jpg";
import PDF_15 from "../../images/Product Booklet/PDF_Images/i15.jpg";
import PDF_16 from "../../images/Product Booklet/PDF_Images/i16.jpg";
import PDF_17 from "../../images/Product Booklet/PDF_Images/i17.jpg";
import PDF_18 from "../../images/Product Booklet/PDF_Images/i18.jpg";
import PDF_19 from "../../images/Product Booklet/PDF_Images/i19.jpg";
import PDF_20 from "../../images/Product Booklet/PDF_Images/i20.jpg";
import PDF_21 from "../../images/Product Booklet/PDF_Images/i21.jpg";
import PB_1 from "../../images/Product Booklet/i1.jpg";
import PB_2 from "../../images/Product Booklet/i2.jpg";
import PB_3 from "../../images/Product Booklet/i3.jpg";
import PB_4 from "../../images/Product Booklet/i4.jpg";
import PB_5 from "../../images/Product Booklet/i5.jpg";
import PB_6 from "../../images/Product Booklet/i6.jpg";

const ProductBookletCom = () => {
  return (
    <div className="main bg-black md:flex md:justify-center md:items-center md:flex-col">
      <div className="booklet-area bg-black flex justify-center md:px-0 lg:px-24 lg:py-20 xl:px-20">
        <PageFlip
          className="md:pt-0 md:h-[600] md:w-[400]"
          width={300}
          height={500}
        >
          <div className="Page1">
            <img alt="SampleImage" src={PDF_1} />
          </div>
          <div className="Page2">
            <img alt="SampleImage" src={PDF_2} />
          </div>

          <div className="Page3">
            {" "}
            <img alt="SampleImage" src={PDF_3} />
          </div>
          <div className="Page4">
            {" "}
            <img alt="SampleImage" src={PDF_4} />
          </div>
          <div className="Page5">
            {" "}
            <img alt="SampleImage" src={PDF_5} />
          </div>
          <div className="Page6">
            {" "}
            <img alt="SampleImage" src={PDF_6} />
          </div>
          <div className="Page7">
            {" "}
            <img alt="SampleImage" src={PDF_7} />
          </div>
          <div className="Page8">
            {" "}
            <img alt="SampleImage" src={PDF_8} />
          </div>
          <div className="Page9">
            {" "}
            <img alt="SampleImage" src={PDF_9} />
          </div>
          <div className="Page10">
            {" "}
            <img alt="SampleImage" src={PDF_10} />
          </div>
          <div className="Page11">
            {" "}
            <img alt="SampleImage" src={PDF_11} />
          </div>
          <div className="Page12">
            {" "}
            <img alt="SampleImage" src={PDF_12} />
          </div>
          <div className="Page13">
            {" "}
            <img alt="SampleImage" src={PDF_13} />
          </div>
          <div className="Page14">
            {" "}
            <img alt="SampleImage" src={PDF_14} />
          </div>
          <div className="Page15">
            {" "}
            <img alt="SampleImage" src={PDF_15} />
          </div>
          <div className="Page16">
            {" "}
            <img alt="SampleImage" src={PDF_16} />
          </div>
          <div className="Page17">
            {" "}
            <img alt="SampleImage" src={PDF_17} />
          </div>
          <div className="Page18">
            {" "}
            <img alt="SampleImage" src={PDF_18} />
          </div>
          <div className="Page19">
            {" "}
            <img alt="SampleImage" src={PDF_19} />
          </div>
          <div className="Page20">
            {" "}
            <img alt="SampleImage" src={PDF_20} />
          </div>
          <div className="Page21">
            {" "}
            <img alt="SampleImage" src={PDF_21} />
          </div>
        </PageFlip>
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
