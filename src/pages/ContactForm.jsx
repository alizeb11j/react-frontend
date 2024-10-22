import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
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
      console.log(formData);
      // Here you would typically send the form data to a server
      navigate("/");

    }
  };

  return (
    <>
      <div className="text-white bg-zinc-950  flex w-full justify-center items-center ">
        {/* For bg color and text color */}
        <div className=" lg:max-w-[1280px]">
          {/** For center column at max 1280px */}
          <div className="lg:w-[20rem] my-8">
            <h1 className="text-3xl font-bold mb-6 text-center mt-5" style={{ fontFamily: "MabryPro-Light" }}>
              Contact Us
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-sm" style={{ fontFamily: "MabryPro-Light" }}>
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
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm" style={{ fontFamily: "MabryPro-Light" }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-100 text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7bf5f3]"
                  style={{ fontFamily: "MabryPro-Light" }}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2 text-sm" style={{ fontFamily: "MabryPro-Light" }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-100 text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7bf5f3]"
                  style={{ fontFamily: "MabryPro-Light" }}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 text-sm" style={{ fontFamily: "MabryPro-Light" }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-100 text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7bf5f3]"
                  style={{ fontFamily: "MabryPro-Light" }}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-sm" style={{ fontFamily: "MabryPro-Light" }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-100 text-black rounded px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-[#7bf5f3]"
                  style={{ fontFamily: "MabryPro-Light" }}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#7bf5f380] text-black px-4 py-2 rounded hover:bg-[#55a5a4] focus:outline-none focus:ring-2 focus:ring-[#7bf5f3] focus:ring-offset-2 focus:ring-offset-black"
                style={{ fontFamily: "MabryPro-Light" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
