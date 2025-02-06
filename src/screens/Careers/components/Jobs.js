import React, { useState } from "react";
import { cwImg } from "../../../assets/MediaCall";
import ApplyForm from "../../../components/ApplyNow";

const Jobs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleClick = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const data = [
    {
      image: cwImg.icon3,
      title: "Jr. Software Developer",
      Skills: [
        "Hands-on experience in the full lifecycle of Android application development",
        "Strong knowledge of RESTful web services",
        "Good Knowledge of Android SDK, Push Notifications & Toast, and Android Studio",
      ],
      Experience: "Required Experience: 3-5 years",
      Qualification:
        "Qualification Preferred: Bachelor’s or Master degree in Computer Science or Information Technologies",
    },
  ];

  return (
    <div>
      <div className="w-[90%] mx-auto my-10">
        <div>
          <h1 className="text-[54px] leading-[54px] font-600 poppins text-center italic mb-10">
            Join Our Team
          </h1>
        </div>

        <div>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-2xl p-6 mb-6 lsm:mb-0 lsm:p-4"
              >
                <div className="flex justify-between lsm:flex lsm:flex-col">
                  <div className="flex lg:items-center">
                    <div>
                      <img
                        className="h-16 w-16 xs:h-12 xs:w-12 rounded-full object-cover"
                        src={item.image}
                        alt="job logo"
                      />
                    </div>
                    <div className="flex flex-col ml-4">
                      <span className="text-[36px] lxs:text-[30px]  xxs:text-[20px] font-[600] leading-[66px] text-[#03081F] italic poppins">
                        {item.title}
                      </span>
                      <div className="text-[16px] font-[600] leading-[21px] text-[#03081F] italic poppins lg:hidden">
                        <span>Required Skills & Qualifications: </span>
                        {item.Skills.map((skill, skillIndex) => (
                          <div key={skillIndex}>
                            {skill}
                            <br />
                          </div>
                        ))}
                      </div>
                      <span className="text-[16px] xxs:text-[14px] xxs:leading-none font-[600] leading-[21px] text-[#03081F] italic poppins">
                        {item.Experience}
                      </span>
                      <span className="text-[16px] font-[600] leading-[21px] text-[#03081F] italic poppins lg:hidden">
                        {item.Qualification}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleClick}
                    className="mt-40 lg:my-5  bg-[#0A61CB] text-white px-10 py-2 rounded-full hover:bg-[#084a9b] transition-all duration-300"
                  >
                    Apply
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* Show ApplyForm modal when isModalOpen is true */}
        {isModalOpen && <ApplyForm closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default Jobs;
