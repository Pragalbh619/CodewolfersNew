import React from "react";
import { cwImg } from "../../../assets/MediaCall";

const WeServe = () => {
  const data = [
    {
      img: cwImg.serve1,
      title: "Airline",
    },
    {
      img: cwImg.serve2,
      title: "E Scooter App",
    },
    {
      img: cwImg.serve3,
      title: "Political",
    },
    {
      img: cwImg.serve4,
      title: "Real State",
    },
    {
      img: cwImg.serve5,
      title: "Entertainment",
    },
    {
      img: cwImg.serve6,
      title: "E Commerce",
    },
    {
      img: cwImg.serve7,
      title: "Event",
    },
    {
      img: cwImg.serve8,
      title: "Restaurant",
    },
    {
      img: cwImg.serve9,
      title: "Healthcare",
    },
    {
      img: cwImg.serve10,
      title: "Saas",
    },
    {
      img: cwImg.serve11,
      title: "News App",
    },
    {
      img: cwImg.serve12,
      title: "Social Networking",
    },
    {
      img: cwImg.serve13,
      title: "Finance",
    },
    {
      img: cwImg.serve14,
      title: "M Learning",
    },
    {
      img: cwImg.serve15,
      title: "On Demand",
    },
    {
      img: cwImg.serve16,
      title: "Car Wash",
    },
    {
      img: cwImg.serve17,
      title: "Astrology",
    },
    {
      img: cwImg.serve18,
      title: "Doctor",
    },
    {
      img: cwImg.serve20,
      title: "Salon",
    },
    {
      img: cwImg.serve21,
      title: "Laundary",
    },
    {
      img: cwImg.serve22,
      title: "Medical Delivery",
    },
    {
      img: cwImg.serve23,
      title: "Hotel Booking",
    },
    {
      img: cwImg.serve24,
      title: "Matrimonial",
    },
    {
      img: cwImg.serve25,
      title: "Tutor Booking",
    },
    {
      img: cwImg.serve26,
      title: "Car Rental",
    },
    {
      img: cwImg.serve27,
      title: "Courier",
    },
    {
      img: cwImg.serve28,
      title: "Augmented Reality",
    },
    {
      img: cwImg.serve29,
      title: "Construction",
    },
    {
      img: cwImg.serve30,
      title: "NGO",
    },
    {
      img: cwImg.serve31,
      title: "Online Examination",
    },
    {
      img: cwImg.serve32,
      title: "CRM & ERP",
    },
    {
      img: cwImg.serve33,
      title: "Influencer",
    },
    {
      img: cwImg.serve34,
      title: "Game",
    },
    {
      img: cwImg.serve35,
      title: "Taxi Booking",
    },
    {
      img: cwImg.serve36,
      title: "Automotive",
    },
    {
      img: cwImg.serve37,
      title: "Fintech",
    },
  ];
  return (
    <div>
      <div className="w-[90%] mx-auto my-16">
        <div className="flex flex-col gap-10 text-center mb-16 justify-center items-center">
          <h1 className="text-[54px] md:text-[46px] lxs:text-[38px] xs:text-[30px] font-[600] leading-[14px]  poppins ">
            Industries We Serve
          </h1>
          <p className="text-[24px] md:text-[20px] lxs:text-[16px] xs:text-[12px] font-[400] leading-[28.8px]  md:leading-[24.8px] lxs:leading-[20.8px] xs:leading-[16.8px] poppins w-[76%]">
            We describe low-budget innovative strategies, distinguish channels
            for rapid customer procurement, and range businesses to new heights
            with our latest technologies tools, and trends.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-2 lxs:grid-cols-1 gap-5">
          {data.map((item) => {
            return (
              <div className="relative">
                <div>
                  <img className="rounded-[12px]" src={item.img} alt={item.title} />
                </div>
                <div className="absolute bottom-4 right-7 text-[#FFFFFF] text-[24px] font-[500] italic poppins">
                  <h2>{item.title}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeServe;
