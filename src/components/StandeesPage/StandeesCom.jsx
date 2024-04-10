import React from "react";
import TopImage from "../../images/Standee/TOp.jpg";
import SP_1 from "../../images/Standee/i1.jpg";
import SP_2 from "../../images/Standee/i2.jpg";
import SP_3 from "../../images/Standee/i3.jpg";
import SP_4 from "../../images/Standee/i4.jpg";
import SP_5 from "../../images/Standee/i5.jpg";
import SP_6 from "../../images/Standee/i6.jpg";


const StandeesCom = () => {
  return (
    <div className="main bg-black md:flex md:justify-center md:items-center md:flex-col">
      <div className="cover-photo bg-black md:px-0 lg:px-24 lg:py-20 xl:px-28 xl:py-12">
        <img alt="coverimage" src={TopImage} />
      </div>
      <div className="photos bg-black columns-1 py-8 px-4 md:columns-1 lg:columns-2 space-y-6 gap-6 md:py-12">
        <img alt="SampleImage" src={SP_1} className="md:h-[450px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={SP_6} className="md:h-[550px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={SP_5} className="md:h-[450px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={SP_2} className="md:h-[450px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={SP_4} className="md:h-[450px] md:w-[450px] object-cover"/>
        <img alt="SampleImage" src={SP_3} className="md:h-[550px] md:w-[450px] object-cover"/>
      </div>
    </div>
  );
};


export default StandeesCom;
