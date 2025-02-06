import React from "react";
import { cwImg } from "../../../assets/MediaCall";

const Detail = () => {
  const data = [
    {
      img: cwImg.icon1,
      title: "750+",
      subtitle: "Apps Developed",
    },
    {
      img: cwImg.icon2,
      title: "200+",
      subtitle: "Happy Clients",
    },
    {
      img: cwImg.icon1,
      title: "20+",
      subtitle: "countries served",
    },
    {
      img: cwImg.icon1,
      title: "100% Sucure Payment",
      subtitle: "We ensure your money is save",
    },
  ];

  return (
    <div>
      <div className="w-[90%] mx-auto grid grid-cols-4 lg:grid-cols-2 lg:gap-2 lxs:grid-cols-1 my-5">
        {data.map((item) => {
          return (
            <>
              <div className="flex items-center gap-5">
                <div>
                  <img className="h-[64px] w-[64px]" src={item.img} alt="icon" />
                </div>
                <div>
                  <h3 className="text-[#1A1A1A] font-[700] text-[18px] poppins leading-[27px]">{item.title}</h3>
                  <p className="text-[#999999] font-[400] text-[14px] poppins leading-[21px]">{item.subtitle}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
