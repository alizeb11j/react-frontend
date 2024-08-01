import React, { createContext, useState, useEffect, useContext } from "react";

const ItemsContext = createContext();

export const useItems = () => useContext(ItemsContext);

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const [selectedProductId, setSelectedProductId] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Add Parameters for Saving in Cart
  const [qtyFromChild, setqtyFromChild] = useState(1);
  const [selectedColor, setSelectedColor] = useState("f4c5bf");
  const [selectedColorId, setSelectedColorId] = useState(0);
 



  // console.log("selectedColor",selectedColor,"selectedColorId",selectedColorId)

  const fetchItems = async () => {
    try {
      const data = await fetch("/api/items/");
      const result = await data.json();
      // console.log(result);
      setItems(result);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <ItemsContext.Provider
      value={{
        items,
        loading,
        error,
        selectedProductId,
        setSelectedProductId,
        qtyFromChild,
        setqtyFromChild,
        selectedColor,
        setSelectedColor,
        selectedColorId,
        setSelectedColorId,
        fetchItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
