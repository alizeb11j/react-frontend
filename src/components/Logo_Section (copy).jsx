import React from "react";
import style_logo from "../assets/images/style_logo.png";
import khaadi_logo from "../assets/images/khaadi_logo.png";
import generation_logo from "../assets/images/generation_logo.png";
import kayseria_logo from "../assets/images/kayseria_logo.png";
import sapphire_logo from "../assets/images/sapphire_logo.png";
import faiza_saq_logo from "../assets/images/faiza_saq_logo.png";
import outfitters_logo from "../assets/images/outfitters_logo.png";
import home_1 from "../assets/images/home_1.png";
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
      <div className="h-80  mx-auto px-6 py-4 bg-[#8D3AAD]">
        {/* Grid of logos Rows:4 Cols:4 */}
        <div className=" grid grid-cols-4 grid-rows-4 gap-4 px-6 items-center justify-between ">
          <div className="row-span-2">
            <img className="h-64" src={style_logo} alt="Style" />
          </div>
          <div>
            <img className=" h-28 lg:pl-16" src={khaadi_logo} alt="Khaadi" />
          </div>
          <div>
            <img className="h-12" src={generation_logo} alt="Generation" />
          </div>
          <div>
            <img className="h-32 " src={kayseria_logo} alt="Kayseria" />
          </div>
          <div className="h-9 col-start-2 row-start-2">
            <img src={sapphire_logo} alt="Sapphire" />
          </div>
          <div className="h-7 col-start-3 row-start-2">
            <img src={faiza_saq_logo} alt="Faiza" />
          </div>
          <div className="h-16 col-start-4 row-start-2">
            <img src={outfitters_logo} alt="Outfitters" />
          </div>
        </div>
      </div>

      <div className=" text-white grid grid-flow-row grid-cols-4 grid-rows-3 gap-8 pt-5 px-5 mx-auto w-[68rem] h-[82.7rem]">
        <div className="items-center max-w-60 max-h-60 row-start-1 "> 
          <img
            className="md:max-w-60 md:max-h-60 object-cover rounded-xl"
            src={home_1}
            alt=""
          />
        </div>

        <div className=" col-start-2">
          <img
            className=" max-h-60 object-cover rounded-xl"
            src={home_2}
            alt=""
          />
        </div>

        <div className=" col-span-2 row-span-2 row-start-1 col-start-3" style={{maxHeight:"32rem"}}>
          <img
            className="md:max-w-lg object-cover rounded-2xl"
            src={home_3}
            style={{maxHeight:"32rem"}}
            alt=""
          />
        </div>
        <div className="col-span-2 "  style={{maxHeight:"26rem",maxWidth:"35rem"}}>
          <img
            className=" object-cover rounded-xl "
            style={{maxHeight:"26rem",maxWidth:"35rem"}}
            src={home_4}
            alt=""
          />
        </div>
        <div className="col-start-3 row-start-2 col-span-2">
          <img
            className=" object-cover rounded-xl "
            style={{maxHeight:"26rem"}}
            src={home_5}
            alt=""
          />
        </div>
        <div className="col-start-1 row-start-3 col-span-2">
          <img
            className=" object-cover rounded-xl "
            src={home_6}
            alt=""
          />
        </div>
        <div className="col-span-2 ">
          <img
            className="  object-cover rounded-xl "
            src={home_7}
            alt=""
          />
        </div>
       
      </div>
    </div>
  );
};

export default Logo_Section;
