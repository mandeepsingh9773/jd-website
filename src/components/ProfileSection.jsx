import React from "react";

const ProfileSection = () => {
  return (
    <div className="main md:flex bg-black md:py-28 md:px-40">
      <div className="about md:w-1/2 bg-black md:flex md:flex-col justify-between">
        <div className="bg-black md:text-left">
          <p className="text-white md:text-[40px] font-custom4 md:font-medium md:pb-4">
            <span className="text-[#FF9000]">JAYDEEP</span> SWARNKAR
          </p>
          <p className="text-white md:text-[30px] font-extralight border border-solid border-white inline-block md:px-2">
            MARKETING DESIGNER
          </p>
        </div>
        <div className="desc_sec md:text-left flex">
          <div class="border-l border-white md:h-[17rem] md:mr-4"></div>
          <div className="flex flex-col justify-end md:pl-4 md:pb-2">
            <p className="text-white md:text-[24px] md:pb-5">
              I believe in making brand grow
              <span className="text-[#FF9000]"> rich...</span>
            </p>
            <p className="text-[#8B8B8B] md:text-[18px] leading-8 md:w-[78%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </div>
        </div>
      </div>
      <div className="picture md:w-1/2 bg-black flex justify-center">
        <div className="md:w-[370px]">
          <img
            className="md:h-[435px] md:w-[430px] object-cover"
            src="https://s3-alpha-sig.figma.com/img/4b82/8676/a8e4ab8cb8c5e6f398eafd8bfcb1cbc8?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZneMpNuyakY-MZFQoXORcbp~0ntLn6X1Os5gWAY2amdeWZCz3fk3kEJNBazel8hYoWSrNZUGzdg279OYYue1CQJKdJqJlDuncUQoME93cS69~NmkcECiGiCvkztZ2getNnT7th3bxvfIyW0aj7Ou5CskT44UX0y2trGO3AuCG1Ql9GJCqPNe-9WUesxfuDt1yeneM8ZUzKynlQkFnUJaK26JRWiGawD3Gn5Es-yn1uAYx31yTvi5Ox0o29XZ9H6w5OtXqkXmoD1NfJC3HaRRPkTxUYPEMDXGZUDCe1FjWX4HcfGHA1Ud~5wncziqJE-M5cXw6QoikRFBSJ4iAGcz8w__"
            alt="ProfilePicture"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
