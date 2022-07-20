import React from "react";
import { Routes, Route } from "react-router-dom";
// import Footer from "../components/footer/Footer";
import Navbar from "../Navs/Navbar";
import About from "../Pages/About";
import { Home } from "../Pages/Home";
// import Men from "../components/ProductPage/Men/Men";
// import Women from "../components/ProductPage/Women/Women";
// import { Basket } from "../components/Basket/Basket";
// import Checkout from "../components/Checkout/Checkout";
import {Box} from '@chakra-ui/react';

const MainRoutes = () => {
  return (
    <div>
      <Box><Navbar /></Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/checkout" element={<Checkout />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default MainRoutes;
