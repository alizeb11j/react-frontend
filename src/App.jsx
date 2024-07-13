import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./Layout/MainLayout";
import JobsPage from "./pages/JobsPage";
import TestComponent from "./pages/TestComponent";
import ProductsPage from "./pages/ProductsPage";
import SingleProduct, { prodLoader } from "./pages/SingleProduct";
import ContactForm from "./pages/ContactForm";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/test" element={<TestComponent />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage  />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/prod/:id"
          element={<SingleProduct />}
          loader={prodLoader}
        />
        <Route index element={<HomePage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
