import React, { useState, useEffect } from "react";
import QuantityButton from "./QuantityButton";
import prod_img1 from "../assets/images/prod_img1.png";

const CartCard = ({
  prodId,
  prodColor,
  prodColor_id,
  prodQty,
  sendData,
  bg = "bg-zinc-700",
}) => {

  const [item, setItem] = useState(null);
  const [qtyFromChild, setqtyFromChild] = useState(prodQty);


  
  useEffect(() => {
    getItemById();
  }, [prodId]);

  useEffect(() => {
    if (item && item.name) {
      updatePrice();
    }
  }, [qtyFromChild, item]);

  const getItemById = async () => {
    try {
      const data = await fetch(
        `http://127.0.0.1:8000` +
          `/api/items/?item_id=${prodId}`
      );
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
  const updatePrice = () => {
    if (item && item.item_pack_price && item.item_pack_price[0]) {
      const totalPrice = item.item_pack_price[0].price * qtyFromChild;
      sendData(item.name, totalPrice);
    }
  };
  const handleQtyFromChild = (qty) => {
    setqtyFromChild(qty);
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
            <p
              className="font-light text-white text-base text-center"
              style={{ fontFamily: "MabryPro-Bold" }}
            >
              {item?.name}
            </p>

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
