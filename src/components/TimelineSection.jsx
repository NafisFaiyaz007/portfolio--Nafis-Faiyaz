import React, { useState, useEffect, useRef } from "react";
import educationData from "../components/data/educationData";
import experienceData from "../components/data/experienceData";
const TimelineSection = () => {
  const [isScrolledIntoView, setIsScrolledIntoView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolledIntoView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className="container mx-auto grid md:grid-cols-2 gap-16">
        {/* Work Experience Section */}
        <div
          className={`transform transition-all duration-1000 ${
            isScrolledIntoView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-raleway mb-8">Work Experience</h2>
          <div className="relative border-l border-gray-600">
            {experienceData.map((item, index) => (
              <div key={index} className="mb-8 pl-6 relative">
                <div className="absolute -left-3 top-1.5 w-6 h-6 bg-myTeal rounded-full"></div>
                <h3 className="text-xl font-raleway">{item.title}</h3>
                <p className="text-sm text-tealbg-teal-900">{item.company}</p>
                <p className="text-sm text-tealbg-teal-900 mb-2">
                  {item.duration}
                </p>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div
          className={`transform transition-all duration-1000 delay-200 ${
            isScrolledIntoView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-raleway mb-8">Education</h2>
          <div className="relative border-l border-gray-600">
            {educationData.map((item, index) => (
              <div key={index} className="mb-8 pl-6 relative">
                <div className="absolute -left-3 top-1.5 w-6 h-6 bg-myTeal rounded-full"></div>
                <h3 className="text-xl font-raleway">{item.degree}</h3>
                <p className="text-sm text-tealbg-teal-900">
                  {item.institution}
                </p>
                <p className="text-sm text-tealbg-teal-900 mb-2">
                  {item.duration}
                </p>
                <p className="text-sm">
                  <span className="font-bold">Major: </span>
                  {item.Major}
                </p>
                <p className="text-sm">
                  <span className="font-raleway">{item.thesis}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </div>
    
  );
};

export default TimelineSection;
