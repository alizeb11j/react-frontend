import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const DropDownMenu = ({ options,userColorid, bg = "bg-[#838285]" }) => {
  // console.log(options);
  const [selectedItem, setSelectedItem] = useState(options[0]);
  const [selectedItemId, setSelectedItemId] = useState(0);


  
 
  const handleChange = (e) => {
    setSelectedItem(e.target.value);
    const selectedColorid_index = options.indexOf(selectedItem);
    setSelectedItemId(selectedColorid_index);
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
          value={selectedItem}
          onChange={handleChange}
          style={{ backgroundColor: `#${selectedItem}` }}
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

export default DropDownMenu;
