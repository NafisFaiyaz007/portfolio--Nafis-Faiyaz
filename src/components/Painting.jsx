/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import paintingData from "./data/paintingData";

const Painting = () => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index"), 10);
          if (entry.isIntersecting) {
            // Add index to visibleIndexes when in view
            setVisibleIndexes((prev) => [...prev, index]);
          } else {
            // Remove index from visibleIndexes when out of view
            setVisibleIndexes((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.2 } // Trigger fade-in when 20% of the element is visible
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="bg-black bg-opacity-50 text-myWhite font-raleway py-16 px-4 sm:px-10 lg:px-16">
      {/* Motivational Line */}
      <div className="text-center mb-12">
        <h2 className="text-3xl mb-4">
          My inspiration for minimal design and creativity originates from
          painting.
        </h2>
        <p className="text-gray-200 text-lg">
          Explore my works that blend simplicity with elegance.
        </p>
      </div>

      {/* Paintings Showcase */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8">
        {paintingData.map((Painting, index) => (
          <div
            key={Painting.id}
            data-index={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`transform transition duration-1000 opacity-0 ${
              visibleIndexes.includes(index)
                ? "opacity-100 animate__fadeInUp"
                : ""
            }`}
          >
            <div className="shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img
                src={Painting.image}
                alt={Painting.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-2">
                <h3 className="text-xl text-left text-myCyan">
                  {Painting.title}
                </h3>
                <p className="text-md text-justify text-myWhite mt-2">
                  {Painting.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Painting;
