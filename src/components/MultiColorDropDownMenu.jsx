import React, { useState, useRef, useEffect } from "react";
import { useItems } from "../ItemsContext";

const MultiColorDropDownMenu = ({ userColorid, multi_options = [[""]] }) => {
  const {
    selectedColor,
    setSelectedColor,
    selectedColorId,
    setSelectedColorId,
    selectedIndex,
    setSelectedIndex,
    multi_flag,
    setMulti_flag,
  } = useItems();
  // console.log("ID:",userColorid);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (index) => {
    console.log("Index:", index, "userColorid:", userColorid[index]);
    setMulti_flag(true);
    setSelectedIndex(index);
    setSelectedColorId(userColorid[index]);
    setSelectedColor(multi_options[index].join(","));
    console.log(multi_options[index].join(","));
    setIsOpen(false);
  };

  const getGradientStyle = (colors) => {
    const gradientColors = colors
      .map((color) => `#${color.replace("#", "")}`)
      .join(", ");
    return { background: `linear-gradient(to right, ${gradientColors})` };
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-3xl border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-bold text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 "
          onClick={() => setIsOpen(!isOpen)}
          style={getGradientStyle(multi_options[selectedIndex])}
        >
          <span className="mr-2">{multi_flag ?userColorid[selectedIndex]:"Select Multi-Color"}</span>
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div
            className="py-1 max-h-60 overflow-y-auto"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {multi_options.map((option, index) => (
              <button
                key={index}
                className="block w-full px-4 py-2 text-sm font-bold text-black hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleOptionClick(index)}
                style={getGradientStyle(option)}
              >
                Multi-color: {userColorid[index]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiColorDropDownMenu;
