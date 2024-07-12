import React from "react";
import Hero from "../components/Hero";
import Logo_Section from "../components/Logo_Section";
import Instagram from "../components/Instagram";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Logo_Section />
      {/* <Categories />*/}
      <Instagram /> 
      <Footer />
    </>
  );
};

export default HomePage;
