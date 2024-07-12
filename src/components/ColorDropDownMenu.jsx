import React, { useState } from "react";

const DropDownMenu = ({ options, bg = "bg-[#838285]" }) => {
    // console.log(options);
    const [selectedItem, setSelectedItem] = useState("12cccc");
    const dummy="12cccc"
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
          className={"  rounded-3xl focus:box-shadow-none focus:border-0 focus:shadow-none focus:outline-none "}
          name="item-selected"
          value={selectedItem}
          onChange={handleChange}
          style={{ backgroundColor: `#${selectedItem}` }}
        >
          {options.map((option_val) => (
            <option
              style={{ backgroundColor: `#${option_val}`,fontFamily: "MabryPro-Medium" }}
              className="rounded-3xl"
            
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
