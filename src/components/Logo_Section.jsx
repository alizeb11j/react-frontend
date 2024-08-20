import React from "react";
import style_logo from "../assets/images/style_logo.png";
import khaadi_logo from "../assets/images/khaadi_logo.png";
import generation_logo from "../assets/images/generation_logo.png";
import kayseria_logo from "../assets/images/kayseria_logo.png";
import sapphire_logo from "../assets/images/sapphire_logo.png";
import faiza_saq_logo from "../assets/images/faiza_saq_logo.png";
import outfitters_logo from "../assets/images/outfitters_logo.png";
import home_1 from "../assets/images/home_1.jpg";
import home_2 from "../assets/images/home_2.jpg";
import home_3 from "../assets/images/home_3.jpg";
import home_4 from "../assets/images/home_4.jpg";
import home_5 from "../assets/images/home_5.jpg";
import home_6 from "../assets/images/home_6.jpg";
import home_7 from "../assets/images/home_7.jpg";

const Logo_Section = () => {
  return (
    <div id="logo_section" className="bg-zinc-950">
      {/* Start of Container */}
      <div className=" h-60 md:h-80  mx-auto px-6 py-4 bg-[#8D3AAD]">
        {/* Grid of logos Rows:4 Cols:4 */}
        <div className=" grid grid-cols-4 grid-rows-4 gap-4 px-6 items-center justify-between ">
          <div className="row-span-2">
            <img className="h-64 object-contain" src={style_logo} alt="Style" />
          </div>
          <div>
            <img className=" h-28 object-contain lg:pl-16" src={khaadi_logo} alt="Khaadi" />
          </div>
          <div>
            <img className="h-12 object-contain" src={generation_logo} alt="Generation" />
          </div>
          <div>
            <img className="h-32 object-contain" src={kayseria_logo} alt="Kayseria" />
          </div>
          <div className="h-9 object-contain col-start-2 row-start-2">
            <img src={sapphire_logo} alt="Sapphire" />
          </div>
          <div className="h-7 object-contain col-start-3 row-start-2">
            <img src={faiza_saq_logo} alt="Faiza" />
          </div>
          <div className="h-16 object-contain col-start-4 row-start-2">
            <img src={outfitters_logo} alt="Outfitters" />
          </div>
        </div>
      </div>

      {/* Starting Home-grid */}
      <div className="flex flex-col mt-5 justify-center items-center mx-10  ">
        <div className="home-grid-small md:home-grid md:w-[80%]">
          <div className="row-start-1 col-span-1 row-span-1">
            <img
              className=" object-cover rounded-xl h-full w-full"
              src={home_2}
              alt=""
            />
          </div>
          <div className=" col-start-2 row-span-1 col-span-1 ">
            <img
              className=" object-cover rounded-xl h-full w-full"
              src={home_1}
              alt=""
            />
          </div>

          <div className=" col-span-2  row-start-2 col-start-1  md:row-start-1 md:col-start-3 md:row-span-2 ">
            <img
              className="object-cover rounded-2xl h-full w-full"
              src={home_3}
              alt=""
            />
          </div>

          <div className=" col-span-1 row-span-1 col-start-1 row-start-3 md:row-start-2">
            <img
              className="object-cover rounded-2xl h-full w-full"
              src={home_4}
              alt=""
            />
          </div>
          <div className=" col-span-1  col-start-2 row-start-3 row-span-1 md:row-start-2">
            <img
              className="object-cover rounded-2xl h-full w-full"
              src={home_5}
              alt=""
            />
          </div>
          <div className=" col-span-2  col-start-1 row-start-4 row-span-1 md:row-start-3">
            <img
              className="object-cover rounded-2xl h-full w-full"
              src={home_7}
              alt=""
            />
          </div>
          <div className=" col-span-2  col-start-1   row-start-5 row-span-1 md:row-start-3 md:col-start-3">
            <img
              className="object-cover rounded-2xl h-full w-full"
              src={home_6}
              alt=""
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Logo_Section;
