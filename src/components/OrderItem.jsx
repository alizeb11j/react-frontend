import React, { useState } from "react";

const OrderItem = ({ itemId, colorCodeId, colorCode, quantity }) => {
  // const [itemId, setItemId] = useState("");
  // const [colorCodeId, setColorCodeId] = useState("");
  // const [colorCode, setColorCode] = useState("");
  // const [quantity, setQuantity] = useState("");

  const handleSubmit = async () => {
    e.preventDefault();

    const orderData = {
      item_id: parseInt(itemId),
      color_code_id: parseInt(colorCodeId),
      color_code: parseInt(colorCode),
      qty: parseInt(quantity),
    };
    // console.log('Sending order data:', JSON.stringify(orderData));
    try {
      const response = await fetch(import.meta.env.VITE_API_URL+"api/cartitem/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Order placed successfully:", result);
      // Handle success (e.g., show a success message, clear form, etc.)
    } catch (error) {
      console.error("Error placing order:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return <></>;
};

export default OrderItem;
