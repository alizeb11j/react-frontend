import React from "react";
import home_img from "../assets/images/home_img.png";

const Hero = () => {
  return (
    <section id="hero" className="bg-zinc-950 py-20 ">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 lg:space-y-0 lg:flex-row ">
        {/* Content */}
        <div className="flex flex-col mb-32 space-y-12 md:w-3/5 mx-auto">
          <h1
            className="max-w-md text-2xl   text-white text-center md:text-2xl md:text-left py-5"
            style={{ fontFamily: "MabryPro-Bold" }}
          >
            Weaving Quality into Life.
          </h1>
          <p
            className="max-w-sm text-justify  text-[#878888] text-lg  md:text-justify"
            style={{ fontFamily: "MabryPro-Medium" }}
          >
            We envision a future where tradition meets innovation and quality
            meets affordability. Empowering artisans, entrepreneurs, and the
            next generation. Through collaboration we aim to create a lasting
            impact in local and global markets , building a legacy of dedication
            and innovation.
          </p>
        </div>
        {/* Img */}
        <img
            src={home_img}
            className=" h-96 max-h-[28rem] mx-auto object-contain text-white"
            alt="Home Img"
          />
      </div>
    </section>
  );
};

export default Hero;
