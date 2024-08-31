import React from 'react'
import bfg1 from "../assets/images/bfg1.jpg"
import bfg2 from "../assets/images/bfg2.jpg"
import bfg3 from "../assets/images/bfg3.jpg"
import bfg4 from "../assets/images/bfg4.jpg"
import bfn1 from "../assets/images/bfn1.jpg"
import bfn2 from "../assets/images/bfn2.jpg"
import bfn3 from "../assets/images/bfn3.jpg"
import bfn4 from "../assets/images/bfn4.jpg"
import bfn5 from "../assets/images/bfn5.jpg"
import bfn6 from "../assets/images/bfn6.jpg"
import gc1 from "../assets/images/gc1.jpg"
import gc2 from "../assets/images/gc2.jpg"
import gc3 from "../assets/images/gc3.jpg"
import gc4 from "../assets/images/gc4.jpg"
import gc5 from "../assets/images/gc5.jpg"
import gc6 from "../assets/images/gc6.jpg"
import polka1 from "../assets/images/polka1.jpg"
import polka2 from "../assets/images/polka2.jpg"
import polka3 from "../assets/images/polka3.jpg"
import polka4 from "../assets/images/polka4.jpg"
import ss1 from "../assets/images/ss1.jpg"
import ss2 from "../assets/images/ss2.jpg"
import ss3 from "../assets/images/ss3.jpg"
import ss4 from "../assets/images/ss4.jpg"



const ShadeCard = ({ id, value }) => {

    
    const bfg_list = [bfg1, bfg2, bfg3, bfg4];
    const bfn_list = [bfn1, bfn2, bfn3, bfn4, bfn5, bfn6];
    const gc_list = [gc1, gc2, gc3, gc4, gc5, gc6];
    const polka_list = [polka1, polka2, polka3, polka4];
    const ss_list = [ss1, ss2, ss3, ss4];
    
    return (
      <>
          {`${id}: ${value}`}
          <div className="flex flex-row flex-wrap justify-center items-center mx-auto gap-3">
          {bfn_list.map((img,id) => (
          <img
            key={id}
            className="h-60 w-2/5 snap-center "
            src={img}
            alt="insta_img ${img.id}"
          />
        ))}  
              
            </div>
            
      </>
  )
}

export default ShadeCard