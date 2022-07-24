import React from "react";
import person from "../assets/person.jpg";
const About = () => {
  return (
    <div id="about" className="flex items-center justify-center p-4 mt-8 ">
      <div
        className="flex items-center  flex-col-reverse gap-2 md:flex-row
      md:w-[80vw]  justify-between md:justify-between md:gap-9 "
      >
        <div className="rounded-tl-xl rounded-br-xl md:h-[500px] md:w-[50%]">
          <img
            className="rounded-tl-xl rounded-br-xl md:h-full md:w-full object-contain"
            src={person}
            alt=""
          />
        </div>
        <div className="md:w-[50%]">
          <h1 className="text-2xl text-[#3a3a3a] font-bold mb-3">Hello,</h1>
          <h2 className="text-[#6c6c6c] font-semibold mb-2">
            I AM A UI/UX DESIGNER
          </h2>
          <p className="text-[#252525aa] md:w-[70%]">
            i'm a Web Dev. and UI/UX Designer based in Dubai, i have a good
            understanding of Web development and i get good feedback from
            clients
          </p>
          <div className="bg-gray-300 w-ful h-[3px] mt-2 mb-2"> </div>
          <div className="flex flex-col md:px-4 justify-between px-6 ">
            <div className="flex flex-col justify-between items-center w-full">
              <div className="flex justify-between w-full mb-2">
                <p className="text-[bababa] font-semibold">NAME</p>{" "}
                <span className="text-start">Shedrack Tobi</span>
              </div>
              <div className="flex just justify-between w-full mb-2">
                <p className="text-[bababa] font-semibold">AGE</p>
                <span className="">24</span>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center w-full">
              <div className="flex justify-between w-full mb-2">
                <p className="text-[bababa] font-semibold">EMAIL</p>{" "}
                <span>Usheddy07@gmail.com</span>
              </div>
              <div className="flex justify-between w-full mb-2">
                <p className="text-[bababa] font-semibold">ADDRESS</p>{" "}
                <span>walter road , Dubai</span>
              </div>
            </div>
          </div>

          <a
            className="flex items-center justify-center mt-5 w-1/2 mx-auto py-4 mb-4 text-white bg-black rounded-3xl"
            href="#"
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
