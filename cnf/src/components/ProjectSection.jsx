/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import projectData from "./data/projectData";
import "animate.css";

const ProjectSection = () => {
  const [isScrolledIntoView, setIsScrolledIntoView] = useState(false);
  const sectionRef = useRef(null);
  const navigateToLink = (link) => {
    window.open(link, "_blank"); // Opens the link in a new tab
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set isScrolledIntoView to true when at least part of the section is in view
        setIsScrolledIntoView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger as soon as 10% of the section is in view
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
      className={`py-16 px-10 sm:px-20 transition-colors duration-1000 ${
        isScrolledIntoView
          ? "bg-white bg-opacity-80 text-myBlack"
          : "bg-black bg-opacity-30 text-black"
      }`}
    >
      {/* Projects Section */}
      <div
        className={`transform transition-all duration-1000 ${
          isScrolledIntoView
            ? "opacity-100 translate-y-0"
            : "opacity-90 translate-y-2" // Keeps it slightly visible even when out of view
        }`}
      >
        <h2 className="text-4xl font-raleway mb-12 text-center">Projects</h2>
        <div className="container mx-auto max-w-screen-lg space-y-16">
          {projectData.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } items-center lg:space-x-8 space-y-6 lg:space-y-0`}
            >
              <div className="lg:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="shadow-lg transform"
                />
              </div>
              <div className="lg:w-1/2 text-center lg:text-left space-y-4">
                <h3 className="text-2xl font-raleway">{project.title}</h3>
                <p className="text-black">{project.description}</p>
                <button
                  onClick={() => navigateToLink(project.link)}
                  className="bg-white border-2 border-myBlack hover:border-myCyan hover:bg-myCyan text-myBlack px-6 py-3 shadow-lg transition duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
