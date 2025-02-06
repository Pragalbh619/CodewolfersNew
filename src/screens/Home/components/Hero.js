// import React from "react";
// import { cwImg } from "../../../assets/MediaCall";

// const Hero = () => {
//   return (
//     <div className="relative w-[90%] mx-auto bg-[#FBFBFB] pt-[20px] border-[#D9D9D9] border-[1px] h-[calc(100vh-158px)] lg:h-[calc(100vh-88px)] rounded-[12px] overflow-hidden">
//       {/* Left Side - Text Content  */}
//       <div
//         className="absolute top-[50%] left-[5%] transform -translate-y-1/2 w-[45%] 
//                       sm:w-[90%]"
//       >
//         <div className="flex flex-col">
//           <span className="text-[#03081F] text-[20px] font-[400] leading-[66px] md:leading-[58px] lxs:leading-[50px] xs:leading-[42px] redressed sm:text-[18px] xs:text-[16px]">
//             A Cutting Edge
//           </span>
//           <span
//             className="text-[#03081F] text-[64px] font-[600] leading-[66px] md:leading-[58px] lxs:leading-[50px] xs:leading-[42px] poppins 
//                           xl:text-[56px] lg:text-[48px] md:text-[42px] sm:text-[36px] xs:text-[28px]"
//           >
//             Website And Mobile App{" "}
//             <span className="text-[#0A61CB]">Development</span>
//           </span>
//           <span
//             className="text-[#03081F] text-[20px] font-[400] leading-[66px] md:leading-[58px] lxs:leading-[50px] xs:leading-[42px] redressed 
//                           sm:text-[18px] xs:text-[16px]"
//           >
//             For Enhanced User Experience
//           </span>
//           <span
//             className="text-[#000000] text-[24px] font-[400] leading-[28.8px]  md:leading-[24.8px] lxs:leading-[20.8px] xs:leading-[16.8px] redressed 
//                           sm:text-[20px] xs:text-[18px]"
//           >
//             We transform Innovative web ideas into real world scenarios with
//             website development & design strategies.
//           </span>
//           <span className="text-[#03081F] text-[13px] font-[400] leading-[66px] md:leading-[58px] lxs:leading-[50px] xs:leading-[42px] poppins xs:text-[12px]">
//             Search For Services
//           </span>
//           <div
//             className="flex border border-gray-300 rounded-full w-[350px] 
//                           lg:w-[300px] md:w-[280px] sm:w-full bg-white"
//           >
//             <input
//               type="email"
//               placeholder="youremail@gmail.com"
//               className="w-full pl-4 pr-1 py-2 text-gray-700 border-none focus:outline-none rounded-full"
//             />
//             <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Image */}
//       <div
//         className="absolute top-[50%] right-[1px] transform -translate-y-1/2 w-[50%] 
//                       sm:hidden"
//       >
//         <img className="w-full max-w-[600px] " src={cwImg.hero} alt="Hero" />
//       </div>
//     </div>
//   );
// };

// export default Hero;





import React from "react";
import { cwImg } from "../../../assets/MediaCall";

const Hero = () => {
  return (
    <div className="relative w-[90%] mx-auto bg-[#FBFBFB] pt-5 border border-[#D9D9D9] h-[calc(100vh-158px)] lg:h-[calc(100vh-88px)] rounded-[12px] overflow-hidden 
                    flex flex-row-reverse items-center sm:flex-col-reverse sm:h-auto sm:py-10">
      
      {/* Right Side - Image */}
      <div className="w-1/2 flex justify-center sm:w-full">
        <img className="w-full max-w-[500px] sm:max-w-[350px]" src={cwImg.hero} alt="Hero" />
      </div>

      {/* Left Side - Text Content */}
      <div className="w-1/2 pl-10 sm:w-full sm:px-4 ">
        <div className="flex flex-col  gap-2 ">
          <span className="text-[#03081F] text-[20px] font-medium leading-[30px] sm:text-[18px] ">
            A Cutting Edge
          </span>
          <h1 className="text-[#03081F] text-[48px] font-semibold leading-[56px] md:text-[36px] sm:text-[28px]">
            Website And Mobile App <span className="text-[#0A61CB]">Development</span>
          </h1>
          <span className="text-[#03081F] text-[20px] font-medium sm:text-[18px]">
            For Enhanced User Experience
          </span>
          <p className="text-[#000] text-[18px] leading-[28px] sm:text-[16px]">
            We transform innovative web ideas into real-world scenarios with website development & design strategies.
          </p>
          {/* <span className="text-[#03081F] text-[14px] font-medium sm:text-[13px]">
            Search For Services
          </span> */}
          <div className="flex border border-gray-300 rounded-full w-[350px] lg:w-[300px] md:w-[280px] sm:w-full bg-white">
            <input 
              type="email" 
              placeholder="youremail@gmail.com" 
              className="w-full pl-4 pr-1 py-2 text-gray-700 border-none focus:outline-none rounded-l-full"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-r-full hover:bg-blue-700 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;



