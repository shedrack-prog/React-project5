import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex items-center justify-center py-32 px-4 bg-gray-100"
    >
      <div className="flex gap-4 md:gap-8 flex-col md:flex-row md:w-[80vw]">
        <div className="md:w-[60%]">
          <h1 className="text-3xl font-bold mb-3">My Skills</h1>
          <p className="text-gray-700">
            i have a good knowledge of web design and web devlopment so
            therefore i have used this to give many company a good name and
            brand
          </p>
        </div>
        <div className="flex flex-col gap-7 md:w-[100%]">
          <div>
            <div className="flex w-full justify-between items-center">
              <p>Photoshop</p>
              <p className="text-sm">75%</p>
            </div>
            <div className="relative bg-gray-300 w-full h-1">
              <div className="w-[80%] h-full bg-gray-800" />
            </div>
          </div>
          <div>
            <div className="flex w-full justify-between items-center">
              <p>HTML 5</p>
              <p className="text-sm">95%</p>
            </div>

            <div className="relative bg-gray-300 w-full h-1">
              <div className="w-[95%] h-full bg-gray-800" />
            </div>
          </div>
          <div>
            <div className="flex w-full justify-between items-center">
              <p>Wordpress</p>
              <p className="text-sm">85%</p>
            </div>

            <div className="relative bg-gray-300 w-full h-1">
              <div className="w-[85%] h-full bg-gray-800" />
            </div>
          </div>
          <div>
            <div className="flex w-full justify-between items-center">
              <p>Tailwind CSS</p>
              <p className="text-sm">90%</p>
            </div>

            <div className="relative bg-gray-300 w-full h-1">
              <div className="w-[90%] h-full bg-gray-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
