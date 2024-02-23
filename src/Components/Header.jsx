import React from "react";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import Hamburger from "hamburger-react";
import hero_img1 from "../assets/images/hero_img1.webp";
import hero_img2 from "../assets/images/hero_img2.webp";
import hero_img3 from "../assets/images/hero_img3.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import right_arrow from "../assets/images/arrow_right.png";
import left_arrow from "../assets/images/left_arrow.png";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [Show, setShow] = useState(false);
  const slider = React.useRef(null);

  var settings = {
    infinite: true,
    arrows: false,
    fade: true,
    cssEase: "linear",
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  if (Show === true) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  const moment = () => {
    setShow(!Show);
    setOpen(!isOpen);
  };
  return (
    <>
      <div
        id="home"
        className="mx-auto container-fluid sm:min-h-screen relative overflow-hidden "
      >
        <button>
          <img
            onClick={() => slider?.current?.slickPrev()}
            className="absolute md:block hidden right-[7%] top-[47%] z-[4]"
            src={right_arrow}
            alt=""
          />
        </button>
        <button>
          <img
            onClick={() => slider?.current?.slickNext()}
            className="absolute left-[7%] md:block hidden top-[47%] z-[4]"
            src={left_arrow}
            alt=""
          />
        </button>
        <Slider ref={slider} {...settings}>
          <div className="relative ">
            <img
              className="w-full h-[75vh] sm:h-screen object-cover"
              src={hero_img1}
              alt="#"
            />
            <div className="absolute bottom-[10%] left-[10%]">
              <h1 className="ff_libre font-bold leading-[47px] text-[30px] sm:text-[40px] max-w-[471px] text-white">
                Ut pretium egestas sagittis convallis
              </h1>
              <p className="max-w-[548px] text-base ff_poppins leading-[20px] text-white pt-[8px]">
                Platea neque amet a dolor. Libero malesuada pellentesque
                ultrices urna pellentesque. Varius in est porttitor
                pellentesque.
              </p>
              <button className="ff_poppins text-base text-white hover:bg-[white] hover:text-[#88c701] duration-300 ease-linear transition-all font-medium bg-[#88c701] mt-[30px] rounded-[40px] py-[15px] px-[27px]">
                Request a quote
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full h-[75vh] sm:h-screen object-cover "
              src={hero_img2}
              alt="#"
            />
            <div className="absolute bottom-[10%] left-[10%]">
              <h1 className="ff_libre font-bold leading-[47px] text-[30px] sm:text-[40px] max-w-[376px] text-white">
                Sit amet in vulputate ultrices
              </h1>
              <p className="max-w-[548px] text-base ff_poppins leading-[20px] text-white pt-[8px]">
                Platea neque amet a dolor. Libero malesuada pellentesque
                ultrices urna pellentesque. Varius in est porttitor
                pellentesque.
              </p>
              <button className="ff_poppins text-base text-white hover:bg-[white] hover:text-[#88c701]  duration-300 ease-linear transition-all font-medium bg-[#88c701] mt-[30px] rounded-[40px] py-[15px] px-[27px]">
                Request a quote
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full h-[75vh] sm:h-screen object-cover"
              src={hero_img3}
              alt="#"
            />
            <div className="absolute bottom-[10%] left-[10%]">
              <h1 className="ff_libre font-bold leading-[47px] text-[30px] sm:text-[40px] max-w-[399px] text-white">
                Donec orci mauris in enim viverra
              </h1>
              <p className="max-w-[548px] text-base ff_poppins leading-[20px] text-white pt-[8px]">
                Platea neque amet a dolor. Libero malesuada pellentesque
                ultrices urna pellentesque. Varius in est porttitor
                pellentesque.
              </p>
              <button className="ff_poppins hover:bg-[white] hover:text-[#88c701]  duration-300 ease-linear transition-all text-base text-white font-medium bg-[#88c701] mt-[30px] rounded-[40px] py-[15px] px-[27px]">
                Request a quote
              </button>
            </div>
          </div>
        </Slider>
        <nav className=" mx-auto max-lg:pe-3 absolute top-0 bg-[white] w-full">
          <div className="flex justify-between items-center">
            <img
              className="cursor-pointer max-w-[250px] sm:max-w-[332px]"
              src={logo}
              alt="#"
            />
            <ul
              className={`flex lg:justify-end justify-center gap-[23px] xl:gap-[28px] ${
                Show ? "left-0" : "left-[-100%]"
              } h-full w-full  flex-col lg:flex-row top-0 text-center z-20 bg-white   items-center duration-500 fixed lg:static`}
            >
              <li>
                <a
                  onClick={moment}
                  className="ff_poppins text-[16px] font-normal text-black hover:text-[#88c701] relative after:absolute after:w-0 after:h-[2px] after:start-1 after:end-1 after:bottom-[-1px]  after:bg-[#88c701] hover:after:w-full hover:after:start-0 after:transition-all after:duration-300 after:ease-linear  after:rounded"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={moment}
                  className="ff_poppins text-[16px] font-normal text-black hover:text-[#88c701] relative after:absolute after:w-0 after:h-[2px] after:start-1 after:end-1 after:bottom-[-1px]  after:bg-[#88c701] hover:after:w-full hover:after:start-0 after:transition-all after:duration-300 after:ease-linear  after:rounded"
                  href="#abouts"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  onClick={moment}
                  className="ff_poppins text-[16px] font-normal text-black hover:text-[#88c701] relative after:absolute after:w-0 after:h-[2px] after:start-1 after:end-1 after:bottom-[-1px]  after:bg-[#88c701] hover:after:w-full hover:after:start-0 after:transition-all after:duration-300 after:ease-linear  after:rounded"
                  href="#service"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  onClick={moment}
                  className="ff_poppins text-[16px] font-normal text-black hover:text-[#88c701] relative after:absolute after:w-0 after:h-[2px] after:start-1 after:end-1 after:bottom-[-1px]  after:bg-[#88c701] hover:after:w-full hover:after:start-0 after:transition-all after:duration-300 after:ease-linear  after:rounded"
                  href="#gallery"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  onClick={moment}
                  className="ff_poppins text-[16px] font-normal text-black hover:text-[#88c701] relative after:absolute after:w-0 after:h-[2px] after:start-1 after:end-1 after:bottom-[-1px]  after:bg-[#88c701] hover:after:w-full hover:after:start-0 after:transition-all after:duration-300 after:ease-linear  after:rounded"
                  href="#contact"
                >
                  Contact Us
                </a>
              </li>
              <button className="ff_poppins font-medium text-[16px] lg:ms-[10px] text-white bg-[#88c701] px-[20px] lg:px-[34.5px] py-[18px] lg:py-[36px] hover:bg-[#b3db5c]  duration-300 ease-linear transition-all ">
                Request a quote
              </button>
            </ul>
            <div className="z-30 lg:hidden " onClick={() => setShow(!Show)}>
              <button>
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
