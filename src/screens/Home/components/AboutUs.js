import React, { useState } from "react";
import { cwImg } from "../../../assets/MediaCall";

const AboutUs = () => {
  const [activeButton, setActiveButton] = useState("Frequent Questions");
  const [selectedQuestion, setSelectedQuestion] = useState(null); // Store the selected question

  const buttons = [
    "Frequent Questions",
    "Who we are?",
    "Partner Program",
    "Help & Support",
  ];

  // Data for frequently asked questions and their answers
  const faqData = [
    {
      question: "How do you ensure the security and quality of the software you develop?",
      answer:
        "We follow industry best practices for security, including encryption, secure authentication, and regular audits. Our development process ensures the highest quality through continuous testing and reviews.",
    },
    {
      question: "What mobile app development services do you offer?",
      answer:
        "We offer native and cross-platform mobile app development for iOS and Android, including UI/UX design, API integration, and post-launch support.",
    },
    {
      question: "Do you offer app maintenance and support services?",
      answer:
        "Yes, we offer ongoing app maintenance, updates, bug fixes, and support to ensure your app remains secure, up-to-date, and fully functional.",
    },
    {
      question: "What Are the Different Types of Apps that Code Wolfers Can Develop?",
      answer:
        "We specialize in developing e-commerce apps, social media apps, utility apps, and enterprise solutions, focusing on user experience and performance.",
    },
  ];

  const content = {
    "Frequent Questions": (
      <div>
        <h3 className="text-[24px] font-bold text-[#03081F] leading-[30px] poppins underline">
          Frequently Asked Questions
        </h3>
        <ul className="list-none  text-[18px] font-bold text-[#03081F] leading-[27px] poppins flex flex-col gap-3 mt-5">
          {faqData.map((faq, index) => (
            <li
              key={index}
              className="whitespace-pre-line cursor-pointer  w-full overflow-hidden text-ellipsis"
            >
              <span
                onClick={() => setSelectedQuestion(faq)} // Set the selected question
                className="hover:text-[#0A61CB] hover:underline block w-full break-words"
              >
                {faq.question}
              </span>
            </li>
          ))}
        </ul>




        {/* Modal-like Answer Display */}
        {selectedQuestion && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div
              className="bg-white p-6 rounded-lg max-w-md w-full"
            >
              <h4 className="text-[20px] font-bold text-[#03081F] leading-[27px] poppins">
                Answer:
              </h4>
              <p className="text-[16px] font-[400] text-[#03081F] leading-[24px] poppins mt-2">
                {selectedQuestion.answer}
              </p>
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full"
                onClick={() => setSelectedQuestion(null)} // Close modal when button is clicked
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    ),
    "Who we are?": (
      <div>
        <h3 className="text-[24px] font-bold text-[#03081F] leading-[30px] poppins underline">
          Who We Are
        </h3>
        <p className="text-[18px] font-[400] text-[#03081F] leading-[27px] poppins mt-5">
          We are a passionate team dedicated to delivering top-notch mobile app development services. We focus on innovation, security, and user experience to help businesses grow.
        </p>
      </div>
    ),
    "Partner Program": (
      <div>
        <h3 className="text-[24px] font-bold text-[#03081F] leading-[30px] poppins underline">
          Partner Program
        </h3>
        <p className="text-[18px] font-[400] text-[#03081F] leading-[27px] poppins mt-5">
          Our Partner Program allows businesses to join hands with us for mutual growth. We offer attractive incentives for our partners and provide them with the resources they need for success.
        </p>
      </div>
    ),
    "Help & Support": (
      <div>
        <h3 className="text-[24px] font-bold text-[#03081F] leading-[30px] poppins underline">
          Help & Support
        </h3>
        <p className="text-[18px] font-[400] text-[#03081F] leading-[27px] poppins mt-5">
          Our Help & Support team is available 24/7 to assist you with any queries or issues you may face. We are committed to providing prompt solutions and ensuring a smooth experience for our users.
        </p>
      </div>
    ),
  };

  return (
    <div className="bg-[#D9D9D9] w-[90%] mx-auto my-20 rounded-[12px] p-10 xxs:p-5 flex flex-col gap-20">
      <div className="flex justify-between items-center  xlg:flex-col">
        <div>
          <h1 className="text-[28px]  font-[700] text-[#000000] leading-[48px] poppins">
            Know more about us!
          </h1>
        </div>

        <div className="flex flex-wrap gap-3 mt-4 ">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => setActiveButton(btn)}
              className={`px-4 py-2 xs:px-2 xs:py-1 poppins text-[16px] leading-[24px] transition-all duration-300
                ${activeButton === btn
                  ? "border border-[#0A61CB] rounded-full font-[700] hover:bg-[#0A61CB] hover:text-white"
                  : "font-[400]"}`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#FFFFFF] flex  xlg:flex-col p-5  gap-5 rounded-[12px]">
        <div className="w-full ">{content[activeButton]}</div>

        <div className="w-full  flex flex-col gap-5">
          <div className="flex xlg:flex-col gap-5">
            <div className="bg-[#004AC74A] flex flex-col justify-center items-center rounded-[12px] p-5 w-full min-h-[180px]">
              <span className="text-[18px] font-bold text-[#03081F] leading-[27px] poppins whitespace-nowrap">
                Contact Us!
              </span>
              <img
                src={cwImg.communicate}
                alt="Contact"
                className="w-[50px] h-[50px] my-2"
              />
              <p className="text-[16px] font-semibold text-[#03081F] leading-[24px] poppins text-center">
                Do you offer app maintenance and support services?
              </p>
            </div>

            <div className="bg-[#004AC74A] flex flex-col justify-center items-center rounded-[12px] p-5 w-full min-h-[180px]">
              <span className="text-[18px] font-bold text-[#03081F] leading-[27px] poppins whitespace-nowrap">
                Get your app now!
              </span>
              <img
                src={cwImg.order}
                alt="Order"
                className="w-[50px] h-[50px] my-2"
              />
              <p className="text-[16px] font-semibold text-[#03081F] leading-[24px] poppins text-center">
                Do you offer app maintenance and support services?
              </p>
            </div>
          </div>

          <p className="text-[#314C54] text-[20px] lg:text-[24px] font-semibold leading-[29px] text-center mt-3">
            "Together, we create exceptional solutions by empowering extraordinary talent and teamwork."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
