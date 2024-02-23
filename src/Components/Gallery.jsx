import React from "react";
import galler_img1 from "../assets/images/gallery_img1.webp";
import galler_img2 from "../assets/images/gallery_img2.webp";
import galler_img3 from "../assets/images/gallery_img3.webp";
import galler_img4 from "../assets/images/gallery_img4.webp";
import galler_img5 from "../assets/images/gallery_img5.webp";
import galler_img6 from "../assets/images/gallery_img6.webp";
import galler_img7 from "../assets/images/gallery_img7.webp";
import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  var slick_slider = {
    infinite: true,
    arrows: false,
    speed: 3200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplayspeed:0,
    variableWidth: true,
    rtl:false,
    cssEase: 'linear'
  };
  var slick_slider1 = {
    infinite: true,
    arrows: false,
    speed: 3200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplayspeed:0,
    variableWidth: true,
    rtl:true,
    cssEase: 'linear'
  };

  return (
    <>
      <section id="gallery" className="lg:py-[98px] md:py-[60px] py-[40px]">
        <div className="container mx-auto px-3 max-w-[1165px]">
          <h4 className="ff_libre text-[36px] font-normal text-center pb-[45px]">
            Gallery
          </h4>
        </div>
        <Slide {...slick_slider}>
          <div className="h-[212px] sm:h-[297px] w-full pe-[16px]">
            <img className="h-full !w-[267px] object-cover object-top rounded-[16px] " src={galler_img1} alt="#" />
          </div>
          <div className="h-[212px] sm:h-[297px] w-full pe-[16px]">
            <img className="h-full w-full" src={galler_img2} alt="#" />
          </div>
          <div className="h-[212px] sm:h-[297px]  pe-[16px]">
            <img className="h-full w-[267px]" src={galler_img3} alt="#" />
          </div>
          <div className="h-[212px] sm:h-[297px] w-full pe-[16px]">
            <img className="h-full " src={galler_img4} alt="#" />
          </div>
          <div className="h-[212px] sm:h-[297px] w-full pe-[16px]">
            <img className="h-full !w-[267px]  object-cover rounded-[16px]" src={galler_img1} alt="#" />
          </div>
          <div className="h-[212px] sm:h-[297px] w-full pe-[16px]">
            <img className="h-full " src={galler_img2} alt="#" />
          </div>
          <div className="h-[212px] sm:h-[297px]  pe-[16px]">
            <img className="h-full w-[267px]" src={galler_img3} alt="#" />
          </div>
          <div className="h-[212px] sm:h-[297px] w-full pe-[16px]">
            <img className="h-full " src={galler_img4} alt="#" />
          </div>

        </Slide>
        <Slide {...slick_slider1} className="pt-[15px]">
          <div className="pe-[16px]  h-[212px] sm:h-[297px]">
            <img className=" sm:w-[548px] w-[300px] h-full" src={galler_img5} alt="" />
          </div>
          <div className="pe-[16px]  h-[212px] sm:h-[297px]">
            <img className=" sm:w-[548px] w-[300px] h-full rounded-[16px] object-center object-cover" src={galler_img6} alt="" />
          </div>
          <div className="pe-[16px]  h-[212px] sm:h-[297px] ">
            <img className="sm:w-[548px] w-[300px] h-full" src={galler_img7} alt="" />
          </div>
          <div className="pe-[16px]  h-[212px] sm:h-[297px]">
            <img className=" sm:w-[548px] w-[300px] h-full" src={galler_img5} alt="" />
          </div>
          <div className="pe-[16px]  h-[212px] sm:h-[297px]">
            <img className=" sm:w-[548px] w-[300px] h-full rounded-[16px] object-center object-cover" src={galler_img6} alt="" />
          </div>
          <div className="pe-[16px]  h-[212px] sm:h-[297px] ">
            <img className="sm:w-[548px] w-[300px] h-full" src={galler_img7} alt="" />
          </div>
          <div className="pe-[16px]  h-[212px] sm:h-[297px]">
            <img className=" sm:w-[548px] w-[300px] h-full" src={galler_img5} alt="" />
          </div>
          <div className="pe-[16px]  h-[212px] sm:h-[297px]">
            <img className=" sm:w-[548px] w-[300px] h-full rounded-[16px] object-center object-cover" src={galler_img6} alt="" />
          </div>
          <div className="pe-[16px]  h-[212px] sm:h-[297px] ">
            <img className="sm:w-[548px] w-[300px] h-full" src={galler_img7} alt="" />
          </div>
        </Slide>

      </section>
    </>
  );
};

export default Gallery;
