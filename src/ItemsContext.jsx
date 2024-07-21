import React, { createContext, useState, useEffect, useContext } from "react";

const ItemsContext = createContext();

export const useItems = () => useContext(ItemsContext);

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [itemPack, setItemPack] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // console.log(selectedProductId);
  const fetchItemPack = async () => {
    try {
      const data = await fetch("http://127.0.0.1:8000/api/itempack/");
      const result = await data.json();
      // console.log(result);
      setItemPack(result);

    } catch (err) {
      setError(err.message);

    }
  };
  const fetchItems = async () => {
    try {
      const data = await fetch("http://127.0.0.1:8000/api/images_items/");
      const result = await data.json();
      // console.log(result);
      setItems(result);

    } catch (err) {
      setError(err.message);

    }
  };
  useEffect(() => {
   
    fetchItems();
    fetchItemPack();
  }, []);

  return (
    <ItemsContext.Provider value={{ items, itemPack,loading, error,selectedProductId, setSelectedProductId, fetchItems,fetchItemPack}}>
      {children}
    </ItemsContext.Provider>
  );
};
