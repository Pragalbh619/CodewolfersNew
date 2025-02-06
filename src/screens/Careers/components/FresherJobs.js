import React, { useState } from 'react';
import ApplyForm from '../../../components/ApplyNow'; 

const FresherJobs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleClick = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div>
      <div className="w-[90%] mx-auto mb-10">
        <div className="flex  sm:flex-col justify-between items-center bg-gradient-to-r from-[#820ACB] to-[#004AC7] rounded-[12px] px-6 sm:px-10 py-5 sm:py-8">
          <div className=" sm:text-left">
            <span className="text-white text-[40px] lxs:text-[32px] xxs:text-[24px] xs:text-[20px]  sm:leading-[46px] leading-[54px] font-[500] poppins italic">
              Can't Find Your Dream Job? Connect Us
            </span>
          </div>
          <div className="mt-4 sm:mt-2">
            <button
              className="bg-[#fff] text-[#0A61CB] px-6 sm:px-10 py-2 rounded-full"
              onClick={handleClick}
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Show ApplyForm modal when isModalOpen is true */}
      {isModalOpen && <ApplyForm closeModal={closeModal} />}
    </div>
  );
};

export default FresherJobs;
