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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [multi_flag,setMulti_flag] = useState(false);



  // console.log("selectedColor",selectedColor,"selectedColorId",selectedColorId)

  const fetchItems = async () => {
    setLoading(true);
    try {
      const data = await fetch(import.meta.env.VITE_API_URL+"api/items/");
      const result = await data.json();
      // console.log(result);
      setItems(result);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
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
        selectedIndex,
        setSelectedIndex,
        multi_flag,
        setMulti_flag,
        fetchItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
