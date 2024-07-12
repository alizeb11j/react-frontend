import React from "react";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

const JobListing = ({ item }) => {
  const [showFullDescr, setShowFullDescr] = useState(false);
  let description = item.description;
  console.log(description);

  if (!showFullDescr) {
    description = description.substring(0, 10) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{item.name}</div>
          <h3 className="text-xl font-bold">{item.name}</h3>
        </div>

        <div className="mb-5">{item.description}</div>
        <button
          onClick={() =>
            setShowFullDescr((prevState) => {
              !prevState;
            })
          }
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {showFullDescr ? "Less" : "More"}
        </button>

        {/* <h3 className='text-indigo-500 mb-2'>{job.salary} / Year</h3> */}

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            {/* <FaMapMarker className="inline mb-1 mr=1" /> */}
            {/* {job.phone} */}
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default JobListing;
