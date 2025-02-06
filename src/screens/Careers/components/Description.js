import React from "react";
import { cwImg } from "../../../assets/MediaCall";

const Description = () => {
  return (
    <div className="bg-gradient-to-t from-[#EFF5FA] to-[#FFFFFF]">
      <div className="w-[90%] mx-auto flex  lg:flex-col-reverse gap-5 py-10">
        {/* Text Section */}
        <div className="w-[45%] lg:w-full">
          <div className="text-[40px] lg:text-[36px] xs:text-[32px] font-[500] leading-[54px] poppins text-[#000000] italic text-center">
            Our Team is growing Fast, We'd love your help in making
            "Codewolfers" more Special. Come join us!
          </div>
          <div className="text-[24px] font-[400] leading-[36px] poppins text-[#000000] mt-5 xl:hidden">
            Working with <span className="italic">Codewolfers</span> is not just a job, but it's a journey of
            experience & excellence. Here, you'll find lots of exploration for
            yourself and your expertise. Challenging and enjoyable working
            environment surely lets you realize your actual working potential
            that's hidden inside you. Fast-paced career, global exposure, and
            great service practices are what you experience at Codewolfers.
          </div>
        </div>

        {/* Image Section */}
        <div className="w-[55%] lg:w-full">
          <img
            className="h-full w-full lg:h-auto lg:w-auto"
            src={cwImg.careers2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
