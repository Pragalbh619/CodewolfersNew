import React, { useRef } from "react";
import { cwImg } from "../../../assets/MediaCall";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const RightTeam = () => {
    const sliderRef = useRef(null);

    const data = [
        { image: cwImg.team1 },
        { image: cwImg.team2 },
        { image: cwImg.team3 },
    ];

    // Slider settings
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

    // Handle previous and next slide
    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className="w-[90%] mx-auto ">
            <div className="flex flex-col text-center mb-20 xlg:mb-15 xxs:mb-10 xs:mb-0">
                <span className="text-[20px] font-[400] text-[#5C5C5C] leading-[30px] poppins">
                    How We Work
                </span>
                <div className="mx-auto text-center">
                    <span className="text-[54px] md:text-[46px] lxs:text-[38px] xs:text-[30px] font-[400] text-[#000000] leading-[66px] md:leading-[58px] lxs:leading-[50px] xs:leading-[42px] poppins">
                        We love working alongside ambitious brands and people.{" "}
                    </span>
                    <span className="text-[54px] md:text-[46px] lxs:text-[38px] xs:text-[30px] font-[600] text-[#0A61CB] leading-[66px] md:leading-[58px] lxs:leading-[50px] xs:leading-[42px] poppins">
                        drop us a line if you’d like us{" "}
                    </span>
                    <span className="text-[54px] md:text-[46px] lxs:text-[38px] xs:text-[30px] font-[400] text-[#000000] leading-[66px] md:leading-[58px] lxs:leading-[50px] xs:leading-[42px] poppins">
                        to build something great together.
                    </span>
                </div>
            </div>

            <div className="relative  absolute bottom-[-113px]">
                {/* Custom Arrows Section */}
                {/* <div className="bg-[#FFFFFF] flex justify-between items-center w-[40%] h-[300px] px-6 py-4 absolute top-0 left-0 right-0 z-10"> */}
                <div className="bg-[#FFFFFF] flex justify-between items-end w-[40%] h-[300px] px-6 py-4 absolute top-0 left-0 right-0 xmd:hidden">
                    <div>
                        <span>Assemble The Right Team</span>
                    </div>
                    <div className="flex gap-2">
                        <FaAngleLeft
                            onClick={prevSlide}
                            className="text-[#0A61CB] text-xl cursor-pointer"
                        />
                        <FaAngleRight
                            onClick={nextSlide}
                            className="text-[#0A61CB] text-xl cursor-pointer"
                        />
                    </div>
                </div>

                {/* Slider Container */}
                <Slider ref={sliderRef} {...settings}>
                    {data.map((item, index) => (
                        <div key={index} className="relative h-[250px] px-4">
                            <div className="h-full">
                                <img
                                    className="h-full w-full object-cover"
                                    src={item.image}
                                    alt={`Team ${index + 1}`}
                                />
                            </div>
                            <button className="bg-[#fff] text-[#0A61CB] px-10 py-2 rounded-[8px] absolute bottom-2 right-6">
                                More
                            </button>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default RightTeam;

