import React from "react";
import TopImage from "../../images/Art & Decor/TOp.jpg";
import AD_1 from "../../images/Art & Decor/i1.jpg";
import AD_2 from "../../images/Art & Decor/i2.jpg";
import AD_3 from "../../images/Art & Decor/i3.jpg";
import AD_4 from "../../images/Art & Decor/i4.jpg";
import AD_5 from "../../images/Art & Decor/i5.jpg";
import AD_6 from "../../images/Art & Decor/i6.jpg";


const ArtDecorCom = () => {
  return (
    <div className="main bg-black md:flex md:justify-center md:items-center md:flex-col">
      <div className="cover-photo bg-black md:px-0 lg:px-24 lg:py-20 xl:px-28 xl:py-12">
        <img alt="coverimage" src={TopImage} />
      </div>
      <div className="photos bg-black columns-1 py-8 px-4 md:columns-1 lg:columns-2 space-y-6 gap-6 md:py-12">
        <img alt="SampleImage" src={AD_1} className="md:h-[450px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={AD_6} className="md:h-[550px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={AD_5} className="md:h-[450px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={AD_2} className="md:h-[450px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={AD_4} className="md:h-[450px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={AD_3} className="md:h-[550px] md:w-[450px] object-cover"/>
      </div>
    </div>
  );
};


export default ArtDecorCom;
