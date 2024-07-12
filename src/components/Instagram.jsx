import React from "react";
import instagram_img from "../assets/images/instagram.png";
import { Link } from "react-router-dom";
import insta_img1 from "../assets/images/insta_img1.png";
import insta_img2 from "../assets/images/insta_img2.png";
import insta_img3 from "../assets/images/insta_img3.png";
import insta_img4 from "../assets/images/insta_img4.png";
import insta_img5 from "../assets/images/insta_img5.png";
import insta_img6 from "../assets/images/insta_img6.png";

const Instagram = () => {
  const img_list = [
    insta_img1,
    insta_img2,
    insta_img3,
    insta_img4,
    insta_img5,
    insta_img6,
  ];
  return (
    <div id="insta" className="flex flex-col  bg-zinc-950 gap-y-5">
      <div className="flex flex-row justify-center space-x-3 pt-5  ">
        <img className="h-10" src={instagram_img} alt="Insta Logo" />
        <Link
          className="text-2xl  text-white"
          style={{ fontFamily: "MabryPro-Bold" }}
          to="https://www.instagram.com/najaftraders.pk/"
        >
          #najaftraders.pk
        </Link>
      </div>
      {/* Add Scroll bar of images overflow-x-auto  is the key*/}
      <div className="flex px-3 overflow-x-auto space-x-3 snap-x object-cover scroll-px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {img_list.map((img) => (
          <img
            key={img.id}
            className="h-72 w-2/5 snap-center "
            src={img}
            alt="insta_img ${img.id}"
          />
        ))}
      </div>
    </div>
  );
};

export default Instagram;
