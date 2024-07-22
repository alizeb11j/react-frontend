import React from "react";

import { useItems } from "../ItemsContext";

const ColorDropDownMenu = ({ options, userColorid, bg = "bg-[#838285]" }) => {
  const { selectedColor,setSelectedColor,selectedColorId,setSelectedColorId } = useItems();
  let selectedColorid_index = 0;
  
  const handleChange = (e) => {
    setSelectedColor(e.target.value);
    selectedColorid_index= options.indexOf(e.target.value);
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
            "rounded-3xl focus:box-shadow-none focus:border-0 focus:shadow-none focus:outline-none [-webkit-appearance:none]"
          }
          name="item-selected"
          value={selectedColor}
          onChange={handleChange}
          style={{ backgroundColor: `#${selectedColor}` }}
        >
          {options.map((option_val) => (
            <option
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
