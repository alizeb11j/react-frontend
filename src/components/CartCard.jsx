import React, { useState} from "react";
import { Link } from "react-router-dom";
import QuantityButton from "./QuantityButton";

const CartCard = ({
  prodName,
  img_name,
  prodDescription,
  prodPackaging,
  prodColor,
  prodQty,
  price,
  bg = "bg-zinc-700",
}) => {
    const [pkgFromChild, setPkgFromChild] = useState(12);
    // const [selectedColor, setSelectedColor] = useState(userColorCode[0]);
    const [qtyFromChild, setqtyFromChild] = useState(1);
    const handlePkgFromChild = (pkg) => {
      setPkgFromChild(pkg);
      // console.log(data);
    };
  
    const handleQtyFromChild = (qty) => {
      setqtyFromChild(qty);
      // console.log(data);
    };
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-x-5 mx-auto py-5">
        <div className="group relative">
          <img
            src={img_name}
            alt="Image"
            className="min-w-36 h-60 object-contain rounded-lg"
          />
        </div>
        <div className={`${bg} px-4 rounded-lg shadow-md `}>
          
          <div className="flex flex-col items-center justify-center gap-3">
            <p
              className="font-light text-white text-base text-left"
              style={{ fontFamily: "MabryPro-Bold" }}
            >
              {prodName}
            </p>

            <p
              className="font-light text-white text-base text-left"
              style={{ fontFamily: "MabryPro-Light" }}
            >
              {`Packaging: ${prodPackaging}`}
            </p>
            <p
              className={`font-light text-white text-base text-left bg-[#${prodColor}]`}
              style={{ fontFamily: "MabryPro-Light" }}
            >
              {`Color: ${prodColor}`}
            </p>
            <p
              className=" font-bold text-white text-base"
              style={{ fontFamily: "MabryPro-Light" }}
            >
              {`Price: ${price}`}
            </p>
            <QuantityButton  sendData={handleQtyFromChild} />
          </div>
        </div>
      </div>
    </>
  );
};
export default CartCard;
