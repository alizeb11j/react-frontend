import { Link } from "react-router-dom";
import Card from "./Card";


const HomeCards = ({ items }) => {

  // {
  //   items.map((item, id) => (
  //   console.log(item.item_pack_price[0].price )
  // ))}
  return (
    <section
      id="Products"
      className=" px-10 pb-10 flex flex-wrap justify-center align-center bg-zinc-950 gap-x-5 gap-y-5"
    >
      {items.map((item, id) => (
        // console.log(item.description)
        <Card
          key={id}
          img_name={item.images_item[0].img_url}
          name={item.name}
          price={`Rs. ${item.item_pack_price[0].price ?? ''}`}
          itemId={item.id}
        ></Card>
      ))}
    </section>
  );
};

export default HomeCards;
