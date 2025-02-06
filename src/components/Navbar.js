import React, { useState } from "react";
import { cwImg } from "../assets/MediaCall";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="">
        <div className="w-[90%] mx-auto flex justify-between items-center py-3">
          
          <div className="flex justify-center items-center gap-4 ">
            <button
              className="hidden w-[30px] h-[30px] p-1 lg:flex justify-center items-center mr-2"
              onClick={toggleMenu}
            >
              <img src={cwImg.hamburger} alt="" />
            </button>

            <div className="flex gap-2 items-center">
              <div>
                <img
                  className="h-16 w-16 rounded-full mlg:h-10 xs:h-8"
                  src={cwImg.logo}
                  alt=""
                />
              </div>
              {/* <div className="text-[18px] font-[700] leading-[27px] poppins">
                <h1>Codewolfers Innovations</h1>
              </div> */}
            </div>

            {/* <div className="hidden lg:flex">

            </div> */}
          </div>

          <div className="text-[18px] font-[500] leading-[27px] poppins list-none flex gap-5 items-center lg:hidden">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#0A61CB] text-[#FFFFFF] px-3 py-2 rounded-full"
                  : "text-[#000000]"
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#0A61CB] text-[#FFFFFF] px-3 py-2 rounded-full"
                  : "text-[#000000]"
              }
            >
              <li>Portfolio</li>
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#0A61CB] text-[#FFFFFF] px-3 py-2 rounded-full"
                  : "text-[#000000]"
              }
            >
              <li>Services</li>
            </NavLink>
            <NavLink
              to="/industries-we-serve"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#0A61CB] text-[#FFFFFF] px-3 py-2 rounded-full"
                  : "text-[#000000]"
              }
            >
              <li>Industries We Serve</li>
            </NavLink>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#0A61CB] text-[#FFFFFF] px-3 py-2 rounded-full"
                  : "text-[#000000]"
              }
            >
              <li>Careers</li>
            </NavLink>
            <NavLink
              to="/our-clients"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#0A61CB] text-[#FFFFFF] px-3 py-2 rounded-full"
                  : "text-[#000000]"
              }
            >
              <li>Our Clients</li>
            </NavLink>
          </div>

          {/* <div className="bg-[#03081F] rounded-full">
            <Link to="/contact-us">
              <button className="lg:hidden text-[18px] font-[700] leading-[27px] poppins text-white py-[10px] px-10">
                Contact Us
              </button>
            </Link>
          </div> */}
          <div className="rounded-full">
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `lg:hidden text-[18px] font-[700] leading-[27px] poppins py-[10px] px-10 ${isActive ? "bg-[#0A61CB] text-[#FFFFFF] px-3 py-2 rounded-full" : "bg-[#03081F] text-white px-3 py-2 rounded-full"
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>

          {isMobileMenuOpen && (
            <div className=" w-full h-screen top-0 left-0 fixed flex flex-col bg-white z-50">
              <div className="h-16 flex items-center justify-between w-[90%] mx-auto">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 xs:h-8 w-auto"
                    src={cwImg.logo}
                    alt="Parsal Logo"
                  />
                </div>
                {/* Close button */}
                <button
                  className=" w-[30px] h-[30px] p-1 flex justify-center items-center"
                  onClick={closeMenu}
                >
                  <img src={cwImg.close} alt="Close Menu" />
                </button>
              </div>

              <div className="top-16 left-0 fixed flex flex-col w-full inter font-[500] text-[18px] xs:text-[14px] leading-[27px] poppins list-none">
                <Link to="/">
                  <li
                    className="text-[var(--clr-grey-1)] hover:text-[var(--clr-blue-1)] py-[12px] pl-[28px] smp:pl-[10px] border-b"
                    onClick={closeMenu}
                  >
                    Home
                  </li>
                </Link>
                <Link to="/portfolio">
                  <li
                    className="text-[var(--clr-grey-1)] hover:text-[var(--clr-blue-1)] py-[12px] pl-[28px] smp:pl-[10px] border-b"
                    onClick={closeMenu}
                  >
                    Portfolio
                  </li>
                </Link>
                <Link to="/services">
                  <li
                    className="text-[var(--clr-grey-1)] hover:text-[var(--clr-blue-1)] py-[12px] pl-[28px] smp:pl-[10px] border-b"
                    onClick={closeMenu}
                  >
                    Services
                  </li>
                </Link>
                <Link to="/industries-we-serve">
                  <li
                    className="text-[var(--clr-grey-1)] hover:text-[var(--clr-blue-1)] py-[12px] pl-[28px] smp:pl-[10px] border-b"
                    onClick={closeMenu}
                  >
                    Industries We Serve
                  </li>
                </Link>
                <Link to="/careers">
                  <li
                    className="text-[var(--clr-grey-1)] hover:text-[var(--clr-blue-1)] py-[12px] pl-[28px] smp:pl-[10px] border-b"
                    onClick={closeMenu}
                  >
                    Career
                  </li>
                </Link>
                <Link to="/our-clients">
                  <li
                    className="text-[var(--clr-grey-1)] hover:text-[var(--clr-blue-1)] py-[12px] pl-[28px] smp:pl-[10px] border-b"
                    onClick={closeMenu}
                  >
                    Our Clients
                  </li>
                </Link>
                <Link to="/contact-us">
                  <button onClick={closeMenu} className="text-[var(--clr-grey-1)] hover:text-[var(--clr-blue-1)] py-[12px] pl-[28px] smp:pl-[10px] border-b w-full text-left">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
