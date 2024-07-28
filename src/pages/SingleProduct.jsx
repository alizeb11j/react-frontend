import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import ProdSpecsCard from "../components/ProdSpecsCard";
import Footer from "../components/Footer";
import HomeCards from "../components/HomeCards";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { useItems } from "../ItemsContext";

const SingleProduct = () => {
  const [item, setItem] = useState(null);
  // For Back Button
  const location = useLocation();
  // For Getting Id of Page From URL
  const params = useParams();
  const { items, selectedProductId, loading, error } = useItems();
  // For Similar Items Section
  const Filtered_items = items.filter(
    (it) =>
      it?.category === item?.category &&
      it?.id !== item?.id &&
      it?.category &&
      item?.category
  );

  useEffect(() => {
    getItemById(params.id);
  }, [selectedProductId, location]);
  const getItemById = async (id) => {
    try {
      const data = await fetch(
        
          `/api/items/?item_id=${id ?? selectedProductId}`
      );
      const result = await data.json();

      setItem(result[0]);
    } catch (err) {
      console.log(err);
    }
  };

  function get_color_code(item) {
    let Color_code_list = [];
    if (!item || !item?.colors) return [];

    item.colors.map((color) => {
      if (color.color_code)
        Color_code_list.push(color.color_code.replace("#", ""));
    });
    return Color_code_list;
  }

  function get_color_id(item) {
    let Color_id_list = [];
    if (!item || !item?.colors) return [];

    item.colors.map((color) => {
      if (color.id) Color_id_list.push(color.id);
    });
    return Color_id_list;
  }

  return (
    <>
      <section
        id="single_prod"
        className="pt-5 space-y-10 text-white text-3xl text-center bg-zinc-950"
      >
        {item ? (
          <div className="flex flex-col justify-center align-center  md:flex-row">
            {/* (Left side) Carousal of Product Img */}
            <div className=" max-w-96 p-5 justify-center align-center mx-auto rounded-2xl">
              <Carousel
                emulateTouch={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={2000}
                showThumbs={false}
                width={"100%"}
                showArrows={false}
                showStatus={false}
              >
                {item.images_item.map((img, id) => (
                  <div key={id}
                    className="rounded-2xl">
                    <img
                      className=" min-w-20"
                      style={{ maxHeight: "400px", maxWidth: "400px" }}
                      src={img.img_url}
                    />
                    {/* <p className="legend ">Legend 1</p> */}
                  </div>
                ))}
              </Carousel>
            </div>
            {/* (Right side) Product Description */}

            <div
              className=" mx-auto "
              style={{ width: "80%", maxWidth: "40rem" }}
            >
              <ProdSpecsCard
                prodName={item.name}
                prodDescription={item.description}
                prodPackaging={item.item_pack_price[0].packaging_id[0]?.type || []}
                prodPrice={item.item_pack_price[0].price || 0}
                userColorCode={get_color_code(item)}
                userColorId={get_color_id(item)}
              />
            </div>
          </div>
        ) : (
          <div>Loader</div>
        )}

        {Filtered_items ? (
          <div className="bg-zinc-950  space-y-10 ">
            <p
              className="  text-white text-2xl text-center mx-auto px-5 "
              style={{ fontFamily: "MabryPro-Bold" }}
            >
              {Filtered_items.length > 0 ? "You May Also Like" : ""}
            </p>
            <HomeCards items={Filtered_items} />
          </div>
        ) : (
          <div className="bg-zinc-950  space-y-10"></div>
        )}
      </section>
      <Footer />
    </>
  );
};

export { SingleProduct as default };
