// import React from "react";
// import { cwImg } from "../assets/MediaCall";

// const Footer = () => {
//   return (
//     <>
//       <div className="bg-[#D9D9D9]">
//         <div className=" w-[90%] mx-auto">
//           <div className="grid grid-cols-4 ">
//             <div className="flex flex-col gap-2 ">
// <div className="flex gap-2 items-center">
//   <div>
//     <img
//       className="h-16 w-16 rounded-full"
//       src={cwImg.logo}
//       alt=""
//     />
//   </div>
//   <div className="text-[18px] font-[700] leading-[27px] poppins">
//     <h1>Codewolfers Innovations</h1>
//   </div>
// </div>

//               <div className="text-[18px] font-[500] leading-[27px] poppins">
//                 <span>CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
//               </div>
//             </div>

//             <div className="">
//               <h1 className="text-[#03081F] text-[18px] font-[700] poppins leading-[43px]">
//                 Get Exclusive Deals in your Inbox
//               </h1>
//               <div className="flex border border-gray-300 rounded-full w-[300px] md:w-[400px] bg-white">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="flex-1 px-4 py-2 outline-none text-gray-700 bg-transparent rounded-full"
//                 />
//                 <button className="bg-[#0A61CB] text-white px-6 py-2 rounded-full hover:bg-[#084a9b] transition-all duration-300">
//                   Subscribe
//                 </button>
//               </div>
//             </div>

//             <div className="list-none ">
//               <h1 className="text-[#03081F] text-[18px] font-[700] poppins leading-[43px]">
//                 Legal Pages
//               </h1>
//               <li className="text-[#000000] text-[15px] font-[400] poppins leading-[43px] underline">
//                 <a href=""></a>Terms and conditions
//               </li>
//               <li className="text-[#000000] text-[15px] font-[400] poppins leading-[43px] underline">
//                 <a href=""></a>Privacy
//               </li>
//               <li className="text-[#000000] text-[15px] font-[400] poppins leading-[43px] underline">
//                 <a href=""></a>Cookies
//               </li>
//               <li className="text-[#000000] text-[15px] font-[400] poppins leading-[43px] underline">
//                 <a href=""></a>Modern Slavery Statement
//               </li>
//             </div>

//             <div className="list-none ">
//               <h1 className="text-[#03081F] text-[18px] font-[700] poppins leading-[43px]">
//                 Important Links
//               </h1>
//               <li className="text-[#000000] text-[15px] font-[400] poppins leading-[43px] underline">
//                 <a href=""></a>Get help
//               </li>
//               <li className="text-[#000000] text-[15px] font-[400] poppins leading-[43px] underline">
//                 <a href=""></a>info@codewolfers.com
//               </li>
//               <li className="text-[#000000] text-[15px] font-[400] poppins leading-[43px] underline">
//                 <a href=""></a>+91 8810809712
//               </li>
//               <li className="text-[#000000] text-[15px] font-[400] poppins leading-[43px] underline">
//                 <a href=""></a>Instagram
//               </li>
//             </div>
//           </div>

//         </div>

//         <div className="bg-[#03081F] text-white flex justify-between">
//           <span>@2024 CodeWolfers Copyright 2024, All Rights Reserved.</span>

//           <div>
//             <span>Terms And Conditions</span>
//             <span>Privacy Policy</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;

import React from "react";
import { cwImg } from "../assets/MediaCall";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10">
      <div className="w-[90%] mx-auto  grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {/* Logo & Description */}
        <div className="space-y-4">
          {/* <h2 className="text-[18px] font-[700] poppins">
            <img className="h-16 w-16 rounded-full" src="https://img.freepik.com/premium-vector/wolf-logo-wolf-company_1313929-67.jpg?semt=ais_hybrid" alt="CodeWolfers" /> CodeWolfers Innovations
          </h2> */}
          <div className="flex gap-2 items-center">
            <div>
              <img
                className="h-16 w-16 rounded-full"
                // src={cwImg.logo}
                src="https://img.freepik.com/premium-vector/wolf-logo-wolf-company_1313929-67.jpg?semt=ais_hybrid"
                alt=""
              />
            </div>
            <div className="text-[18px] font-[700] leading-[27px] poppins">
              <h1>Codewolfers Innovations</h1>
            </div>
          </div>
          <p className="ttext-[18px] font-[500] poppins">
            Codewolfers: Crafting exceptional web and mobile apps that drive
            business growth and innovation.
          </p>
          {/* <p className="text-[18px] font-[500] poppins">Company # 403093-445, Registered with House of companies.</p> */}
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-[#03081F] text-[18px] font-[700] poppins ">
            Get Exclusive Deals in your Inbox
          </h3>
          <div className="flex w-full max-w-md items-center bg-white border border-gray-300 rounded-full">
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="w-full pl-4 pr-1 py-2 text-gray-700 border-none focus:outline-none rounded-full"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all">
              Subscribe
            </button>
          </div>
          <p className="text-xs">
            We won’t spam, read our{" "}
            <a href="#" className="text-blue-600 underline">
              email policy
            </a>
          </p>
          {/* <div className="flex gap-4 mt-4 text-2xl">
            <a href="#" className="hover:text-blue-600">
              🔵
            </a>
            <a href="#" className="hover:text-blue-600">
              ⚫
            </a>
          </div> */}
        </div>

        {/* Legal Pages */}
        <div className="space-y-4">
          <h3 className="text-[#03081F] text-[18px] font-[700] poppins ">
            Legal Pages
          </h3>
          <ul className="space-y-2 text-[#000000] text-[15px] font-[400] poppins  underline">
            <li>
              <a href="/terms-and-conditions" className="hover:text-blue-600">
                Terms and conditions
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-blue-600">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                About us
              </a>
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div className="space-y-4">
          <h3 className="text-[#03081F] text-[18px] font-[700] poppins ">
            Important Links
          </h3>
          <ul className="space-y-2 text-[#000000] text-[15px] font-[400] poppins  underline">
            <li>
              <a href="/contact-us" className="hover:text-blue-600">
                Get help
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                codewolfers@gmail.com
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
              +91 8810809712
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 bg-gray-900 text-gray-300 text-center py-4">
        <p>
          @2024 <span className="text-blue-500">CodeWolfers</span> &copy; All
          Rights Reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs mt-2">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Pricing
          </a>
          <a href="#" className="hover:text-white">
            Do not sell or share my personal information
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
