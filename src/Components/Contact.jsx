import React, { useRef, useState } from "react";
import { Phn_icon, Gmail_icon } from "./Svg_icon";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    number: "",
    email: "",
    address: "",
    message: "",
  });
  const form = useRef();
  const inputValues = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const savedData = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      name: "",
      number: "",
      email: "",
      address: "",
      message: "",
    });
    emailjs
      .sendForm("service_lovg0cx", "template_ui4dlp9", form.current, {
        publicKey: "YfjrkdGGojcealW-n",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <section id="contact" className=" bg-cover custom_bg md:max-h-[484px] bg-no-repeat bg-center md:mt-[60px]  lg:mt-[96px] md:mb-[50px] lg:mb-[74.91px] md:pt-[50px] pt-[35px] lg:pt-[66px] pb-[35px] md:pb-[50px] lg:pb-[76px]">
        <div className="max-w-[964px] px-3 mx-auto flex max-md:flex-wrap  item-center justify-between md:relative">
          <div className="md:w-[48%] w-full">
            <h2 className="ff_libre text-[30px] sm:text-[36px] max-md:text-center  mb-[20px] leading-[1.389] text-black ">
              Contact Us
            </h2>
            <div className="flex sm:gap-4 gap-3 mb-[11px] items-center">
              <a href="/">
                <Phn_icon />
              </a>
              <span className="ff_poppins text-[#484b47] leading-[1.625] inline-block">
                (312) 610-9790
              </span>
            </div>
            <div className="flex sm:gap-4 gap-3  items-center mb-[18px] md:mb-[29px]">
              <a href="/">
                <Gmail_icon />
              </a>
              <span className="ff_poppins text-[#484b47]  leading-[1.625] inline-block">
                info@evergreenlandscapesco.com
              </span>
            </div>
            <p className="ff_libre text-black  leading-[1.625] mb-1">Hours</p>
            <p className="ff_poppins leading-[1.625]  lg:max-w-[161px] text-[#484B47] mb-[16px] md:mb-[21px]">
              MON-FRI: 9AM - 5PM SAT-SUN: CLOSED
            </p>
            <p className="ff_poppins leading-[1.5] text-[#7a7f79] md:max-w-[309px]">
              Contact us today for a free no obligation consultation
            </p>
          </div>
          <div className="md:w-[51.583%] w-full md:absolute end-0 max-md:mt-[16px] top-[-40%] border-[6px] border-solid rounded-[16px] border-[#EEF7EA] pe-[26px] ps-[27px] pt-[26.09px] pb-[30px] bg-white">
            <h3 className="text-[21px] sm:text-[24px] ff_libre leading-[1.5834] text-black md:max-w-[420px] mb-[30px]">
              Contact us! someone from{" "}
              <span className="italic font-medium text-[#88c701] ff_libre">
                {" "}
                Evergreen{" "}
              </span>{" "}
              will reach out to you soon
            </h3>
            <form
              ref={form}
              onSubmit={savedData}
              className=" flex flex-col gap-[9px]"
            >
              <input
                type="text"
                name="name"
                required
                value={data.name}
                onChange={inputValues}
                autoComplete="off"
                placeholder="Jhone Doe"
                className=" resize-none border-[1px] border-solid rounded-[10px] border-[#E6E6E6] px-[11px] h-[48px] ff_poppins placeholder:text-[#7F7F7F]   focus:border-[#88c701] focus:outline-1 focus:outline-[#E6E6E6] focus:outline-offset-[2px]"
              />
              <input
                type="number"
                name="number"
                required
                value={data.number}
                onChange={inputValues}
                autoComplete="off"
                placeholder="Phone"
                min={0}
                className=" resize-none border-[1px] border-solid rounded-[10px] border-[#E6E6E6] px-[11px] h-[48px] ff_poppins placeholder:text-[#7F7F7F] focus:border-[#88c701] focus:outline-1 focus:outline-[#E6E6E6] focus:outline-offset-[2px]"
              />
              <input
                type="Email"
                name="email"
                required
                value={data.email}
                onChange={inputValues}
                autoComplete="off"
                placeholder="Email"
                className="resize-none border-[1px] border-solid rounded-[10px] border-[#E6E6E6] px-[11px] h-[48px] ff_poppins placeholder:text-[#7F7F7F] focus:border-[#88c701] focus:outline-1 focus:outline-[#E6E6E6] focus:outline-offset-[2px]"
              />
              <input
                type="text"
                name="address"
                required
                value={data.address}
                onChange={inputValues}
                autoComplete="off"
                placeholder="Address"
                className=" resize-none border-[1px] border-solid rounded-[10px] border-[#E6E6E6] px-[11px] h-[48px] ff_poppins placeholder:text-[#7F7F7F] focus:border-[#88c701] focus:outline-2 focus:outline-[#e6e6e6] focus:outline-offset-[2px]"
              />
              <textarea
                placeholder="message"
                required
                name="message"
                value={data.message}
                onChange={inputValues}
                autoComplete="off"
                className="h-[148px] resize-none border-[1px] border-solid rounded-[10px] border-[#E6E6E6] px-[11px] py-[15px] ff_poppins placeholder:text-[#7F7F7F] focus:border-[#88c701] focus:outline-2 focus:outline-[#E6E6E6] focus:outline-offset-[2px]"
              ></textarea>
              <input
                type="button"
                value="Send Message"
                onClick={savedData}
                className="py-[15px] w-full mt-[23.91px] bg-[#88c701] hover:bg-[white] hover:text-[#88c701] border-[#88c701] border-[1px] duration-300 ease-linear transition-all   text-white rounded-[25px] leading-[1.25]"
              />{" "}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
