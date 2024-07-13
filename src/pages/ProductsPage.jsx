
import Footer from "../components/Footer";
import prod_img1 from "../assets/images/prod_img1.png";
import prod_img2 from "../assets/images/prod_img2.png";
import HomeCards from "../components/HomeCards"

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const ProductsPage = () => {
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
  // const [data, setData] = useState([]);

  // const getData = async () => {
  //   const data = await fetch("http://127.0.0.1:8000/api/images_items/");
  //   const result = await data.json();
  //   setData(result);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  // console.log(data);
  return (
    <>
      <section
        id="Products"
        className="pt-5 space-y-10 text-white text-3xl text-center bg-zinc-950"
      >
        {/* Heading */}
        <h1
          className="pb-10 font-light"
          style={{ fontFamily: "MabryPro-Medium" }}
        >
          Stitch Your Dreams
        </h1>
        {/* Featured Images */}
        <div className="flex flex-col justify-center mx-auto px-5 pb-10 gap-5 max-w-md md:flex-row">
          {img_list.map((img) => (
            <img
              key={img.id}
              className="h-80 space-x-5 px-5"
              src={img}
              alt="insta_img ${img.id}"
            />
          ))}
        </div>
        {/* <button className="gap-3 p-3 rounded-2xl border border-white border-solid bg-[#FFFFFF66]">
          <div className="relative font-medium text-lg text-white [font-family:'Mabry_Pro-Medium', Helvatica]">
            Embroidery Thread
          </div>
        </button> */}
        <Tabs
          value="emb_thread"
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
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc, id }) => (
              <TabPanel
                key={value}
                value={value}
                style={{ fontFamily: "MabryPro-Medium" }}
              >
                <HomeCards length={id} />
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
