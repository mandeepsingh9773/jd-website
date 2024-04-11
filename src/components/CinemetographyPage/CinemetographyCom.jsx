import React from "react";
// import PROMO_1 from "../../images/Promo Banners/i1.jpg";
// import PROMO_2 from "../../images/Promo Banners/i2.jpg";
// import PROMO_3 from "../../images/Promo Banners/i3.jpg";
// import PROMO_4 from "../../images/Promo Banners/i4.jpg";
// import PROMO_5 from "../../images/Promo Banners/i5.jpg";
// import PROMO_6 from "../../images/Promo Banners/i6.jpg";

const CinemetographyCom = () => {
  return (
    <div className="main bg-black md:flex md:justify-center md:items-center md:flex-col">
      <div className="cover-photo bg-black md:px-0 md:pt-16 lg:px-20 lg:py-20 xl:px-28 xl:py-12">
        <iframe
          width=""
          height=""
          className="aspect-video flex px-16 h-[220px] w-full md:h-[350px] md:w-[600px] lg:h-[500px] lg:w-[700px] xl:h-[500px] xl:w-[1000px]"
          src="https://www.youtube.com/embed/ZIK_c5-L6wI?si=7clUCO9Zd7YSim2e&autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerpolicy="strict-origin-when-cross-origin" >
        </iframe>
      </div>
      <div className="about bg-black w-full flex flex-col justify-center items-center xl:flex xl:flex-row xl:px-28 xl:py-12">
        <div className="category md:py-8 lg:py-0 lg:pb-20 xl:pr-12 xl:pb-40">
          <div className="md:h-[200px] md:w-[450px] flex flex-col shadow-2xl py-10 md:py-0">
            <div className="bg-black text-[30px] md:text-[38px] text-white py-4 px-6 flex-1 rounded-t-lg">
              Corporate Promo
            </div>
            <div className="text-[22px] md:text-[20px] bg-[#141414] text-white py-4 px-6 flex-1 rounded-b-lg">
              Project Type <br />
              <span className="text-[#FFFFFF8C]">
                Cinematography, Direction
              </span>
            </div>
          </div>
        </div>
        <div className="desc bg-black space-y-8 px-4 md:px-16 lg:px-24 xl:pl-4">
          <p className="text-[#8B8B8B] text-[20px] text-justify">
            This project brings me the opportunity to be both director and
            cinematographer, capturing the essence of a new space with the
            energetic environment of employees. Every workspace and cabin has a
            vibe that enlightens new thoughts and the spirit of collaboration.{" "}
          </p>
          <p className="text-[#8B8B8B] text-[20px] text-justify">
            The editing process was a careful composition of visuals and
            narratives, piecing together a fluid tale of a modern workplace
            coming to life. This project was not just a showcase of space but a
            dialogue between form and function, culminating in a corporate promo
            video that breathes the spirit of the company's future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CinemetographyCom;
