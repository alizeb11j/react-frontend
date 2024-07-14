import React from "react";
import about_img1 from "../assets/images/about_img1.jpg";
import about_img2 from "../assets/images/about_img2.jpg";
import about_img3 from "../assets/images/about_img3.jpg";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <div className="bg-zinc-950 ">
        <div
          className="text-white  text-lg md:text-3xl font-medium text-center"
          style={{ fontFamily: "MabryPro-Medium" }}
        >
          Working From Generations, For Generations.
        </div>
        <div className="flex flex-col container bg-zinc-950  mx-auto py-5 ">
          <div className=" flex flex-col-reverse justify-center items-center gap-x-5 md:flex-row">
            <p
              className="w-4/6 text-white  text-sm md:text-base font-medium"
              style={{ fontFamily: "MabryPro-Medium" }}
            >
              Founded in the 1970s, Najaf Traders started as a humble operation
              by Sheikh Rehmat Ali, a salesman on a bicycle. Through sheer
              dedication and relentless effort, Najaf Traders quickly grew into
              a name synonymous with excellence, laying a strong foundation
              built on trust and quality.
            </p>

            <img
              className="w-3/12 h-60 object-contain rounded-xl"
              src={about_img1}
              alt=""
            />
          </div>
          <div className=" flex flex-col justify-center items-center gap-x-5 md:flex-row">
            <img
              className="w-3/12 h-60 object-contain rounded-3xl"
              src={about_img2}
              alt=""
            />

            <p
              className="w-4/6 text-white text-sm md:text-base font-medium"
              style={{ fontFamily: "MabryPro-Medium" }}
            >
              In 1980, his son Najaf Ali joined and the business expanded
              significantly, transforming into a robust enterprise. Over the
              next 50 years, Najaf Traders became a household name. As the
              authorized dealer of JP Coats threads, Najaf Traders introduced
              premium quality to the local market, a collaboration that thrived
              for two decades. Additionally, the company brought Union Thread’s
              Butterfly brand to Lahore, setting new standards for high-quality
              local threads.
            </p>
          </div>
          <div className=" flex flex-col-reverse justify-center items-center gap-x-5 md:flex-row">
            <p
              className="w-4/6 text-white text-sm md:text-base font-medium"
              style={{ fontFamily: "MabryPro-Medium" }}
            >
              In 2010, under the leadership of the current Director and CEO, Ali
              Ammar, Najaf Traders embraced modern strategies and innovation. A
              gold medalist in business and marketing, Ali Ammar revolutionized
              the company by introducing online billing, expanding the product
              range, and forging national and international partnerships. Najaf
              Traders also welcomed renowned clothing brands and designers into
              its wholesale family.
            </p>

            <img
              className="w-3/12 h-60 object-contain rounded-xl"
              src={about_img3}
              alt=""
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
