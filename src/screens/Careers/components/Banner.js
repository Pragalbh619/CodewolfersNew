import React from "react";
import { cwImg } from "../../../assets/MediaCall";

const Banner = () => {
  return (
    <div className="">
      <div className="relative w-[90%] mx-auto">
        {/* Background Image */}
        <div className="relative ">
          <img src={cwImg.careers} alt="" className=" h-[calc(100vh-158px)] lg:h-[calc(100vh-88px)] w-full object-cover rounded-[12px]" />

      
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A61CB] to-[rgba(0,36,97,0)] rounded-[12px]"></div>
        </div>

        {/* Text Content */}
        <div className="absolute top-1/2 left-20 xxs:left-5 transform -translate-y-1/2 flex flex-col gap-10">
          <h1 className="text-[54px] md:text-[46px] lxs:text-[38px] xs:text-[30px] font-[600] leading-[14px] xxs:leading-none  poppins text-[#FFFFFF]">
            career opportunities
          </h1>
          <p className="w-[60%] xmd:w-[90%] text-[24px] md:text-[20px] lxs:text-[16px] xs:text-[12px] font-[400] leading-[28.8px]  md:leading-[24.8px] lxs:leading-[20.8px] xs:leading-[16.8px] poppins text-[#FFFFFF]">
            Awesome Place To Work For Great Talents Appsinvo Is Always Looking
            For Great Talents Who Have The Passion To Build Some Extra Ordinary
            Things And Think Out-Of-Bound.
          </p>

          <button className="w-[20%] xmd:w-[50%] py-2 text-[20px]  font-[700] leading-[24px] poppins text-[#0A61CB] lato bg-white rounded-full">
            Join Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
