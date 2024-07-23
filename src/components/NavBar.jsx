import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import logo_gp from "../assets/images/logo-group.png";
import search_icon from "../assets/images/Search.png";
import cart_icon from "../assets/images/shopping-cart.png";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {/* <!-- Navbar --> */}
      <div className="bg-zinc-950">
        <nav className="relative container  mx-auto px-2 ">
          {/* Flex-box */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="pt-2">
              <img className="pl-0 md:pl-2 min-w-48 h-48" src={logo_gp} alt="Logo" onClick={() => { navigate("/")}}/>
            </div>
            {/* <Menu> */}
            <div className="flex space-x-6 text-white">
              <Link className="hidden md:flex no-underline text-xl " style={{ fontFamily: "MabryPro-Bold" }} to="/">
                Home
              </Link>
              <Link className="hidden md:flex no-underline text-xl" style={{ fontFamily: "MabryPro-Bold" }} to="/products">
                Products
              </Link>
              <Link className="hidden md:flex no-underline text-xl " style={{ fontFamily: "MabryPro-Bold" }} to="/about">
                About
              </Link>
              <Link className="hidden md:flex no-underline text-xl" style={{ fontFamily: "MabryPro-Bold" }} to="/contact">
                Contact Us
              </Link>
            </div>
            <div className="flex md:shrink-0  gap-4 mx-0 pl-0 pr-8" style={{  left: "-8px"}}>
              <a href="#">
                <img className="h-8  " src={search_icon} alt="Search Icon" />
              </a>
              <a href="/cart">
                <img className="h-8" src={cart_icon} alt="Cart Icon" />
              </a>
              {/* <!-- Hamburger Icon --> */}

              <button
                id="menu-btn"
                className={`${
                  isOpen && "open"
                } hamburger md:hidden focus:outline-none `}
                onClick={() => {
                  setOpen((prev) => !prev);
                }}
              >
                <span className="hamburger-top" ></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu --> */}
          <div className=" md:hidden ">
            <div
              id="menu"
              className={` ${
                isOpen === false ? "hidden" : ""
                } flex flex-col items-center self-end  space-y-6  font-bold bg-zinc-900 sm:w-auto sm:self-center transition delay-300  ease-in-out border border-solid border-zinc-500 rounded-md`}
                style={{ fontFamily: "MabryPro-Bold" }}
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              <Link className="text-white" style={{ fontFamily: "MabryPro-Light" }} to="/">
                Home
              </Link>

              <Link className="text-white" style={{ fontFamily: "MabryPro-Light" }} to="/products">
                Products
              </Link>
              <Link className="text-white" style={{ fontFamily: "MabryPro-Light" }} to="/about">
                About Us
              </Link>
              <Link className="text-white" style={{ fontFamily: "MabryPro-Light" }} to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
