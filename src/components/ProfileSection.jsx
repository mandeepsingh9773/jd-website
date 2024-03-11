import React from "react";

const ProfileSection = () => {
  return (
    <div className="main flex flex-col gap-8 md:flex md:flex-row md:py-24 md:px-20 lg:flex lg:flex-row lg:py-28 lg:px-20 xl:flex xl:flex-row bg-black xl:py-28 xl:px-40">
      <div className="about bg-black flex flex-col px-6 gap-10 mt-4 md:mt-2 lg:mt-1 xl:mt-0 xl:w-1/2 xl:flex xl:flex-col xl:justify-between">
        <div className="bg-black text-start xl:text-left">
          <p className="text-white font-custom4 text-[25px] text-start font-semibold mb-4 md:text-[25px] lg:text-[35px] xl:text-[40px] xl:font-medium xl:pb-4">
            <span className="text-[#FF9000]">JAYDEEP</span> SWARNKAR
          </p>
          <p className="text-white text-[18px] px-1 font-extralight border border-solid border-white inline-block lg:text-[25px] xl:text-[30px] xl:px-2">
            MARKETING DESIGNER
          </p>
        </div>
        <div className="desc_sec text-start md:flex md:text-left lg:text-left lg:flex xl:text-left xl:flex">
          <div class="hidden md:inline-block md:h-[13rem] md:mr-4 lg:inline-block lg:h-[17rem] lg:mr-4 xl:inline-block border-l border-white xl:h-[18rem] xl:mr-4"></div>
          <div className="flex flex-col justify-end xl:pl-4 xl:pb-2">
            <p className="text-white text-[18px] md:pb-6 md:text-[18px] lg:text-[22px] lg:pb-8 xl:text-[24px] xl:pb-5">
              We believe in making brand grow
              <span className="text-[#FF9000]"> rich...</span>
            </p>
            <p className="text-[#8B8B8B] md:text-[14px] md:w-[auto] lg:text-[18px] lg:w-auto xl:text-[20px] xl:leading-8 xl:w-auto">
              We excel in designing captivating visual strategies. Our tailored
              approach resonates with your audience, delivering compelling
              designs that elevate your brand's identity. Let us bring your
              vision to life.
            </p>
          </div>
        </div>
      </div>
      <div className="picture p-4 xl:w-1/2 bg-black xl:flex xl:justify-center">
        <div className="">
          <img
            className="object-cover h-100px w-100px md:h-[20rem] md:w-[65rem] lg:h-[25rem] lg:w-[75rem] xl:h-[28rem] xl:w-[28rem]"
            src="https://s3-alpha-sig.figma.com/img/4b82/8676/a8e4ab8cb8c5e6f398eafd8bfcb1cbc8?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZneMpNuyakY-MZFQoXORcbp~0ntLn6X1Os5gWAY2amdeWZCz3fk3kEJNBazel8hYoWSrNZUGzdg279OYYue1CQJKdJqJlDuncUQoME93cS69~NmkcECiGiCvkztZ2getNnT7th3bxvfIyW0aj7Ou5CskT44UX0y2trGO3AuCG1Ql9GJCqPNe-9WUesxfuDt1yeneM8ZUzKynlQkFnUJaK26JRWiGawD3Gn5Es-yn1uAYx31yTvi5Ox0o29XZ9H6w5OtXqkXmoD1NfJC3HaRRPkTxUYPEMDXGZUDCe1FjWX4HcfGHA1Ud~5wncziqJE-M5cXw6QoikRFBSJ4iAGcz8w__"
            alt="ProfilePicture"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
