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
  var nua = navigator.userAgent;
  var is_android =
    nua.indexOf("Mozilla/5.0") > -1 &&
    nua.indexOf("Android ") > -1 &&
    nua.indexOf("AppleWebKit") > -1 &&
    !(nua.indexOf("Chrome") > -1);
  if (is_android) {
    $("select.form-control").removeClass("form-control").css("width", "100%");
  }
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
                // color: `#${option_val}`,
                // textDecorationColor: "#000000"
              }}
              
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
