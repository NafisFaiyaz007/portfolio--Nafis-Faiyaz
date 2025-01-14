import React from "react";
import {
  FaLaptopCode,
  FaDatabase,
  FaRobot,
  FaPaintBrush,
  FaCogs,
  FaChartLine,
} from "react-icons/fa"; // Import Font Awesome icons

const Expertise = () => {
  return (
    <div className="bg-black font-raleway bg-opacity-30 py-20 px-4 sm:px-10 lg:px-16 text-white">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-raleway mb-6 animate__animated animate__fadeIn">
          My Expertise
        </h2>

        {/* Description */}
        {/* <p className="text-lg sm:text-xl mb-10 animate__animated animate__fadeIn animate__delay-1s">
          I specialize in a range of skills that combine design, development,
          and data science. Here's a look at my core areas of expertise:
        </p> */}

        {/* Expertise Areas List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
          {/* Expertise Item 1 */}
          <div className="transform transition duration-300 hover:scale-105 hover:shadow-lg  p-6 border-r-2 border-gray-300 shadow-md">
            <div className="flex justify-center mb-4">
              <FaLaptopCode className="text-4xl text-gray-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Front-End Web Development
            </h3>
            {/* <p className="text-sm sm:text-base leading-relaxed">
              Expert in building responsive, accessible, and performant web
              applications using modern front-end frameworks.
            </p> */}
          </div>

          {/* Expertise Item 2 */}
          <div className="transform transition duration-300 hover:scale-105 hover:shadow-lg  p-6 border-r-2 border-gray-300 shadow-md">
            <div className="flex justify-center mb-4">
              <FaDatabase className="text-4xl text-gray-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              SQL & Databases
            </h3>
            {/* <p className="text-sm sm:text-base leading-relaxed">
              In-depth knowledge of relational databases and SQL for efficient
              data management and querying.
            </p> */}
          </div>

          {/* Expertise Item 3 */}
          <div className="transform transition duration-300 hover:scale-105 hover:shadow-lg  p-6 border-r-2 border-gray-300 shadow-md">
            <div className="flex justify-center mb-4">
              <FaRobot className="text-4xl text-gray-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Machine Learning Models
            </h3>
            {/* <p className="text-sm sm:text-base leading-relaxed">
              Designing and deploying machine learning models to solve
              real-world problems in various domains.
            </p> */}
          </div>

          {/* Expertise Item 4 */}
          <div className="transform transition duration-300 hover:scale-105 hover:shadow-lg  p-6 border-r-2 border-gray-300 shadow-md">
            <div className="flex justify-center mb-4">
              <FaPaintBrush className="text-4xl text-gray-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Design Theory & UX
            </h3>
            {/* <p className="text-sm sm:text-base leading-relaxed">
              Passionate about creating intuitive, user-centered designs that
              focus on enhancing user experience.
            </p> */}
          </div>

          {/* Expertise Item 5 */}
          <div className="transform transition duration-300 hover:scale-105 hover:shadow-lg  p-6 border-r-2 border-gray-300 shadow-md">
            <div className="flex justify-center mb-4">
              <FaCogs className="text-4xl text-gray-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Software Design
            </h3>
            {/* <p className="text-sm sm:text-base leading-relaxed">
              Skilled in software architecture and design principles to create
              scalable, maintainable systems.
            </p> */}
          </div>

          {/* Expertise Item 6 */}
          <div className="transform transition duration-300 hover:scale-105 hover:shadow-lg  p-6 shadow-md">
            <div className="flex justify-center mb-4">
              <FaChartLine className="text-4xl text-gray-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Data Analytics
            </h3>
            {/* <p className="text-sm sm:text-base leading-relaxed">
              Utilizing data analysis techniques to uncover patterns, trends,
              and insights that drive data-driven decisions.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
