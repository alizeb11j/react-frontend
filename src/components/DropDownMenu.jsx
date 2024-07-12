import React, { useState } from "react";

const DropDownMenu = ({ options, bg = "bg-[#838285]", sendData }) => {
  //   console.log(color_flag);
  const [selectedItem, setSelectedItem] = useState(12);
  // const dummy="12cccc"
  // const [menu_open, setMenu_open] = useState(0);

  const handleChange = (e) => {
    setSelectedItem(e.target.value);
    sendData(e.target.value);
    // console.log(menu_open);
  };

  return (
    <>
      <div className="dropDownMenu ">
        {/* <p>You have selected {selectedItem}</p> */}

        <select
          className={` appearance-none rounded-3xl`}
          name="item-selected"
          value={selectedItem}
          onChange={handleChange}
        >
          {options.map((option_val) => (
            <option
              className={`${bg}  text-black hover:bg-[#000000] `}
              style={{ fontFamily: "MabryPro-Light" }}
              value={option_val}
            >
              {option_val}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default DropDownMenu;
