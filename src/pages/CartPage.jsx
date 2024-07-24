import React, { useState, useEffect } from "react";
import { useParams, useLoaderData, Link } from "react-router-dom";
import Footer from "../components/Footer";
import CartCard from "../components/CartCard";


const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [itemPrices, setItemPrices] = useState({});

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await fetch("http://127.0.0.1:8000/api/orderitem/");
        const result = await data.json();
        // console.log(result);
        setCartItems(result);

        // console.log("Cartitems;",cartItems);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCartItems();
    
  }, []);

  const getDataFromChild = (name, price) => {
    setItemPrices(prevPrices => ({
      ...prevPrices,
      [name]: price
    }));
  };

  const getTotalBill = () => {
    return Object.values(itemPrices).reduce((total, price) => total + price, 0);
  };

      
 
  return (
    <>
      <div className="bg-zinc-900">
        <h1
          className="text-3xl text-center text-white font-bold py-5 mx-auto"
          style={{ fontFamily: "MabryPro-Light" }}
        >
          My Cart
        </h1>

        <div className="flex flex-col justify-center items-center ">
          {cartItems.map((item,id) => (
            <div  key={id} className="w-1/3 space-y-4 mx-5 py-5 ">
              <CartCard
                prodId={item.item_id}
                prodColor={item.color_code}
                prodColor_id={item.color_code_id}
                prodQty={item.qty}
                sendData={getDataFromChild}
                bg="bg-zinc-900"
              />
            </div>
          ))}

          <div className=" text-white  flex flex-col bg-zinc-800 rounded-lg p-3 md:p-5 md:w-1/3 md:gap-5">
            
          {Object.entries(itemPrices).map(([name, price], index) => (
              <div key={index} className="flex flex-row justify-between gap-3">
                <p className="text-xl font-light" style={{ fontFamily: "MabryPro-Light" }}>
                  {name}
                </p>
                <p className="text-xl font-light" style={{ fontFamily: "MabryPro-Light" }}>
                  {`Rs. ${price}`}
                </p>
              </div>
            ))}
        

            <div className="flex flex-row justify-between gap-3">
              <p
                className="text-xl font-bold"
                style={{ fontFamily: "MabryPro-Light" }}
              >
                Total
              </p>
              <p className="text-xl " style={{ fontFamily: "MabryPro-Bold" }}>
                {`Rs. ${getTotalBill()}`}
              </p>
            </div>
            <Link
              to="/checkout"
              className=" bg-[#7bf5f380] text-black px-4 py-2 rounded hover:bg-[#55a5a4] focus:outline-none focus:ring-2 focus:ring-[#7bf5f3] focus:ring-offset-2 focus:ring-offset-black justify-center items-center   "
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
