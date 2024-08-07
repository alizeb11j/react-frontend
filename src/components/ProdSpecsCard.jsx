import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ColorDropDownMenu from "./ColorDropDownMenu";
import MultiColorDropDownMenu from "./MultiColorDropDownMenu";
import QuantityButton from "./QuantityButton";

import { useItems } from "../ItemsContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const ProdSpecsCard = ({
  prodName = "Polka Cone",
  prodDescription = "Egyption Raw Material, Fast colors, count 10/2",
  prodPackaging = 12,
  prodPrice = 1000,
  userColorCode = ["12cccc", "767ac1", "e660ab"],
  userColorId = [1, 2, 3],
  userMultiColor = [
    ["12cccc", "767ac1", "e660ab"],
    ["12cccc", "767ac1", "e660ab"],
    ["12cccc", "767ac1", "e660ab"],
  ],
  userMultiColorId = [1, 2, 3],
  bg = "bg-zinc-950",
}) => {
  const navigate = useNavigate();
  const {
    selectedProductId,
    qtyFromChild,
    setqtyFromChild,
    selectedColor,
    selectedColorId,
    selectedIndex,
    setSelectedIndex,
  } = useItems();
  const params = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleQtyFromChild = (qty) => {
    setqtyFromChild(qty);
    // console.log(qty);
  };
  const addToCart = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    const userId = localStorage.getItem("userId");
    if (!qtyFromChild) {  setIsSubmitting(false);return;} 
    const orderData = {
      item_id: parseInt(selectedProductId),
      color_code_id: parseInt(selectedColorId),
      color_code: selectedColor,
      qty: parseInt(qtyFromChild),
      user_id: userId,
    };
    console.log("Sending order data:", JSON.stringify(orderData));
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "api/cartitem/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Item Added to Cart placed successfully:", result);
      toast.success("Item Added to Cart", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "dark",
        onClose: () => {
          navigate("/cart");
        },
      });
      console.log("Item added")
      // Handle success (e.g., show a success message, clear form, etc.)
    } catch (error) {
      console.error("Error placing order:", error);
      // Handle error (e.g., show error message to user)
    }finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div
        className={`${bg} px-4 rounded-lg shadow-md space-y-14 container flex flex-col  `}
      >
        <h1
          className=" text-white text-2xl text-center md:text-left"
          style={{ fontFamily: "MabryPro-Bold" }}
        >
          {prodName}
        </h1>
        <p
          className=" text-[#878888] text-base text-center  md:text-left"
          style={{ fontFamily: "MabryPro-Light" }}
        >
          {prodDescription}
        </p>

        <div className=" flex flex-col w-fit gap-y-10 pl-1">
          {/* Packaging  */}
          <div className="flex items-center justify-center w-64 gap-x-28 flex-row">
            <p
              className=" text-white text-base text-left"
              style={{ fontFamily: "MabryPro-Light" }}
            >
              Packaging
            </p>

            <p
              className=" text-white text-lg w-20"
              style={{ fontFamily: "MabryPro-Medium" }}
            >
              {prodPackaging}
            </p>
          </div>
          {/* User Color */}
          <div
            className={`${
              userColorCode.length ? "" : "hidden"
            } flex flex-row  items-center justify-center w-fit gap-x-20`}
          >
            <p
              className=" text-white text-base text-left"
              style={{ fontFamily: "MabryPro-Light" }}
            >
              Pick Your Color
            </p>
            <ColorDropDownMenu
              options={userColorCode}
              userColorid={userColorId}
            />
            {userMultiColor.length ? (
              <MultiColorDropDownMenu
                userColorid={userMultiColorId}
                multi_options={userMultiColor}
              />
            ) : (
              <></>
            )}
          </div>

          {/* Price */}
          <div className="flex flex-row items-center justify-center w-fit gap-x-40 ">
            <p
              className=" text-white text-base text-left"
              style={{ fontFamily: "MabryPro-Light" }}
            >
              Price
            </p>
            <p
              className=" text-white text-base text-left"
              style={{ fontFamily: "MabryPro-Light" }}
            >
              {`Rs. ${prodPrice}`}
            </p>
          </div>
          {/* Quantity */}
          <div className="flex flex-row items-center justify-center w-fit gap-x-32">
            <p
              className=" text-white text-base text-left"
              style={{ fontFamily: "MabryPro-Light" }}
            >
              Quantity
            </p>
            <p
              className=" text-white text-base text-left"
              style={{ fontFamily: "MabryPro-Light" }}
            >
              {
                <QuantityButton
                  default_value={1}
                  sendData={handleQtyFromChild}
                />
              }
            </p>
          </div>
          {/* Total */}
          <div className="flex flex-row items-center justify-center w-fit gap-x-32">
            <p
              className=" text-white text-base text-left"
              style={{ fontFamily: "MabryPro-Light" }}
            >
              You Pay
            </p>
            <p
              className=" text-white text-base text-left"
              style={{ fontFamily: "MabryPro-Bold" }}
            >
              {`Rs. ${qtyFromChild * prodPrice}`}
            </p>
          </div>

          <button
            // to="/cart"
            onClick={addToCart}
            disabled={isSubmitting}
            className="bg-[#7bf5f380] text-black px-4 py-2 rounded hover:bg-[#55a5a4] focus:outline-none focus:ring-2 focus:ring-[#7bf5f3] focus:ring-offset-2 focus:ring-offset-black  text-base justify-center  items-center  "
            style={{ fontFamily: "MabryPro-Bold" }}
          >
            <ToastContainer />
            {isSubmitting ? 'Adding...' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProdSpecsCard;
