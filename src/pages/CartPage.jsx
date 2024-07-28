import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import CartCard from "../components/CartCard";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [itemDetails, setItemDetails] = useState({});
  const [orderDetails, setOrderDetails] = useState([]);

  // console.log("itemDetails",itemDetails)

    
  


  

  const checkout=async()=> {
    let order = [];
    Object.values(itemDetails).map((itemDetail) => {
      order.push(
        {
          id: itemDetail.itemid,
          name:itemDetail.name,
          color_code_id: itemDetail.color_id,
          ordered_at: itemDetail.ordered_at,
          qty: itemDetail.qty ,
        },
      );
  
    });
    if (order.length > 0) { 
      setOrderDetails(order);
      console.log("Order:",orderDetails)
    }
    
    
    // console.log("Order:",orderDetails)
    try {
      const response = await fetch('/api/orderitem/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });
      if (response.ok) {
        console.log('Order placed successfully');
        // Clear cart and redirect to a confirmation page
        // navigate('/order-confirmation');
      } else {
        console.error('Failed to place order');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  // console.log(orderDetails)
  const fetchCartItems = async () => {
    try {
      const data = await fetch("/api/cartitem/");
      const result = await data.json();
      // console.log(result);
      setCartItems(result);

      // console.log("Cartitems;",cartItems);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchCartItems();
  }, []);

  const getDataFromChild = (name, price, id, qty,itemid,color_id,ordered_at) => {
    setItemDetails((prevPrices) => ({
      ...prevPrices,
      [id]: { name, price, id, qty,itemid,color_id,ordered_at },
    }));
  };
  // console.log(itemDetails);
  const getTotalBill = () => {
    return Object.values(itemDetails).reduce(
      (total, item) => total + item.price,
      0
    );
  };

  const handleItemDeleted = () => {
    // fetchCartItems();

    window.location.reload();

    // setitemDetails({}); // Reset prices when an item is deleted
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
          {cartItems.map((item, id) => (
            <div key={id} className="w-1/3 space-y-4 mx-5 py-5 ">
              <CartCard
                prodId={item.item_id}
                prodColor={item.color_code}
                prodColor_id={item.color_code_id}
                prodOrdered_at={item.ordered_at}
                prodQty={item.qty}
                sendData={getDataFromChild}
                onItemDeleted={handleItemDeleted}
                orderId={item.id}
                bg="bg-zinc-900"
              />
            </div>
          ))}

          <div className=" text-white  flex flex-col bg-zinc-800 rounded-lg p-3 md:p-5 md:w-1/3 md:gap-5">
            {Object.values(itemDetails).map((item) => (
              <div
                key={item.id}
                className="flex flex-row justify-between gap-3"
              >
                <p
                  className="text-xl font-light"
                  style={{ fontFamily: "MabryPro-Light" }}
                >
                  {item.name}
                </p>
                <p
                  className="text-xl font-light"
                  style={{ fontFamily: "MabryPro-Light" }}
                >
                  {`Rs. ${item.price}`}
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
              to="/cart"
              onClick={checkout}
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
