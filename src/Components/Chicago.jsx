import React from "react";
import two_jointimg from "../assets/images/two_jointimg1.jpg";

const Chicago = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-3 lg:max-w-[1165px] md:py-[60px] py-[40px] lg:py-[124.5px] flex items-center w-full justify-center lg:justify-between  lg:gap-[40px] max-lg:flex-wrap">
          <div className="lg:w-[485px]"data-aos="fade-right">
            <img
              className="max-h-[600px] max-w-[485px] w-full"
              src={two_jointimg}
              alt="#"
            />
          </div>
          <div className="lg:w-[570px] max-lg:pt-[24px] "data-aos="fade-left">
            <h3 className="ff_libre text-[30px] md:text-[36px] font-medium leading-[117.5%]">
              Evergreen Landscapes is a full-service landscaping company
              servicing the{" "}
              <span className="ff_libre italic font-medium text-[#88c701]">
                Chicago
              </span>{" "}
              land area.
            </h3>
            <p className="ff_poppins font-normal text-base text-[#808080] pt-[18px] leading-[150%]">
              Our team is dedicated to giving our clients the very best of
              landscaping in a safe and professional manner.
              <span className="ff_poppins py-[4px] text-base block flex]">
                Founded in 2012, Evergreen Landscapes (formerly David's Lawn
                Care) has come a long way from its beginnings. When we first
                started out, our passion for providing quality and affordable
                services to our valuable clients drove us to take action and
                gave us the momentum to turn hard work and inspiration into a
                growing landscaping company. We now serve customers all over the
                Chicago land area and are thrilled to be a part of the
                landscaping industry.
              </span>
              We hope you enjoy our services as much as we enjoy offering them
              to you. If you have any questions or comments, please don't
              hesitate to contact us.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chicago;
