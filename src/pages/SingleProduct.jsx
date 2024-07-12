import React, { useState} from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import single from "../assets/images/single.png";
import ProdSpecsCard from "../components/ProdSpecsCard";
import Footer from "../components/Footer";
import HomeCards from "../components/HomeCards";

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
        <div className="flex flex-row justify-center align-center ">
          {/* (Left side) Carousal of Product Img */}
          <div className="basis-1/2 p-6 mx-5 justify-center align-center">
            <Carousel
              autoplay={true}
              autoplayDelay={4000}
              className=" rounded-xl justify-center align-center mx-auto"
            >
              <img src={single} alt="image 1" className="h-96" />
              <img src={single} alt="image 2" className="h-96" />
              <img src={single} alt="image 3" className="h-96 " />
            </Carousel>
          </div>
          {/* (Right side) Product Description */}

          <div className="basis-1/2">
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
        prodPrice: 500,
        userColorCode: ["12cccc", "767ac1", "e660ab"],
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
