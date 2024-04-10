import React from "react";
import TopImage from "../../images/Business Branding/TOp.jpg";
import BP_1 from "../../images/Business Branding/i1.jpg";
import BP_2 from "../../images/Business Branding/i2.jpg";
import BP_3 from "../../images/Business Branding/i3.jpg";
import BP_4 from "../../images/Business Branding/i4.jpg";
import BP_5 from "../../images/Business Branding/i5.jpg";
import BP_6 from "../../images/Business Branding/i6.jpg";


const BusinessBrandingCom = () => {
  return (
    <div className="main bg-black md:flex md:justify-center md:items-center md:flex-col">
      <div className="cover-photo bg-black md:px-0 lg:px-24 lg:py-20 xl:px-28 xl:py-12">
        <img alt="coverimage" src={TopImage} />
      </div>
      <div className="photos bg-black columns-1 py-8 px-4 md:columns-1 lg:columns-2 space-y-6 gap-6 md:py-12">
        <img alt="SampleImage" src={BP_1} className="md:h-[450px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={BP_6} className="md:h-[550px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={BP_5} className="md:h-[450px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={BP_2} className="md:h-[450px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={BP_4} className="md:h-[450px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={BP_3} className="md:h-[550px] md:w-[450px] object-cover"/>
      </div>
    </div>
  );
};


export default BusinessBrandingCom;
