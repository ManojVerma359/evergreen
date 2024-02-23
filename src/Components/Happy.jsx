import React from "react";
import { Dottes, Star_5 } from "./Svg_icon";

const Happy = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-[1402px] container px-3 pb-[40px] md:pb-[60px] lg:pb-[104px]">
          <h4 className="text-[30px] sm:text-[36px] ff_libre leading-[117.5%] text-center">
            Check out our{" "}
            <span className="ff_libre text-[#88c701] italic">happy clients</span>
          </h4>
          <div className="pt-[39px] flex justify-between max-lg:flex-wrap gap-[19px]">
            <div className="lg:w-[32%]  h-full border border-[#e5e5e5] rounded-[16px] py-[20px] px-[19px]">
                <Dottes/>
                <p className="ff_poppins italic text-base text-[#1D2631] py-[15px] leading-[150%]">Evergreen provided high quality service in a timely manner for me. David was a pleasure to deal with, service is unparalleled. If you want the job done right, use Evergreen!</p>
                <p className="ff_libre text-base font-normal leading-[160%]">E. B.</p>
                <Star_5/>
            </div>
            <div className="lg:w-[32%]  h-full border border-[#e5e5e5] rounded-[16px] py-[20px] px-[19px]">
                <Dottes/>
                <p className="ff_poppins italic text-base text-[#1D2631] py-[15px] leading-[150%]">It is quite clear that Dave truly cares about his clients and about the work he does for them. If you hire his service, your lawn care goals and ambitions will become is own, and he will ensure you are not just satisfied but thrilled.</p>
                <p className="ff_libre text-base font-normal leading-[160%]">S. K.</p>
                <Star_5/>
            </div>
            <div className="lg:w-[32%] h-full border border-[#e5e5e5] rounded-[16px] py-[20px] px-[19px]">
                <Dottes/>
                <p className="ff_poppins italic text-base text-[#1D2631] py-[15px] leading-[150%]">Evergreen Landscapes does amazing work and they are very well priced. I definitely will use them for all my landscaping needs.</p>
                <p className="ff_libre text-base font-normal leading-[160%]">Y. C.</p>
                <Star_5/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Happy;
