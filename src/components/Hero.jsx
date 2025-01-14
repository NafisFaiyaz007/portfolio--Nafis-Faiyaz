/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import "animate.css";
import myPic from "../images/my picture 2.jpg";
import "font-awesome/css/font-awesome.min.css";

const Hero = () => {
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
      { threshold: 0.5 } // Trigger when 50% of the section is visible
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
      className="relative bg-black bg-opacity-30 py-32 px-4 font-raleway sm:px-10 lg:px-16 text-myWhite min-h-screen flex items-center"
    >
      <div className="container mx-auto z-10 relative grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-center">
        {/* Left Grid: Profile Picture and Name/Designation */}
        <div
          className={`flex flex-col justify-center align-middle items-center mb-6 sm:mb-0 ${
            isVisible ? "animate__animated animate__fadeInLeft" : ""
          }`}
        >
          <div className="relative rounded-full overflow-hidden shadow-xl mb-4 transform transition duration-600 hover:scale-105">
            <img
              className="w-auto max-w-xs sm:max-w-sm object-cover"
              src={myPic}
              alt="Profile Pic"
            />
          </div>
          <h1 className="text-3xl sm:text-5xl font-bebas text-myWhite leading-tight mb-2 text-center">
            Chowdhury Nafis Faiyaz
          </h1>
          <p className="text-lg sm:text-xl font-raleway text-myCyan opacity-100 mb-6 text-center">
            Web Developer | Software Engineer
          </p>

          {/* Social Links: GitHub & LinkedIn */}
          <div className="flex space-x-6 justify-center">
            <a
              href="https://github.com/nafisfaiyaz007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-myCyan transition duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nafis-faiyaz193/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-myCyan transition duration-300"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Right Grid: Bio Section */}
        <div
          className={`text-justify sm:text-left sm:border-l-2 sm:border-myWhite ${
            isVisible ? "animate__animated animate__fadeInRight" : ""
          }`}
        >
          {/* Introduction Section */}
          <div className="w-full rounded-lg text-myWhite p-6 sm:p-8 text-justify shadow-xl">
            <h2 className="font-bebas text-2xl ">My Biography</h2>
            <p className="text-sm leading-loose mb-4">
              I’m a Computer Science and Engineering graduate from North South
              University, Bangladesh, with a specialization in Software
              Engineering. My passion lies at the intersection of software
              development, data science, machine learning, and artificial
              intelligence. I’m driven by a commitment to create scalable
              software solutions that make a real-world impact. I’ve led several
              exciting projects, including a blockchain-based Electronic Health
              Record system and a machine learning model analyzing the factors
              influencing adolescent alcohol consumption—set to be presented at
              ACMLC 2024. Alongside my academic journey, I’ve gained valuable
              hands-on experience as a freelance web developer and data analyst.
              Always striving to learn and grow, I’m dedicated to staying ahead
              of the latest technological trends and using my skills to solve
              meaningful challenges through innovative solutions.
            </p>

            <h2 className="text-2xl font-bebas mt-2">Research Interests</h2>
            <p className="text-sm  leading-loose">
              I am a dedicated and hardworking researcher with strong interests
              in Trustworthy AI, Machine Learning, Data Science, and Software
              Engineering, with a focus on developing scalable and reliable
              software systems. My research revolves around the intersection of
              these fields, aiming to create intelligent systems that ensure
              ethical integrity, transparency, and accountability. I am
              particularly passionate about addressing challenges in AI and
              machine learning, such as bias, fairness, and security, while
              improving data-driven decision-making processes. In Software
              Engineering, I am committed to designing efficient and adaptable
              software solutions that can meet the increasing demands of modern
              technologies. I thrive in overcoming obstacles through
              determination and resilience, and I am eager to contribute to
              cutting-edge research. I am currently pursuing opportunities to
              expand my knowledge and expertise through advanced academic
              research, both at the Master's and PhD levels. My goal is to make
              meaningful contributions to the fields of AI, data science, and
              software engineering, driving innovation and progress in academia
              and industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
