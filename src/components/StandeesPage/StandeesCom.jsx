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
      <div className="about bg-black w-full flex flex-col justify-center items-center xl:flex xl:flex-row xl:px-28 xl:py-12">
        <div className="category md:py-8 lg:py-0 lg:pb-20 xl:pr-12 xl:pb-40">
          <div className="md:h-[200px] md:w-[450px] flex flex-col shadow-2xl py-10 md:py-0">
            <div className="bg-black text-[30px] md:text-[38px] text-white py-4 px-6 flex-1 rounded-t-lg">
              CRM Institute
            </div>
            <div className="text-[22px] md:text-[20px] bg-[#141414] text-white py-4 px-6 flex-1 rounded-b-lg">
              Project Type <br />
              <span className="text-[#FFFFFF8C]">
                Brand Identity , Logo Design
              </span>
            </div>
          </div>
        </div>
        <div className="desc bg-black space-y-8 px-4 md:px-16 lg:px-24 xl:pl-4">
          <p className="text-white text-[24px] hidden lg:inline-block">
            I believe in making brand grow{" "}
            <span className="text-[#FF9000]">rich...</span>
          </p>
          <p className="text-[#8B8B8B] text-[20px] text-justify">
            This project is delved deep to strike a balance between tradition
            and innovation. The choice of Navy blue signifies the solid academic
            foundation and trustworthiness of the institute, while Orange
            injects a dose of energy and creativity into the mix.{" "}
          </p>
          <p className="text-[#8B8B8B] text-[20px] text-justify">
            The logo's hero is the letter 'i', cast in vibrant orange to stand
            as a metaphor for the institute's role in lighting the fire of ideas
            and innovation within its students. The logo's hero is the letter
            'i', cast in vibrant orange to stand as a metaphor for the
            institute's role in lighting the fire of ideas and innovation within
            its students.
          </p>
        </div>
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
