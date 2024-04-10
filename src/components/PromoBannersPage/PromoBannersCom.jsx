import React from "react";
import TopImage from "../../images/Promo Banners/TOp.jpg";
import PROMO_1 from "../../images/Promo Banners/i1.jpg";
import PROMO_2 from "../../images/Promo Banners/i2.jpg";
import PROMO_3 from "../../images/Promo Banners/i3.jpg";
import PROMO_4 from "../../images/Promo Banners/i4.jpg";
import PROMO_5 from "../../images/Promo Banners/i5.jpg";
import PROMO_6 from "../../images/Promo Banners/i6.jpg";


const PromoBannersCom = () => {
  return (
    <div className="main bg-black md:flex md:justify-center md:items-center md:flex-col">
      <div className="cover-photo bg-black md:px-0 lg:px-24 lg:py-20 xl:px-28 xl:py-12">
        <img alt="coverimage" src={TopImage} />
      </div>
      <div className="about bg-black w-full flex flex-col justify-center items-center xl:flex xl:flex-row xl:px-28 xl:py-12">
      </div>
      <div className="photos bg-black columns-1 py-8 px-4 md:columns-1 lg:columns-2 space-y-6 gap-6 md:py-12">
        <img alt="SampleImage" src={PROMO_1} className="md:h-[450px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={PROMO_6} className="md:h-[550px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={PROMO_5} className="md:h-[450px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={PROMO_2} className="md:h-[450px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={PROMO_4} className="md:h-[450px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={PROMO_3} className="md:h-[550px] md:w-[450px] object-cover"/>
      </div>
    </div>
  );
};


export default PromoBannersCom;
