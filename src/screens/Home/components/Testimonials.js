import React from "react";
import { cwImg } from "../../../assets/MediaCall";
import Slider from "react-slick";

const testimonials = [
  {
    name: "St Gix",
    location: "South London",
    date: "24th September, 2023",
    feedback:
      "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    image: "https://imgcdn.stablediffusionweb.com/2024/4/13/b3bec860-a583-42cd-a352-3f81dbc8fa0c.jpg",
  },
  {
    name: "St Gix",
    location: "South London",
    date: "24th September, 2023",
    feedback:
      "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    image: "https://imgcdn.stablediffusionweb.com/2024/4/13/b3bec860-a583-42cd-a352-3f81dbc8fa0c.jpg",
  },
  {
    name: "St Gix",
    location: "South London",
    date: "24th September, 2023",
    feedback:
      "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    image: "https://imgcdn.stablediffusionweb.com/2024/4/13/b3bec860-a583-42cd-a352-3f81dbc8fa0c.jpg",
  },

];

const Testimonials = () => {

  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  return (
    <div className="bg-[#0A61CB] text-white py-10 px-4 pt-[12%] xlg:pt-[20%] xxs:pt-[25%] xs:pt-[30%]">
      <div className="w-[90%] mx-auto text-center">
        <h2 className="text-[20px] font-[500] leading-[30px] poppins mb-2">Customer Reviews</h2>
        <h3 className="text-[54px] md:text-[46px] lxs:text-[38px] xs:text-[30px] leading-[66px] md:leading-[58px] lxs:leading-[50px] xs:leading-[42px] font-[400] mb-6">
          All Professional<br /> Testimonials & Feedbacks
        </h3>
        <div className="flex justify-center gap-8 mb-8">

          <div>
            <div>
              <img className="w-[224px]" src={cwImg.google} />
            </div>
            <div>
              <span className="text-[20px] font-[500] leading-[30px] poppins ">5 Star Customer Rating</span>
            </div>
          </div>

          <div>
            <div>
              <img className="w-[224px]" src={cwImg.clutch} />
            </div>
            <div>
              <span className="text-[20px] font-[500] leading-[30px] poppins ">Rated As Top Web Developer</span>
            </div>
          </div>

          <div>
            <div>
              <img className="w-[250px]" src={cwImg.upwork} />
            </div>
            <div>
              <span className="text-[20px] font-[500] leading-[30px] poppins ">100% Success Rate</span>
            </div>
          </div>



        </div>

        {/* Testimonials Cards */}

        <div className="w-full ">
            <Slider {...settings} className="w-full">
              {testimonials.map((testimonial, index) => (
                <div className="px-5 sm:px-3 py-5">
                  <div
                    key={index}
                    className="bg-[#FFFFFF] rounded-lg p-6  shadow-md "
                  >
                    {" "}
            
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 mb-4">
                        <div>
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full"
                          />
                        </div>

                        <div className="border-l border-[#028643] h-10" />

                        <div className="text-left">
                          <h4 className="text-[18px] font-[600] leading-[24px] text-[#000000] poppins">
                            {testimonial.name}
                          </h4>
                          <p className="text-[16px] font-[400] leading-[24px] text-[#028643] poppins">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>

                      {/* <div className="flex items-end xl:hidden">
                        <p className="text-[15px] font-[400] leading-[24px] text-[#000000] poppins">
                          {testimonial.date}
                        </p>
                      </div> */}
                    </div>
                    <p className="text-[16px] text-[#000000] inter pt-4 text-left">
                      {testimonial.feedback}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>



      </div>
    </div>
  );
};

export default Testimonials;
