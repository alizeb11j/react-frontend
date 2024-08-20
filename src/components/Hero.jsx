import React from "react";
import home_img from "../assets/images/home_img.png";

const Hero = () => {
  return (
    <section id="hero" className="bg-zinc-950 py-20 ">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6">
        {/* Content */}
        <div className="flex flex-col mb-32 space-y-12 md:max-w-screen-lg mx-auto">
          <h1
            className=" text-2xl text-white text-left md:text-left py-5  space-y-12"
            style={{ fontFamily: "MabryPro-Bold" }}
          >
            Weaving Quality into Life.
          </h1>
          <p
            className="text-[#878888] text-xl md:text-wrap text-justify"
            style={{ fontFamily: "MabryPro-Medium" }}
          >
            At Najaf Traders, we envision a future where tradition meets
            innovation, and quality meets affordability. Empowering artisans,
            entrepreneurs, and the next generation, we strive to set the
            industry standard for trust and excellence. With collective efforts
            and strategic development, we aim to create a lasting impact in
            local and global markets, building a legacy of dedication and
            innovation. We're committed to deliver exceptional customer
            experiences, fostering meaningful connections, and enriching lives
            through our curated products and services. By embracing heritage and
            progress, we invite you to be the part of our journey, where
            TRADITION INSPIRES TOMORROW. Welcome to Najaf Traders, your partner
            in quality, innovation, and excellence.
          </p>
        </div>
        {/* Img */}
        <div className="flex justify-center">
          <img
            src={home_img}
            className=" h-96 max-h-[28rem] mx-auto object-contain text-white"
            alt="Home Img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
