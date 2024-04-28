import React from 'react';
import TopImage from "../../images/Dealer App UI/TOp.jpg";
import AppUIUX_1 from "../../images/Dealer App UI/i1.jpg";
import AppUIUX_2 from "../../images/Dealer App UI/i2.jpg";
import AppUIUX_3 from "../../images/Dealer App UI/i3.jpg";
import AppUIUX_4 from "../../images/Dealer App UI/i4.jpg";
import AppUIUX_5 from "../../images/Dealer App UI/i5.jpg";
import AppUIUX_6 from "../../images/Dealer App UI/i6.jpg";

const DealerAppUICom = () => {
  return (
    <div className="main bg-black md:flex md:justify-center md:items-center md:flex-col">
    <div className="cover-photo bg-black md:px-0 lg:px-24 lg:py-20 xl:px-28 xl:py-12">
      <img alt="coverimage" src={TopImage} />
    </div>
    <div className="photos bg-black columns-1 py-8 px-4 md:columns-1 lg:columns-2 space-y-6 gap-6 md:py-12">
      <img
        alt="SampleImage"
        src={AppUIUX_1}
        className="md:h-[450px] md:w-[450px] object-cover"
      />
      <img
        alt="SampleImage"
        src={AppUIUX_6}
        className="md:h-[550px] md:w-[450px] object-cover"
      />
      <img
        alt="SampleImage"
        src={AppUIUX_5}
        className="md:h-[450px] md:w-[450px] object-cover"
      />
      <img
        alt="SampleImage"
        src={AppUIUX_2}
        className="md:h-[450px] md:w-[450px] object-cover"
      />
      <img
        alt="SampleImage"
        src={AppUIUX_4}
        className="md:h-[450px] md:w-[450px] object-cover"
      />
      <img
        alt="SampleImage"
        src={AppUIUX_3}
        className="md:h-[550px] md:w-[450px] object-cover"
      />
    </div>
  </div>
  )
}

export default DealerAppUICom;