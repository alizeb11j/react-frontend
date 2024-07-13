import React, { useState } from "react";
import DropDownMenu from "./DropDownMenu";
import ColorDropDownMenu from "./ColorDropDownMenu";
import QuantityButton from "./QuantityButton";
import { Link } from "react-router-dom";

const ProdSpecsCard = ({
  prodName = "Polka Cone",
  prodDescription = "Egyption Raw Material, Fast colors, count 10/2",
  prodPackaging = [12, 13, 14],
  prodPrice = 1000,
  userColorCode = ["12cccc", "767ac1", "e660ab"],
  bg = "bg-zinc-950",

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
      <div className={`${bg} px-4 rounded-lg shadow-md space-y-14  `}>
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
          <div className="flex  items-center justify-center w-64 gap-x-28 flex-row">
            <p
              className=" text-white text-base text-left"
              style={{ fontFamily: "MabryPro-Light" }}
            >
              Packaging
            </p>

            <p
              className=" text-black text-lg border border-solid border-l-zinc-400 rounded-3xl"
              style={{ fontFamily: "MabryPro-Medium" }}
            >
              <DropDownMenu
                options={prodPackaging}
                sendData={handlePkgFromChild}
              />
            </p>
          </div>
          {/* User Color */}
          <div className="flex flex-row items-center justify-center w-fit gap-x-20">
            <p
              className=" text-white text-base text-left"
              style={{ fontFamily: "MabryPro-Light" }}
            >
              Pick Your Color
            </p>

            <p
              className=" text-black text-base border border-solid border-l-zinc-400 rounded-3xl"
              style={{ fontFamily: "MabryPro-Bold" }}
            >
              <ColorDropDownMenu options={userColorCode} />
            </p>
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
              {<QuantityButton sendData={handleQtyFromChild} />}
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
              {`Rs. ${pkgFromChild * qtyFromChild * prodPrice}`}
            </p>
          </div>
            <Link
              to="/cart"
              className="bg-[#7bf5f380] text-black px-4 py-2 rounded hover:bg-[#55a5a4] focus:outline-none focus:ring-2 focus:ring-[#7bf5f3] focus:ring-offset-2 focus:ring-offset-black  text-base justify-center  items-center  "
              style={{ fontFamily: "MabryPro-Bold" }}
            >
              Add to Cart
            </Link>
        </div>
      </div>
    </>
  );
};

export default ProdSpecsCard;
