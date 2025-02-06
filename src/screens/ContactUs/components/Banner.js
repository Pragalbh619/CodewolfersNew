import React from "react";
import { cwImg } from "../../../assets/MediaCall";

const Banner = () => {
    return (
        <div>
            <div className="relative w-[90%] mx-auto">
                {/* Background Image */}
                {/* <div className="relative ">
                    <img src={cwImg.contactUs} alt="" className="h-[calc(100vh-158px)] w-full object-cover " />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A61CB] to-[rgba(0,36,97,0)]"></div>
                </div> */}
                <div className="relative rounded-[12px] overflow-hidden">
                    <img
                        src={cwImg.contactUs}
                        alt=""
                        className=" h-[calc(100vh-158px)] lg:h-[calc(100vh-88px)] w-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A61CB] to-[rgba(0,36,97,0)]"></div>
                </div>



                {/* Text Content */}
                <div className="absolute top-1/2 left-20 xxs:left-5 transform -translate-y-1/2 flex flex-col gap-10">
                    <h1 className="text-[54px] md:text-[46px] lxs:text-[38px] xs:text-[30px]  font-[600] leading-[14px] poppins text-[#FFFFFF]">
                        Contact Us
                    </h1>
                    <p className="w-[60%] xmd:w-[90%] text-[24px] md:text-[20px] lxs:text-[16px] xs:text-[12px] font-[400] leading-[28.8px]  md:leading-[24.8px] lxs:leading-[20.8px] xs:leading-[16.8px] poppins text-[#FFFFFF]">
                        CODEWOLFERS IS A ONE-STOP-SOLUNTION FOR ALL KIND OF DEVELOPMENT. IF YOU HAVE AN IDEA PLEASE FILL OUT THE FORM BELOW AND OUR SOFTWARE SOLUTION EXPERTS WOULD LOVE TO CONSULT WITH YOU ABOUT YOUR TECHNOLOGY NEEDS SHORTLY.
                    </p>

                    {/* <button className="w-[20%] py-2 text-[20px] font-[700] leading-[24px] poppins text-[#0A61CB] lato bg-white rounded-full">
                        Join Us Now
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;
