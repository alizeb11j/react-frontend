import React, { useState, useRef, useEffect } from "react";
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
    multi_flag,
    setMulti_flag,
  } = useItems();

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

  const handleOptionClick = (option, index) => {
    setMulti_flag(false);
    setSelectedColor(option);
    setSelectedColorId(userColorid[index]);
    setIsOpen(false);
  };

  const getColorStyle = (color) => {
    return { backgroundColor: `#${color.replace("#", "")}` };
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-3xl border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-bold text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
          style={getColorStyle(selectedColor)}
        >
          <span className="mr-2">{multi_flag?"Select Color":selectedColorId  }</span>
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
            {options.map((option, index) => (
              <button
                key={index}
                className="block w-full text-center px-4 py-2 text-sm font-bold text-black hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleOptionClick(option, index)}
                style={getColorStyle(option)}
              >
                {`Color code: ${userColorid[index]}`}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorDropDownMenu;
