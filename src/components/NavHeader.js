import React from "react";
import { cwImg } from "../assets/MediaCall";
import { Link } from "react-router-dom";

const NavHeader = () => {
  return (
    <>
      <div>
        <div className="bg-[#FAFAFA] w-[90%] mx-auto flex justify-between h-[70px] items-center border border-[#FAFAFA] rounded-b-xl lg:hidden">
          <div className="flex gap-2 items-center">
            <div>
              <img src={cwImg.star} alt="" />
            </div>
            <div>
              <span className="text-[15px] font-[500] leading-[22.5px] poppins text-[#000000]">
                {" "}
                Call Us Now{" "}
                <span className="text-[#0A61CB]">+91 8810809712</span>
              </span>
            </div>
          </div>

          <div className="flex justify-between gap-5">
            <div className="flex gap-2 items-center">
              <div>
                <img src={cwImg.mail} alt="" />
              </div>
              <div>
                <span className="text-[15px] font-[500] leading-[22.5px] poppins text-[#000000]">
                  codewolfers@gmail.com
                </span>
              </div>
            </div>

            {/* <div className="flex  bg-[#028643]  rounded-b-xl">
              <div className="p-5">
                <img src={cwImg.whatsapp} alt="" />
              </div>
              <div className="h-full border-[2px]" />
              <div className=" border border-white rounded-full text-white m-5 px-2">consult our experts</div>
            </div> */}

            <a
              href="https://wa.me/918810809712?text=Hello,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="flex bg-[#028643] rounded-b-xl cursor-pointer"
            >
              <div className="p-5">
                <img src={cwImg.whatsapp} alt="WhatsApp" />
              </div>
              <div className="h-full border-[2px]" />
              <div className="border border-white rounded-full text-white m-5 px-2 py-1">
                Consult our experts
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavHeader;
