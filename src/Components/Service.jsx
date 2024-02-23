import React from "react";
import service_img1 from "../assets/images/service_img1.webp";
import service_img2 from "../assets/images/service_img2.webp";
import service_img3 from "../assets/images/service_img3.webp";
import layer from "../assets/images/layer.png";
import layer2 from "../assets/images/layer2.png";
import layer3 from "../assets/images/layer3.png";


const Service = () => {
  return (
    <>
      <section id="service">
        <div className="container mx-auto px-3 xl:max-w-[1165px]">
          <h3 className="ff_libre text-[36px] font-normal text-center">
            Our Services
          </h3>
          <div className="flex items-center justify-between gap-[24px] pt-[37.9px] max-md:flex-wrap max-md:justify-center">
            <div className="relative img_hover transition-all duration-300ms linear-ease max-w-[365px] cursor-pointer"data-aos="fade-right">
              <img className="w-[365px]" src={service_img3} alt="#" />
              <p className="ff_libre text-[22px] text-normal leading-[24px] text_hover text-white absolute bottom-[8%] left-[5%]">
                Commercial Property Services
              </p>

              <img
                className="absolute w-[365px] h-full layer top-0 bottom-0"
                src={layer3}
                alt="#"
              />

              <div></div>
            </div>
            <div className="relative img_hover max-w-[365px] transition-all duration-300ms linear-ease cursor-pointer"data-aos="zoom-in">
              <img className="w-[365px]" src={service_img1} alt="#" />
              <p className="ff_libre text-[22px] text-normal leading-[24px] text_hover text-white absolute bottom-[8%] left-[5%]">
              Residential Property Services
              </p>

              <img
                className="absolute w-[365px] h-full layer top-0 bottom-0"
                src={layer2}
                alt="#"
              />

              <div></div>
            </div>
            <div className="relative img_hover md:max-w-[365px] transition-all duration-300ms linear-ease cursor-pointer"data-aos="fade-right">
              <img className="w-[365px]" src={service_img2} alt="#" />
              <p className="ff_libre text-[22px] text-normal leading-[24px] text_hover text-white absolute bottom-[8%] left-[11%]">
                Winter Property Services
              </p>

              <img
                className="absolute w-[365px] h-full layer top-0 bottom-0"
                src={layer}
                alt="#"
              />

              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
