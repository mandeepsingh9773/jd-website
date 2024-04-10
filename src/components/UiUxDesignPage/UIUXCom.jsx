import React from "react";
import TopImage from "../../images/UIUX Design/TOp.jpg";
import UIUX_1 from "../../images/UIUX Design/i1.jpg";
import UIUX_2 from "../../images/UIUX Design/i2.jpg";
import UIUX_3 from "../../images/UIUX Design/i3.jpg";
import UIUX_4 from "../../images/UIUX Design/i4.jpg";
import UIUX_5 from "../../images/UIUX Design/i5.jpg";
import UIUX_6 from "../../images/UIUX Design/i6.jpg";

const BrandingCom = () => {
  return (
    <div className="main bg-black md:flex md:justify-center md:items-center md:flex-col">
      <div className="cover-photo bg-black md:px-0 lg:px-24 lg:py-20 xl:px-28 xl:py-12">
        <img alt="coverimage" src={TopImage} />
      </div>
      <div className="about bg-black w-full flex flex-col justify-center items-center xl:flex xl:flex-row xl:px-28 xl:py-12">
        <div className="category md:py-8 lg:py-0 lg:pb-20 xl:pr-12 xl:pb-40">
          <div className="md:h-[200px] md:w-[450px] flex flex-col shadow-2xl py-10 md:py-0">
            <div className="bg-black text-[30px] md:text-[38px] text-white py-4 px-6 flex-1 rounded-t-lg">
              CRM Landing
            </div>
            <div className="text-[22px] md:text-[20px] bg-[#141414] text-white py-4 px-6 flex-1 rounded-b-lg">
              Project Type <br />
              <span className="text-[#FFFFFF8C]">UI/UX, Web Design</span>
            </div>
          </div>
        </div>
        <div className="desc bg-black space-y-8 px-4 md:px-16 lg:px-24 xl:pl-4">
          <p className="text-[#8B8B8B] text-[20px] text-justify">
            The task was to design a UI for an IT service company, I started
            with Figma and created wireframes to ensure functionality and
            clarity. The process was iterative: wireframes laid the foundation
            and user flows dictated the navigation. The color palette used is
            Salesforce's blue, acknowledging the client's partnership and
            ensuring brand synergy.{" "}
          </p>
          <p className="text-[#8B8B8B] text-[20px] text-justify">
            Each page was designed with the user's journey in mind, ensuring
            service information was accessible and solutions were presented with
            precision. The responsive design ensured a seamless transition
            between web and mobile, prioritizing usability across devices.
          </p>
        </div>
      </div>
      <div className="photos bg-black columns-1 py-8 px-4 md:columns-1 lg:columns-2 space-y-6 gap-6 md:py-12">
        <img
          alt="SampleImage"
          src={UIUX_1}
          className="md:h-[450px] md:w-[450px] object-cover"
        />
        <img
          alt="SampleImage"
          src={UIUX_6}
          className="md:h-[550px] md:w-[450px] object-cover"
        />
        <img
          alt="SampleImage"
          src={UIUX_5}
          className="md:h-[450px] md:w-[450px] object-cover"
        />
        <img
          alt="SampleImage"
          src={UIUX_2}
          className="md:h-[450px] md:w-[450px] object-cover"
        />
        <img
          alt="SampleImage"
          src={UIUX_4}
          className="md:h-[450px] md:w-[450px] object-cover"
        />
        <img
          alt="SampleImage"
          src={UIUX_3}
          className="md:h-[550px] md:w-[450px] object-cover"
        />
      </div>
    </div>
  );
};

export default BrandingCom;
