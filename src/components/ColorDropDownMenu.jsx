import React, { useState } from "react";

import { useItems } from "../ItemsContext";

const ColorDropDownMenu = ({
  options = [""],
  userColorid,
  bg = "bg-[#838285]",
}) => {
  const {
    selectedColor,
    setSelectedColor,
    selectedColorId,
    setSelectedColorId,
  } = useItems();

  // console.log("ID:",userColorid);
  let selectedColorid_index = 0;

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
    selectedColorid_index = options.indexOf(e.target.value);
    setSelectedColorId(userColorid[selectedColorid_index]);

    // console.log("Index", selectedColorid_index)
    // console.log(userColorid[selectedColorid_index])
    // console.log(menu_open);
  };

  return (
    <>
      <div className="dropDownMenu ">
        <select
          className={
            "rounded-3xl  [-webkit-appearance:none] text-sm font-bold text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          }
          name="item-selected"
          value={selectedColor}
          onChange={handleChange}
          style={{ backgroundColor: `#${selectedColor}` }}
        >
          {options.map((option_val, id) => (
            <option
              key={id}
              style={{
                background: `#${option_val}`,
                fontFamily: "MabryPro-Medium",
                backgroundColor: `#${option_val}`,
              }}
              className="rounded-3xl"
              value={option_val}
            >
              {userColorid[options.indexOf(option_val)]}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ColorDropDownMenu;
