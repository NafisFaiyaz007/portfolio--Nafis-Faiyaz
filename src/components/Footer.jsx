import React from "react";

const Footer = () => {
  return (
    <div className="bg-black bg-opacity-70 text-myWhite font-bebas py-16 px-10 sm:px-20">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Left: Tagline */}
        <div className="flex-1 text-center sm:text-left mb-6 sm:mb-0">
          <p className="text-3xl sm:text-4xl italic font-light">
            "Let's get Connected"
          </p>
        </div>

        {/* Right: Social Media Icons */}
        <div className="flex space-x-8 justify-center sm:justify-end">
          <a
            href="https://www.linkedin.com/nafis-faiyaz193"
            className="text-myWhite hover:text-cyan-300 transition duration-300 text-3xl sm:text-4xl"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        
          <a
            href="https://github.com/nafisfaiyaz007"
            className="text-myWhite hover:text-cyan-300 transition duration-300 text-3xl sm:text-4xl"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          
          <a
            href="https://www.facebook.com/nafisfaiyazz"
            className="text-myWhite hover:text-cyan-300 transition duration-300 text-3xl sm:text-4xl"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-8 sm:mt-12">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Chowdhury Nafis Faiyaz. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
