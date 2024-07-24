import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const QuantityButton = ({ default_value,sendData }) => {
  let [count, setCount] = useState(default_value);
  
  function incrementCount() {
    if (count >= 999) {
      setCount(999);
      sendData(999);
    } else {
      count = count + 1;
      setCount(count);
      sendData(count);
    }
  }
  function decrementCount() {
    if (count > 0) {
      count = count - 1;
      setCount(count);
      sendData(count);
    }
  }
  return (
    <>
      <div className="container flex items-center align-center border border-solid border-l-neutral-50 bg-zinc-800 rounded-3xl gap-x-1 px-1 w-fit">
        <button
          onClick={decrementCount}
          className="mx-2 my-2.5  font-bold text-white"
          style={{ fontFamily: "MabryPro-Bold" }}
        >
          <FaMinus />
        </button>
        <input
          id="quantity"
          className="items-center text-center text-white bg-zinc-800 text-lg w-12 rounded-xl  border-0 shadow-none outline-none p-0"
          style={{ fontFamily: "MabryPro-Medium" }}
          type="text"
          value={`${count}`}
          placeholder="999"
          onChange={(e) => {
            if (e.target.value > 999) {
              setCount(999);
            } else {
              setCount(e.target.value);
              sendData(e.target.value);
            }
          }}
        />
        <button
          onClick={incrementCount}
          className="mx-2 my-2.5  text-white"
          style={{ fontFamily: "MabryPro-Bold" }}
        >
          <FaPlus />
        </button>
      </div>
    </>
  );
};

export default QuantityButton;
