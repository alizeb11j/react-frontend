import React, { useState } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import single from "../assets/images/single.png";
import polka1 from "../assets/images/polka1.jpg";
import polka2 from "../assets/images/polka2.jpg";
import ProdSpecsCard from "../components/ProdSpecsCard";
import Footer from "../components/Footer";
import HomeCards from "../components/HomeCards";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader

const SingleProduct = () => {
  const { id } = useParams();
  const singleProduct = useLoaderData();

  // console.log("Id", id);
  // console.log("Singleprod",singleProduct.products[id-1].prodName);

  return (
    <>
      <section
        id="single_prod"
        className="pt-5 space-y-10 text-white text-3xl text-center bg-zinc-950"
      >
        <div className="flex flex-col justify-center align-center  md:flex-row">
          {/* (Left side) Carousal of Product Img */}
          <div className=" max-w-96 p-5 justify-center align-center mx-auto ">
            <Carousel
              emulateTouch={true}
              infiniteLoop={true}
              autoPlay={true}
              interval={2000}
              showThumbs={false}
              width={"100%"}
              showArrows={false}
              
            >
              <div>
                <img className=" min-w-20" style={{maxHeight:"400px", maxWidth:"400px" }} src={single} />
                {/* <p className="legend ">Legend 1</p> */}
              </div>
              <div>
                <img className=" min-w-20" style={{maxHeight:"400px", maxWidth:"400px" }} src={polka1} />
                {/* <p className="legend ">Legend 2</p> */}
              </div>
              <div>
                <img className=" min-w-20" style={{maxHeight:"400px", maxWidth:"400px" }} src={polka2} />
                {/* <p className="legend ">Legend 3</p> */}
              </div>
            </Carousel>
          </div>
          {/* (Right side) Product Description */}

          <div className=" mx-auto "
            style={{width: "80%", maxWidth: "40rem" }}
          >
            <ProdSpecsCard
              prodName={singleProduct.products[id - 1].prodName}
              prodDescription={singleProduct.products[id - 1].prodDescription}
              prodPackaging={singleProduct.products[id - 1].prodPackaging}
              prodPrice={singleProduct.products[id - 1].prodPrice}
              userColorCode={singleProduct.products[id - 1].userColorCode}
            />
          </div>
        </div>
        <div className="bg-zinc-950  space-y-10 ">
          <p
            className="  text-white text-2xl text-center mx-auto px-5 "
            style={{ fontFamily: "MabryPro-Bold" }}
          >
            You May Also Like
          </p>
          <HomeCards length={3} />
        </div>
        <Footer />
      </section>
    </>
  );
};

const prodLoader = async ({ params }) => {
  const id = params.id;
  // const response = await fetch(`https://dummyjson.com/products/${id}`);
  // const data = await response.json();
  const data = {
    products: [
      {
        id: "1",
        prodName: "Polka Cone",
        prodDescription: "Egyption Raw Material, Fast colors, count 10/2",
        prodPackaging: [12, 13, 14],
        prodPrice: 210,
        userColorCode: ["12cccc", "767ac1", "e660ab","fef093", "6066a5", "ddc49b","10190b","7d2017","c68e7a"],
      },
      {
        id: "2",
        prodName: "Butterfly Adda Nalki",
        prodDescription:
          "Cotton Raw Material,count 28/2, fast color Guaranteed,Weight 14.5gms, Combed, Mercersied & gassed. Used for embroidery over adda",
        prodPackaging: [12, 13, 14],
        prodPrice: 350,
        userColorCode: ["fef093", "6066a5", "ddc49b"],
      },
    ],
  };
  return data;
};

export { SingleProduct as default, prodLoader };
