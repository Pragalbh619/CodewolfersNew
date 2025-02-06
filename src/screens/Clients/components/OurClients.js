import React from "react";
import { cwImg } from "../../../assets/MediaCall";

const OurClients = () => {
  const data = [
    {
      img: cwImg.client1,
      title: "Shri Narayana",
    },    
  ];
  
  return (
    <div>
      <div className="w-[90%] mx-auto my-16">
        <div className="flex flex-col gap-10 text-center my-16 justify-center items-center">
          <h1 className="text-[54px] md:text-[46px] lxs:text-[38px] xs:text-[30px] font-[600] leading-[14px] poppins ">
            Our Clients
          </h1>
          <p className="text-[24px] md:text-[20px] lxs:text-[16px] xs:text-[12px] font-[400] leading-[28.8px]  md:leading-[24.8px] lxs:leading-[20.8px] xs:leading-[16.8px] poppins w-[76%]">
            Over the years, cw has assisted enterprises across the globe by
            building not only software solutions, but also building trust and
            long term partnership with the clients.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-2 lxs:grid-cols-1 gap-5">
          {data.map((item) => {
            return (
              <div className="">
                <div>
                  <img className="rounded-[20px]" src={item.img} alt={item.title} />
                </div>
                {/* <div className="absolute bottom-4 right-7 text-[#FFFFFF] text-[24px] font-[500] italic poppins">
                  <h2>{item.title}</h2>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
