import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const DropDownMenu = ({ options, bg = "bg-[#838285]" }) => {
  // console.log(options);
  const [selectedItem, setSelectedItem] = useState("12cccc");
  const dummy = "12cccc";
  // const [menu_open, setMenu_open] = useState(0);

  const handleChange = (e) => {
    setSelectedItem(e.target.value);
    // console.log(menu_open);
  };

  return (
    <>
      <div className="dropDownMenu ">
        {/* <p>You have selected {selectedItem}</p> */}

        <select
          className={
            "  rounded-3xl focus:box-shadow-none focus:border-0 focus:shadow-none focus:outline-none [-webkit-appearance:none]"
          }
          name="item-selected"
          value={selectedItem}
          onChange={handleChange}
          style={{ backgroundColor: `#${selectedItem}` }}
        >
          {options.map((option_val) => (
            <option
              style={{
                backgroundColor: `#${option_val}`,
                fontFamily: "MabryPro-Medium",
              }}
              className="rounded-3xl"
              value={option_val}
            >
              <div className="flex flex-row ">
                <svg
                  className={`fill-[#${option_val}]`}
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  width="14"
                  viewBox="0 0 512 512"
                >
                  <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                </svg>
                <div>
                {option_val}
                </div>
              </div>

              
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default DropDownMenu;
