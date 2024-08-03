import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^\+?[0-9]\d{1,14}$/;
    return re.test(phone);
  };

  const addToOrder = async (userData) => {
    console.log("Sending user data:", JSON.stringify(userData));
    try {
      const response = await fetch("/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("User Added successfully. User ID:", data.result.id);
      
      // After adding the user, create the orders
      await createOrder(data.result.id);
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Error placing order. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "dark",
      });
     
    }
  };

  const createOrder = async (userId) => {
    try {
      const orderData = {
        order_status: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        user_id: parseInt(userId), 
      };
      console.log("Orderdata:",orderData)
      const response = await fetch("/api/orders/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Order created successfully:", data);
      toast.success("Order Placed Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "dark",
      });

    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("Error placing order. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // console.log(formData);
      // console.log(formData.name)
      const userData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
      };
      addToOrder(userData);


    }
  };

  return (
    <>
      <div className="text-white bg-zinc-950  flex w-full justify-center items-center ">
        {/* For bg color and text color */}
        <div className=" lg:max-w-[1280px]">
          {/** For center column at max 1280px */}
          <div className="lg:w-[20rem] my-8">
            <h1
              className="text-3xl font-bold mb-6 text-center mt-5"
              style={{ fontFamily: "MabryPro-Light" }}
            >
              Checkout
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 justify-center items-center">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm"
                  style={{ fontFamily: "MabryPro-Light" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-100 text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7bf5f3]"
                  style={{ fontFamily: "MabryPro-Light" }}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm"
                  style={{ fontFamily: "MabryPro-Light" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-100 text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7bf5f3]"
                  placeholder="johndoe@gmail.com"
                  style={{ fontFamily: "MabryPro-Light" }}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm"
                  style={{ fontFamily: "MabryPro-Light" }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-100 text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7bf5f3]"
                  placeholder="+923001234567"
                  style={{ fontFamily: "MabryPro-Light" }}
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm"
                  style={{ fontFamily: "MabryPro-Light" }}
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-gray-100 text-black rounded px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-[#7bf5f3]"
                  style={{ fontFamily: "MabryPro-Light" }}
                  required
                ></textarea>
              </div>
              <div className="flex flex-row justify-center items-center ">
                <button
                  type="submit"
                  className="bg-[#7bf5f380] text-black px-4 py-2 rounded hover:bg-[#55a5a4] focus:outline-none focus:ring-2 focus:ring-[#7bf5f3] focus:ring-offset-2 focus:ring-offset-black justify-center items-center "
                  style={{ maxWidth: "250px", width: "200px" }}
                  // onClick={() => { toast.success("Order Placed Successfully");}}
                >
                  <ToastContainer />
                  Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
