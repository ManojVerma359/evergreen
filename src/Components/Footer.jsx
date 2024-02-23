import React from "react";
import footer_logo from "../assets/images/footer_logo1.jpg";
import { Facebook, Instagram, Twitter } from "./Svg_icon";

const Footer = () => {
    const d = new Date();
let year = d.getFullYear();


  return (
    <>
     <div className="bg-[#fafdf9] pt-[40px] sm:pt-[61px]">
     <div className="container px-3 mx-auto max-w-[1165px]">
        <img className="cursor-pointer w-[124px]" src={footer_logo} alt="" />

        <div className="flex items-center lg:justify-between max-lg:flex-wrap ">
          <div>
            <p className="ff_poppins text-base font-normal leading-[160%] lg:max-w-[410px] pt-[5px]">
              Lorem ipsum dolor sit amet consectetur. Suspendisse semper felis
              vulputate leo. Id duis morbi facilisis consequat mattis facilisi.{" "}
            </p>
          </div>
          <div className="flex lg:items-end  flex-col lg:pt-0 pt-[20px]">
            <ul className="flex max-sm:flex-wrap gap-[16px] sm:gap-[28px]">
              <li>
                <a
                  className="ff_poppins text-base leading-[160%] font-normal hover:text-[#88c701] relative after:absolute after:w-0 after:h-[2px] after:start-1 after:end-1 after:bottom-[-1px]  after:bg-[#88c701] hover:after:w-full hover:after:start-0 after:transition-all after:duration-300 after:ease-linear  after:rounded"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="ff_poppins text-base leading-[160%] font-normal hover:text-[#88c701] relative after:absolute after:w-0 after:h-[2px] after:start-1 after:end-1 after:bottom-[-1px]  after:bg-[#88c701] hover:after:w-full hover:after:start-0 after:transition-all after:duration-300 after:ease-linear  after:rounded"
                  href="#service"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  className="ff_poppins text-base leading-[160%] font-normal hover:text-[#88c701] relative after:absolute after:w-0 after:h-[2px] after:start-1 after:end-1 after:bottom-[-1px]  after:bg-[#88c701] hover:after:w-full hover:after:start-0 after:transition-all after:duration-300 after:ease-linear  after:rounded"
                  href="#gallery"
                >
                  Photos
                </a>
              </li>
              <li>
                <a
                  className="ff_poppins text-base leading-[160%] font-normal hover:text-[#88c701] relative after:absolute after:w-0 after:h-[2px] after:start-1 after:end-1 after:bottom-[-1px]  after:bg-[#88c701] hover:after:w-full hover:after:start-0 after:transition-all after:duration-300 after:ease-linear  after:rounded"
                  href="#contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className="gap-[16px] flex pt-[14px] md:pt-[21px]">
              <li>
                <a className=" " href="https://twitter.com/?lang=en">
                  <Twitter />
                </a>
              </li>
              <li>
                <a href="https://facebook.com/?lang=en">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/?lang=en">
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="w-full h-[1.5px] mt-[25px] md:mt-[40px]  lg:mt-[54px] bg-[#dbe1d8]" />
        <p className="ff_poppins text-base font-normal  leading-[160%] text-center py-[20px] md:py-[25px] lg:py-[34.5px] " >
          Copyright © {year} Evergreen Landscapes LLC. All
          rights reserved.
        </p>
      </div>
     </div>
    </>
  );
};

export default Footer;
