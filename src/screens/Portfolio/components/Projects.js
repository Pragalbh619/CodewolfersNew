import React from "react";
import { cwImg } from "../../../assets/MediaCall";

const Projects = () => {
  const data = [
    {
      img: cwImg.client1,
      title: "Shri Narayana",
    },
    {
      img: cwImg.client1,
      title: "Shri Narayana",
    },
    {
      img: cwImg.client1,
      title: "Shri Narayana",
    },
    {
      img: cwImg.client1,
      title: "Shri Narayana",
    },
  ];

  return (
    <div>
      <div className="w-[90%] mx-auto mb-10 ">
        <div className="flex flex-col text-center my-20">
          <span className="text-[20px] font-[400] text-[#5C5C5C] leading-[30px] poppins">
            Our Portfolio
          </span>
          <span className="text-[54px] md:text-[46px] lxs:text-[38px] xs:text-[30px] font-[400] text-[#000000] leading-[66px] md:leading-[58px] lxs:leading-[50px] xs:leading-[42px] poppins">
            We build modern creative{" "}
          </span>
          <span className="text-[54px] md:text-[46px] lxs:text-[38px] xs:text-[30px] font-[600] text-[#0A61CB] leading-[66px] md:leading-[58px] lxs:leading-[50px] xs:leading-[42px] poppins">
            Digital Platforms Experiences
          </span>
        </div>

        <div>
          <h1 className="text-[64px] md:text-[56px] lxs:text-[48px] xs:text-[40px] font-[600] text-[#03081F] leading-[66px] poppins italic text-end">
            Recent Projects
          </h1>
         
          {data.map((item) => {
            return (
              <>
                <div className="border-t border-[#0A61CB] my-10" />

                <div className="flex flex-col justify-center items-center">
                  {/* Image */}
                  <div className="flex justify-center items-center">
                    <img
                      className="rounded-[20px] h-[70%] w-[70%] object-cover"
                      src={item.img}
                      alt={item.title}
                    />
                  </div>

                  {/* Title Text */}
                  <div className="text-center mt-4 text-[64px] md:text-[48px] xs:text-[36px] leading-tight text-[#03081F] font-[600] italic poppins">
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
