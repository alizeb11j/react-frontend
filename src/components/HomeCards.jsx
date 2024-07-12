import { Link } from "react-router-dom";
import Card from "./Card";
import prod_img1 from "../assets/images/prod_img1.png";

const HomeCards = ({ length}) => {
  const cards = [];
  for (let i = 1; i <= length; i += 1) {
    cards.push(i);
  }

  return (
    <section
      id="Products"
      className=" px-10 pb-10 flex flex-wrap justify-center align-center bg-zinc-950 gap-x-5 gap-y-5"
    >
      {cards.map((card) => (
        <Card
          key={card}
          img_name={prod_img1}
          description="Egyption Raw Material, Fast colors, count 10/2"
          price="Rs.1000"
        ></Card>
      ))}
    </section>
  );
};
export default HomeCards;
