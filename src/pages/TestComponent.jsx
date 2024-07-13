import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import single from "../assets/images/single.png";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader

export default function TestComponent() {

  return (
    <>
      <div className="w-1/2">
      <Carousel emulateTouch={true} infiniteLoop={true} autoPlay={true} interval={2000} transitionTime={500} showThumbs={false}>
                <div>
                    <img className="h-96 w-40" src={single} />
                    {/* <p className="legend ">Legend 1</p> */}
                </div>
                <div>
                    <img className="h-96 w-40" src={single} />
                    {/* <p className="legend ">Legend 2</p> */}
                </div>
                <div>
                    <img className="h-96 w-40" src={single} />
                    {/* <p className="legend ">Legend 3</p> */}
                </div>
      </Carousel>
      </div>

    </>
  );
}
