import React from "react";
import {
  MdWeb,
  MdOutlineBrandingWatermark,
  MdProductionQuantityLimits,
} from "react-icons/md";

const Services = () => {
  const data = [
    {
      id: 1,
      icon: { MdProductionQuantityLimits },
      title: "Product Design",
      desc: "Heloo world this is just some random text adn you can change it later because it is yours now",
    },
    {
      id: 2,
      icon: {
        MdWeb,
      },
      title: "Web Design",
      desc: "Heloo world this is just some random text adn you can change it later because it is yours now",
    },
    {
      id: 3,
      icon: {
        MdOutlineBrandingWatermark,
      },

      title: "Branding",
      desc: "Heloo world this is just some random text adn you can change it later because it is yours now",
    },
  ];
  return (
    <div
      id="services"
      className=" md:mt-4 bg-white flex items-center mt-6 px-4  md:w-[70vw] lg:w-[60vw] md:mx-auto"
    >
      <div className="flex flex-wrap  md:gap-2 justify-center w-full h-full px-4 md:w-full">
        {data.map(({ icon, title, desc }) => (
          <div className="md:w-[45%] w-full h-[300px] px-3 shadow-md flex items-center justify-center">
            <div className="flex items-center justify-center flex-col gap-4">
              <img className="text-3xl text-gray-800" />
              <p className="text-xl font-semibold">{title}</p>
              <p className="px-3 text-center text-gray-800">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
