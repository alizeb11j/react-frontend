// import React, { useState} from "react";

// import { useItems } from "../ItemsContext";

// const MultiColorDropDownMenu = ({

//   userColorid,
//   multi_options = [[""]],
//   bg = "bg-[#838285]",
// }) => {
//   console.log(multi_options);
//   const {
//     selectedColor,
//     setSelectedColor,
//     selectedColorId,
//     setSelectedColorId,
//   } = useItems();
//   console.log("ID:",userColorid.findIndex((x) => x === 2001));
//   const [multiSelectedColors, setMultiSelectedColors] = useState([]);
//   let selectedColorid_index = 0;

//   const getGradientStyle = (colors) => {
//     const gradientColors = colors.map(color => `#${color.replace('#', '')}`).join(', ');
//     // console.log("gradientColors:",gradientColors)
//     return `linear-gradient(to left, ${gradientColors})`;
//   };

//   const handleMultiColorChange = (e) => {
//     const selectedIndex = multi_options.findIndex(option =>
//       option.join(',') === e.target.value
//     );
//     console.log("selectedIndex:",selectedIndex)
//     if (selectedIndex !== -1) {
//       setSelectedColorId(userColorid[selectedIndex]);
//       console.log("userColorid[selectedIndex]:",userColorid[selectedIndex])
//       setSelectedColor(multi_options[selectedIndex].join(','));
//       console.log("multi_options[selectedIndex]:",multi_options[selectedIndex].join(','))
//     }

//   };

//   return (
//     <>

//         <div className="multidropDownMenu ">
//         <select
//           className={
//             "rounded-3xl focus:box-shadow-none focus:border-0 focus:shadow-none focus:outline-none [-webkit-appearance:none]"
//           }
//           name="item-selected"
//           value={multi_options[0][0]}
//           onChange={handleMultiColorChange}
//           style={{ backgroundColor: `#${multi_options[0][0]}` }}
//         >
//           {multi_options.map((option_value, id) => (

//             <option
//               key={id}
//               style={{
//                 background: getGradientStyle(option_value),
//                 fontFamily: "MabryPro-Medium",
//                 backgroundColor: getGradientStyle(option_value),
//               }}
//               className="rounded-3xl"
//               value={option_value.join(',')}
//             >
//               {`Multi-color ${id + 1}`}

//                 {/* { 1} */}
//               </option>
//           )

//         )
//           }
//         </select>

//         </div>

//     </>
//   );
// };

// export default MultiColorDropDownMenu;

import React, { useState, useRef, useEffect } from "react";
import { useItems } from "../ItemsContext";

const MultiColorDropDownMenu = ({ userColorid, multi_options = [[""]] }) => {
  const {
    selectedColor,
    setSelectedColor,
    selectedColorId,
    setSelectedColorId,
  } = useItems();
  // console.log("ID:",userColorid);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
    // console.log("Index:", index, "userColorid:", userColorid[index]);
    setSelectedIndex(index);
    setSelectedColorId(userColorid[index]);
    setSelectedColor(multi_options[index].join(","));
    console.log(multi_options[index].join(","))
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
          <span className="mr-2">{userColorid[selectedIndex]}</span>
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
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
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
