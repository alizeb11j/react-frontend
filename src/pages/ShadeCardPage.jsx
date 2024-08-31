import React from 'react'
import Footer from "../components/Footer";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import ShadeCard from "../components/ShadeCard";

const ShadeCardPage = () => {
    const data = [
        {
          label: "Butterfly Gola",
          value: "gola",
          id: 5,
        },
        {
          label: "Butterfly Nalki",
          value: "nalki",
          id: 4,
        },
        {
          label: "Golden Chain",
          value: "goldenchain",
          id: 3,
        },
        {
          label: "Polka",
          value: "polka",
          id: 2,
        },
        {
          label: "Supersunny",
          value: "supersunny",
          id: 1,
        },
      
      ];
  return (
      <>
          <section id="ShadeCard" className="pt-5 space-y-10 text-white text-3xl text-center bg-zinc-950">
          <Tabs
          value="gola"
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
            {data.map(({ label,value,id}) => (
              <TabPanel
                key={value}
                value={value}
                style={{ fontFamily: "MabryPro-Medium" }}
                >
                        
                <ShadeCard id={id} value={value}/>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
          </section>
          <Footer />
      </>
  )
}

export default ShadeCardPage