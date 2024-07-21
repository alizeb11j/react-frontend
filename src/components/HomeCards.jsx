import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCards = ({ items, length, itemPack }) => {
  const cards =
    items && length > 0
      ? items
      : Array.from({ length: length }, (_, i) => ({ id: i + 1 }));


  function get_price(id) { 
    
      // Check if itemPack[id].price is not empty
      if (itemPack[id] && itemPack[id].price !== "") {
        // console.log("get_price", itemPack[id].price);
        return itemPack[id].price
      }

  }
  // {
  //   items.map((item,id) => (
  //   console.log(item.item_id[id])
  // ))}

  return (
    <section
      id="Products"
      className=" px-10 pb-10 flex flex-wrap justify-center align-center bg-zinc-950 gap-x-5 gap-y-5"
    >
      {items.map((item, id) => (
        // console.log(item.description)
        <Card
          key={item}
          img_name={item.img_url}
          description={item.item_id[0].description.substring(0, 55)}
          price={`Rs. ${get_price(id)}`}
          itemId={item.item_id[0].id}
        ></Card>
      ))}
    </section>
  );
};
export default HomeCards;
