import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import prod_img1 from "../assets/images/prod_img1.png";
import prod_img2 from "../assets/images/prod_img2.png";
import HomeCards from "../components/HomeCards";
import { useItems } from "../ItemsContext";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  ListItemSuffix,
} from "@material-tailwind/react";
import CircleLoader from "react-spinners/CircleLoader";

const ProductsPage = () => {
  const { items, loading, setLoading, error } = useItems();
  const [activeTab, setActiveTab] = useState("Embroidery Thread");
  const [tabData, setTabData] = useState({});
  // console.log("IP:",itemPack);
  // console.log(images);
  const data = [
    {
      label: "Embroidery Thread",
      value: "emb_thread",
      id: 6,
    },
    {
      label: "Gola",
      value: "gola",
      id: 5,
    },
    {
      label: "Gucchi",
      value: "gucchi",
      id: 4,
    },
    {
      label: "ButterPaper",
      value: "butterpaper",
      id: 3,
    },
    {
      label: "Needles",
      value: "needles",
      id: 2,
    },
    {
      label: "Sheesha",
      value: "sheesha",
      id: 1,
    },
    {
      label: "Tools",
      value: "tools",
      id: 7,
    },
    {
      label: "Glue",
      value: "glue",
      id: 8,
    },
    {
      label: "Laces",
      value: "laces",
      id: 9,
    },
    {
      label: "Silai",
      value: "silai",
      id: 10,
    },
  ];

  const img_list = [prod_img1, prod_img2];
  useEffect(() => {
    // Fetch data for the initial tab
    fetchTabData("Embroidery Thread");
  }, []);
  const fetchTabData = (tabValue) => {
    if (!tabData[tabValue]) {
      // setLoading(true);
      // Fetch data for the selected tab
      // and update the tabData state
      const filteredItems = items.filter(
        (item) =>
          item.category === data.find((tab) => tab.value === tabValue).label
      );
      setTabData((prevData) => ({
        ...prevData,
        [tabValue]: filteredItems,
      }));
      // setLoading(false);
    }
    setActiveTab(tabValue);
  };
  return (
    <>
      <section
        id="Products"
        className="pt-5 space-y-10 text-white text-3xl text-center bg-zinc-950"
      >
        {/* Heading */}
        <h1
          className="pb-10 font-light text-3xl"
          style={{ fontFamily: "MabryPro-Medium" }}
        >
          Stitch Your Dreams
        </h1>
        {/* Featured Images */}
        <div className="flex flex-col justify-center mx-auto px-5 pb-10 gap-5 max-w-md md:flex-row">
          {img_list.map((img, id) => (
            <img
              key={id}
              className="h-80 space-x-5 px-5"
              src={img}
              alt="insta_img ${img.id}"
            />
          ))}
        </div>

        <Tabs
          value={activeTab}
          className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <TabsHeader
            className="bg-[#b424ecdc] text-white overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            indicatorProps={{
              className: "bg-zinc-800 shadow-none !text-gray-900",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                style={{ fontFamily: "MabryPro-Medium" }}
                onClick={() => fetchTabData(value)}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ label, value }) => (
              <TabPanel
                key={value}
                value={value}
                style={{ fontFamily: "MabryPro-Medium" }}
              >
                {tabData[value] ? (
                  <HomeCards items={tabData[value]} />
                ) : (
                  <div className="flex justify-center items-center h-64">
                    <CircleLoader color="#c200e9" loading={loading} size={60} />
                  </div>
                )}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </section>

      <Footer />
    </>
  );
};

export default ProductsPage;
