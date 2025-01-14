/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import {
  FaLaptopCode,
  FaDatabase,
  FaRobot,
  FaPaintBrush,
  FaCogs,
  FaChartLine,
} from "react-icons/fa"; // Import Font Awesome icons
import "animate.css"; // Ensure animate.css is imported

const Expertise = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`bg-black font-raleway bg-opacity-30 py-20 px-4 sm:px-10 lg:px-16 text-white ${
        isVisible ? "animate__animated animate__fadeIn" : ""
      }`}
    >
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-raleway mb-6 animate__animated animate__fadeIn">
          My Expertise
        </h2>

        {/* Expertise Areas List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 animate__animated animate__fadeIn">
          {/* Expertise Item 1 */}
          <div className="transform transition duration-300 hover:scale-105 hover:shadow-lg p-6 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-300 shadow-md">
            <div className="flex justify-center mb-4">
              <FaLaptopCode className="text-4xl text-gray-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Front-End Web Development
            </h3>
          </div>

          {/* Expertise Item 2 */}
          <div className="transform transition duration-300 hover:scale-105 hover:shadow-lg p-6 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-300 shadow-md">
            <div className="flex justify-center mb-4">
              <FaDatabase className="text-4xl text-gray-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              SQL & Databases
            </h3>
          </div>

          {/* Expertise Item 3 */}
          <div className="transform transition duration-300 hover:scale-105 hover:shadow-lg p-6 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-300 shadow-md">
            <div className="flex justify-center mb-4">
              <FaRobot className="text-4xl text-gray-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Machine Learning Models
            </h3>
          </div>

          {/* Expertise Item 4 */}
          <div className="transform transition duration-300 hover:scale-105 hover:shadow-lg p-6 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-300 shadow-md">
            <div className="flex justify-center mb-4">
              <FaPaintBrush className="text-4xl text-gray-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Design Theory & UX
            </h3>
          </div>

          {/* Expertise Item 5 */}
          <div className="transform transition duration-300 hover:scale-105 hover:shadow-lg p-6 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-300 shadow-md">
            <div className="flex justify-center mb-4">
              <FaCogs className="text-4xl text-gray-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Software Design
            </h3>
          </div>

          {/* Expertise Item 6 */}
          <div className="transform transition duration-300 hover:scale-105 hover:shadow-lg p-6 shadow-md">
            <div className="flex justify-center mb-4">
              <FaChartLine className="text-4xl text-gray-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Data Analytics
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
