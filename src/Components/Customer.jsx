import React from "react";
import Svg_icon1, { Svg_icon2, Svg_icon3 } from "./Svg_icon";

const Customer = () => {
  return (
    <>
      <section id="abouts">
        <div className="py-[40px] md:py-[60px] lg:py-[87.5px] text-center">
          <h2 className="ff_libre italic text-[30px] sm:text-[36px] font-medium">
            Licensed <span className="text-[#88c701]">-</span> Bonded{" "}
            <span className="text-[#88c701]">-</span> Insured
          </h2>
        </div>
        <div className="custom_bg">
          <div className="container mx-auto px-3 ">
            <div className="lg:py-[64px] md:py-[60px] py-[40px] flex items-center justify-center flex-col">
              <h2 className="ff_libre  text-[30px] sm:text-[36px] font-medium max-w-[472px] text-center">
                Why{" "}
                <span className="text-[#88c701] italic ff_libre font-medium">
                  customers choose{" "}
                </span>{" "}
                Evergreen Landscapes LLC
              </h2>
              <div className="lg:pt-[44px] md:pt-[30px] pt-[24px] flex max-lg:flex-wrap items-center max-lg:justify-center gap-[17px]">
                <div className="sm:w-[267px] w-full h-[235px] cursor-pointer svg_hover bg-[#f0f8ec] hover:bg-[white] transition-all duration-400 ease-linear border border-[#e3f0d8] rounded-[15px] pt-[40px] pb-[49px] ps-[20px] pe-[24px] max-sm:flex max-sm:flex-col max-sm:items-center"data-aos="fade-right">
                  <Svg_icon1 />
                  <p className="ff_libre text-[20px] font-medium text-black pt-[28px]">
                    Creative Solutions
                  </p>
                  <p className="ff_poppins text-base font-normal pt-[11px] text-[#878b85]">
                    Landscape Design & Build
                  </p>
                </div>
                <div className="sm:w-[267px] w-full h-[235px] cursor-pointer svg_hover bg-[#f0f8ec] hover:bg-[white] transition-all duration-400 ease-linear border border-[#e3f0d8] rounded-[15px] pt-[30px] pb-[25px] ps-[13px] pe-[8px] max-sm:flex max-sm:flex-col max-sm:items-center"data-aos="zoom-in">
                  <Svg_icon2 />
                  <p className="ff_libre text-[20px] font-medium text-black pt-[28px]">
                    Customer Service
                  </p>
                  <p className="ff_poppins text-base font-normal pt-[11px] text-[#878b85]">
                    Our team is on call to deliver excellence to our clients
                  </p>
                </div>
                <div className="lg:w-[267px] max-sm:w-full h-[235px] cursor-pointer svg_hover bg-[#f0f8ec] hover:bg-[white] transition-all duration-400 ease-linear border border-[#e3f0d8] rounded-[15px] pt-[40px] pb-[49px] ps-[16px] pe-[15px] max-sm:flex max-sm:flex-col max-sm:items-center"data-aos="fade-left">
                  <Svg_icon3 />
                  <p className="ff_libre text-[20px] font-medium text-black pt-[28px]">
                    Peace of mind
                  </p>
                  <p className="ff_poppins text-base font-normal pt-[11px] text-[#878b85]">
                    Proven Proactive Approach
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customer;
