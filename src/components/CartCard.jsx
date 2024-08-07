import React, { useState, useEffect } from "react";
import QuantityButton from "./QuantityButton";

import { Trash2 } from "lucide-react";
import axios from "axios";
const CartCard = ({
  prodId,
  prodColor,
  prodColor_id,
  prodOrdered_at,
  prodQty,
  sendData,
  onItemDeleted,
  orderId,
  bg = "bg-zinc-700",
}) => {
  const [item, setItem] = useState(null);
  const [qtyFromChild, setqtyFromChild] = useState(prodQty);
  const getItemById = async () => {
    try {
      const data = await fetch(`${import.meta.env.VITE_API_URL}api/items/?item_id=${prodId}`);
      const result = await data.json();
      // console.log("Result",result[0])
      setItem(result[0]);
      if (result[0] && result[0].name) {
        updatePrice();
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  //Call Get Request whenevr prodId changes
  useEffect(() => {
    getItemById();
    // console.log(item)
  }, [prodId]);

  //Updates price whenevr prodId changes or Qty changes
  useEffect(() => {
    if (item && item.name) {
      updatePrice();
    }
  }, [qtyFromChild, item, prodId]);

  // Update and Send Json Object of Name+Price to CartPage
  const updatePrice = () => {
    if (item && item.item_pack_price && item.item_pack_price[0]) {
      const totalPrice = item.item_pack_price[0].price * qtyFromChild;

      sendData(
        item.name,
        totalPrice,
        orderId,
        qtyFromChild,
        prodId,
        prodColor_id,
        prodOrdered_at
      );
    }
  };
  // Get Qty value from Quantity Component
  const handleQtyFromChild = (qty) => {
    setqtyFromChild(qty);
  };
  //  Send Delete Request
  const handleDelete = async () => {
    const userId = localStorage.getItem("userId");
    const creationTime = localStorage.getItem("creationTime");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}api/cartitem/?item_id=${prodId}&color_code_id=${prodColor_id}&userId=${userId}&creationTime=${creationTime}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            // Add any authentication headers if required
          },

        }
      );

      if (response.ok) {
        onItemDeleted();
        console.log("Item Deleted Successfully");
      } else {
        console.log(`Failed to delete item. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error deleting item:", err);
    }
  };

  return (
    <>
      <div className="flex flex-col   gap-x-3 px-5 mx-auto py-5 md:flex-row">
        <img
          src={item?.images_item[0].img_url}
          alt="Image"
          className="min-w-36 h-60 object-contain rounded-lg"
        />

        <div className={`${bg} px-4 rounded-lg shadow-md `}>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex flex-row items-center justify-center gap-3">
              <p
                className="font-light text-white text-base text-center"
                style={{ fontFamily: "MabryPro-Bold" }}
              >
                {item?.name}
              </p>
              <button
                onClick={handleDelete}
                className={`${bg} font-bold text-white text-base text-center`}
                aria-label="Delete item"
              >
                <Trash2 size={20} color="#ffffff" strokeWidth={2} />
              </button>
            </div>
            <p
              className="font-light text-white text-base text-center md:text-left"
              style={{ fontFamily: "MabryPro-Light" }}
            >
              {`Packaging: ${item?.item_pack_price[0]?.packaging_id[0].type}`}
            </p>
            <p
              className={`font-light text-white text-base text-center md:text-left bg-[#${prodColor}]`}
              style={{ fontFamily: "MabryPro-Light" }}
            >
              {`Color: ${prodColor_id}`}
            </p>
            <p
              className=" font-bold text-white text-base text-center md:text-left"
              style={{ fontFamily: "MabryPro-Light" }}
            >
              {`Price: ${item?.item_pack_price[0].price}`}
            </p>
            <QuantityButton
              default_value={prodQty}
              sendData={handleQtyFromChild}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default CartCard;
