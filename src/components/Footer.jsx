import React from "react";

import { Link } from "react-router-dom";
import instagram_footer from "../assets/images/instagram_footer.png";
import facebook_footer from "../assets/images/facebook_footer.png";
import location_footer from "../assets/images/location_footer.png";
import mail_footer from "../assets/images/mail_footer.png";
import phone_footer from "../assets/images/phone_footer.png";
import whatsapp_footer from "../assets/images/whatsapp_footer.png";

const Footer = () => {
  return (
    <>
      <div
        id="footer"
        className="h-52 items-stretch flex flex-row justify-between pt-5 [background:linear-gradient(180deg,rgb(0,0,0)_68%,rgb(141,58,173)_100%)] -mx-30"
      >
        {/* Left Side */}
        <div>
          <h1
            className="font-light text-white text-2xl pb-3 pl-5"
            style={{ fontFamily: "MabryPro-Light" }}
          >
            We are Social
          </h1>
          {/* Start of Flex in which multiple items are arranged in a Col */}
          <div className="flex flex-col space-y-3 pl-5 ">
            <div className="flex flex-row space-x-3">
              <img className=" w-6 h-6" src={whatsapp_footer} alt="whatsapp" />

              <Link
                className="font-light text-white text-base"
                style={{ fontFamily: "MabryPro-Light" }}
                to="https://wa.me/923004381214"
              >
                +923004381214
              </Link>
            </div>
            <div className="flex flex-row space-x-3">
              <img className=" w-6 h-6" src={instagram_footer} alt="insta" />

              <Link
                className="font-light text-white text-base"
                style={{ fontFamily: "MabryPro-Light" }}
                to="https://www.instagram.com/najaftraders.pk/"
              >
                /najaftraders.pk
              </Link>
            </div>

            <div className="flex flex-row space-x-3">
              <img
                className=" w-6 h-6 text-white"
                src={facebook_footer}
                alt="fb"
              />

              <Link
                className="font-light text-white text-base"
                style={{ fontFamily: "MabryPro-Light" }}
                to="https://www.facebook.com/maliammar1214/"
              >
                /maliammar1214
              </Link>
            </div>
            <div className="flex flex-row space-x-3">
              <img
                className=" w-6 h-6 text-white"
                src={mail_footer}
                alt="mail"
              />

              <Link
                className="font-light text-white text-base"
                style={{ fontFamily: "MabryPro-Light" }}
                to="https://mailto:mr.ali.ammar@gmail.com"
              >
                /mr.ali.ammar@gmail.com
              </Link>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex flex-col space-y-5 pl-5 pt-10">
          <div className="flex flex-row space-x-3">
            <img
              className=" w-6 h-6 text-white"
              src={phone_footer}
              alt="phone"
            />
            <div className="flex flex-col pr-5">
              <p
                className=" font-light text-white text-base"
                style={{ fontFamily: "MabryPro-Light" }}
              >
                Muhammad Ali Ammar
              </p>
              <p
                className=" font-light text-white text-base"
                style={{ fontFamily: "MabryPro-Light" }}
              >
                +92 321 402 1742
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-3">
            <img
              className=" w-6 h-6 text-white"
              src={location_footer}
              alt="location"
            />
            <div className="flex flex-col pr-5">
              <p
                className="font-light text-white text-base"
                style={{ fontFamily: "MabryPro-Light" }}
              >
                165 B Alamgir Market
              </p>
              <p
                className=" font-light text-white text-base"
                style={{ fontFamily: "MabryPro-Light" }}
              >
                Lahore, Pakistan 54000
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
