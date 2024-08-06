import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useItems } from "../ItemsContext";

const Card = ({ img_name, description, price, itemId, bg = "bg-zinc-950" }) => {
  const { setSelectedProductId } = useItems();

  const navigate = useNavigate();



  return (
    <>
      <div className={`${bg} px-4 rounded-lg shadow-md `}>
        {/* Img */}
        <div className="group relative">
          <img
            src={img_name}
            alt="Description"
            className="w-60 h-72 object-cover rounded-lg"
            onClick={() => {
              setSelectedProductId(itemId);
              navigate(`/prod/${itemId}`);
            }}
          />
          {/* Go to Single Product Page */}
          <Link
            to={`/prod/${itemId}`}
            onClick={() => setSelectedProductId(itemId)}
            className=" font-light text-white text-xl  opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-250 ease-in-out text-center "
            style={{ fontFamily: "MabryPro-Light" }}
          >
            View Details
          </Link>
        </div>

        {/* Description + Price */}
        <div className="flex flex-row items-center justify-center w-60">
          <p
            className="font-light text-white text-base text-left"
            style={{ fontFamily: "MabryPro-Light" }}
          >
            {description}
          </p>
          <p
            className=" font-bold text-white text-base"
            style={{ fontFamily: "MabryPro-Light" }}
          >
            {price}
          </p>
        </div>
      </div>
    </>
  );
};
export default Card;
