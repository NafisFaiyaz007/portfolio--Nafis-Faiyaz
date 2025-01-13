import React from "react";
import Navbar from "../components/Navbar"; // Adjust the path if Navbar is in a different folder
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import TimelineSection from "../components/TimelineSection";
import CombinedSection from "../components/ProjectSection";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Expertise/>
      <TimelineSection/>
      <CombinedSection/>
      <Footer/>
      {/* Add the rest of your home page content here */}
    </div>
  );
};

export default Home;
