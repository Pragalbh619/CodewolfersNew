import React from "react";
import { cwImg } from "../assets/MediaCall";

const Services = () => {
  const data = [
    {
      image: cwImg.services1,
      heading: "mobile app developmemt",
      description:
        "We transform Innovative web ideas into real world scenarios with website development & design strategies.",
    },
    {
      image: cwImg.services2,
      heading: "web developmemt",
      description:
        "We transform Innovative web ideas into real world scenarios with website development & design strategies.",
    },
    {
      image: cwImg.services3,
      heading: "ui ux design",
      description:
        "Designs are the main key of any product success and it’s an always be the first impression of the product” so our Graphic designer will be taking care of it and will share the Cool, Intuitive & Clean Designs.",
    },
    {
      image: cwImg.services4,
      heading: "custom software solution",
      description:
        "Detailing: Add more detail to the wireframes, including placeholder text, buttons, and images. Interactivity: Begin to incorporate basic interactions like button clicks and page transitions to illustrate user flow.",
    },
    {
      image: cwImg.services5,
      heading: "branding",
      description:
        "Detailing: Add more detail to the wireframes, including placeholder text, buttons, and images. Interactivity: Begin to incorporate basic interactions like button clicks and page transitions to illustrate user flow.",
    },
    {
      image: cwImg.services6,
      heading: "app & web consultancy",
      description:
        "We build topnotch, robust, practical, and compatible web and mobile solutions for Android (Phone, Tablet and Wear). Appsinvo is one of the trusted partners with expertise and excellence in strategizing, designing, development & the deployment of your solutions.",
    },
  ];
  return (
    <>
      <div className="w-[90%] mx-auto  my-20">
        <div className="flex flex-col text-center mb-20 ">
          <span className="text-[20px] font-[400] text-[#5C5C5C] leading-[30px] poppins">
            What Do We Do
          </span>
          <span className="text-[54px] md:text-[46px] lxs:text-[38px] xs:text-[30px] font-[400] text-[#000000] leading-[66px] md:leading-[58px] lxs:leading-[50px] xs:leading-[42px] poppins">
            We build modern creative{" "}
          </span>
          <span className="text-[54px] md:text-[46px] lxs:text-[38px] xs:text-[30px] font-[600] text-[#0A61CB] leading-[66px] md:leading-[58px] lxs:leading-[50px] xs:leading-[42px] poppins">
            Digital Platforms Experiences
          </span>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-2 lxs:grid-cols-1 gap-6 rounded-[20px] ">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-5 transition-transform transform hover:scale-105"
            >
              <div className="flex">
                <img
                  src={item.image}
                  alt={item.heading}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="mt-4 ">
                <h2 className="text-[24px] font-[600] text-[#0A61CB] leading-[30px] poppins line-clamp-1">
                  {item.heading}
                </h2>
              </div>
              <div className="mt-2">
                <p className="text-[16px] font-[400] text-[#000000] leading-[19.2px] poppins line-clamp-6">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
