import React from "react";
import { useParams, useLoaderData, Link } from "react-router-dom";
import Footer from "../components/Footer";
import CartCard from "../components/CartCard";
import single from "../assets/images/single.png";
const CartPage = () => {
  return (
    <>
      <div className="bg-zinc-900">
        <h1 className="text-3xl text-center text-white font-bold py-5 mx-auto" style={{ fontFamily: "MabryPro-Light" }}>
          My Cart
        </h1>
        <div className="flex flex-col justify-center items-center md:flex-row">
          <div className="w-1/3 space-y-4 mx-5 py-5 px-3">
            <CartCard
              prodName="Polka Cone"
              prodDescription="Egyption Raw Material, Fast colors, count 10/2"
              prodPackaging="13"
              prodColor="e660ab"
              prodQty="3"
              img_name={single}
              price="500"
              bg="bg-zinc-900"
            />
            <CartCard
              prodName="Butterfly Adda Nalki"
              prodDescription="Egyption Raw Material, Fast colors, count 10/2"
              prodPackaging="12"
              prodColor="6066a5"
              prodQty="3"
              img_name={single}
              price="350"
              bg="bg-zinc-900"
            />
          </div>
          <div className=" text-white  flex flex-col bg-zinc-800 rounded-lg p-3 md:p-5 md:w-1/3 md:gap-5">
            
            <div className="flex flex-row justify-between gap-3" >
              <p className="text-xl  font-bold" style={{ fontFamily: "MabryPro-Light" }}>
              Polka Cone
              </p>
              <p className="text-xl font-light" style={{ fontFamily: "MabryPro-Light" }}> 
                { `Rs. ${350*13*1}`}
              </p>
            </div>
            
            <div className="flex flex-row justify-between gap-3"  >
              <p className="text-xl font-bold" style={{ fontFamily: "MabryPro-Light" }}>
              Butterfly Adda Nalki
              </p>
              <p className="text-xl font-light" style={{ fontFamily: "MabryPro-Light" }}> 
                { `Rs. ${500*13*1}`}
              </p>
            </div>
            <div className="flex flex-row justify-between gap-3"  >
              <p className="text-xl font-bold" style={{ fontFamily: "MabryPro-Light" }}>
              Total
              </p>
              <p className="text-xl font-light" style={{ fontFamily: "MabryPro-Light" }}> 
                { `Rs. ${(350*13*1)+(500*13*1)}`}
              </p>
            </div>
            <Link
              to="/"
              className="bg-zinc-700 rounded-xl text-white text-base text-center w-fit mx-auto px-3 py-3  "
              style={{ fontFamily: "MabryPro-Bold" }}
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;

