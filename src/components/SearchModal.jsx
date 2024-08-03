import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [dispMessage, setDispMessage] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/items/?q=${searchQuery}`);
      const data = await response.json();
      setSearchResult(data);
      if (data.length === 0) setDispMessage("No Result Found");
      //   console.log("Data:", data);
      //   console.log(searchQuery);
    } catch (error) {
      console.log("Error During Search:", error);
    }
  };
  useEffect(() => {
    if (!isOpen) {
      setSearchResult([]);
      setSearchQuery("");
      setDispMessage("");
    }
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className="bg-zinc-800 p-6 rounded-lg w-full max-w-2xl">
          <div className="flex mb-4 gap-x-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              className="flex-grow border rounded-l px-4 py-2 rounded-xl"
              placeholder="Search products..."
              style={{ fontFamily: "MabryPro-Bold" }}
            />
            <button
              onClick={handleSearch}
              className="bg-[#9DEAE9] text-black px-4 py-2 rounded-xl"
              style={{ fontFamily: "MabryPro-Bold" }}
            >
              Search
            </button>
          </div>
          <div
            className="text-black max-h-96 overflow-y-auto "
            style={{ fontFamily: "MabryPro-Bold" }}
          >
            {searchResult.length ? (
              searchResult.map((result) => (
                <Link
                  key={result}
                  to={`/prod/${result.id}`}
                  className="block p-2 hover:bg-zinc-400 text-white hover:text-black rounded-xl"
                  onClick={onClose}
                >
                  {result.name}
                </Link>
              ))
            ) : (
              <p className="text-white">{`${dispMessage}`}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="mt-4  bg-gray-300 text-black px-4 py-2 rounded-xl"
            style={{ fontFamily: "MabryPro-Bold" }}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
