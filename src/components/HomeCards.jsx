import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCards = ({ items, itemPack }) => {
  console.log(itemPack);
  function get_price(id) {
    
    // Check if itemPack[id].price is not empty
    if (itemPack[id] && itemPack[id].price !== "") {
      console.log("get_price", itemPack[id].price);
      return itemPack[id].price
    }
  }
  return (
    <section
      id="Products"
      className=" px-10 pb-10 flex flex-wrap justify-center align-center bg-zinc-950 gap-x-5 gap-y-5"
    >
      {items.map((item, id) => (
        // console.log(item.description)
        <Card
          key={item}
          img_name={item.images_item[0].img_url}
          description={item.description.substring(0, 55)}
          price={`Rs. ${itemPack[id]?.price ?? ''}`}
          itemId={item.id}
        ></Card>
      ))}
    </section>
  );
};

export default HomeCards;
