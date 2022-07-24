import React from "react";
import { Routes, Route } from "react-router-dom";
// import Footer from "../components/footer/Footer";
import Navbar from "../Navs/Navbar";
import About from "../Pages/About";
import { Home } from "../Pages/Home/Home";
// import { Basket } from "../components/Basket/Basket";
// import Checkout from "../components/Checkout/Checkout";
import {Box} from '@chakra-ui/react';
import Men from "../Pages/Products/Men";
import Women from "../Pages/Products/Women";
import Boys from "../Pages/Products/Boys";
import Girls from "../Pages/Products/Girls";
import SingalProduct from "../Pages/Products/SingalProduct";
import Basket from "../Pages/Basket/Basket";


const MainRoutes = () => {
  return (
    <div>
      <Box><Navbar /></Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/boys" element={<Boys />} />
        <Route path="/girls" element={<Girls/>} />
        <Route path="boys/:id" element={<SingalProduct/> }/>
        <Route path="/basket" element={<Basket />} />


     {/*    <Route path="/basket" element={<Basket />} />
        <Route path="/checkout" element={<Checkout />} /> */}
      </Routes>
      
      {/* <Footer /> */}
    </div>
  );
};

export default MainRoutes;
