import React from "react";
import backgroundImage from "../assets/bg.jpg";

import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { TbBrandTwitter } from "react-icons/tb";
import { FiDownload, FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Banner = () => {
  return (
    <div id="home" className="h-[70vh] md:h-[100vh] relative  ">
      <div className="h-[60vh]  ">
        <img
          className="h-full w-full object-cover absolute"
          src={backgroundImage}
          alt=""
        />
        <div className="absolute md:mt-[8rem] mt-[5rem] flex flex-col gap-3 justify-center items-center w-full z-10">
          <div className="flex items-center justify-center md:mt-10 text-xl">
            <div className="flex gap-6 mt-5">
              <span>
                <BsInstagram className=" text-[19px] text-gray-200 hover:text-gray-400 cursor-pointer " />
              </span>
              <span>
                <TbBrandTwitter className=" text-[19px] text-gray-200 hover:text-gray-400 cursor-pointer " />
              </span>
              <span>
                <FiGithub className=" text-[19px] text-gray-200 hover:text-gray-400 cursor-pointer " />
              </span>
              <span>
                <FiLinkedin className=" text-[19px] text-gray-200 hover:text-gray-400 cursor-pointer " />
              </span>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center mt-12">
            <h2 className="text-white text-2xl md:text-3xl">Hello</h2>
            <h1 className=" text-white text-[2.2rem] md:text-[3.2rem]">
              I Am A Designer
            </h1>
            <div className="flex gap-3 items-center justify-center mt-4">
              <span className="line1 h-1 w-12 bg-white"></span>
              <div className="flex flex-col items-center justify-center">
                <p className=" text-white text-lg">WEB DEVELOPER</p>{" "}
                <span className="bg-white h-2 w-2 rounded-full"></span>
                <p className=" text-white text-lg">UI/UX DESIGNER</p>
              </div>
              <span className="line2 h-1 w-12 bg-white"></span>
            </div>
            <a
              href="#"
              className="md:mt-8 bg-[#fff] hover:scale-105 transition duration-500 cursor-pointer text-[#7a7a78] py-3 px-8 mt-6 rounded-3xl "
            >
              HIRE ME
            </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-[#11141d]   w-full h-full "></div>
      </div>
    </div>
  );
};

export default Banner;
