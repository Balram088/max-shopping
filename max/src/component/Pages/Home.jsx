import React from 'react';
import style from 'styled-components';
import { Box } from "@chakra-ui/react";
import ImageSlider from "../Slider/ImageSlider";
import { SlideData } from "../Slider/SlideData";

const Banner = style.div`
  background-color: #303ab2;
  height: 43px;
  text-align: center;
  padding-top: 8px;
  color: #ffff;
  
 
 
`;

export const Home = () => {
  return (
 <>  
 <div>
      <Banner>
        <p>
          Buy 3 @ ₹499/699/999/1499 + Free Shipping on orders above JUST ₹499.
        </p>
      </Banner>
      <Banner>
        <p>
          Buy 3 @ ₹499/699/999/1499 + Free Shipping on orders above JUST ₹499.
        </p>
      </Banner>
      <Box w="100%" p={4} color="white">
        <ImageSlider slides={SlideData} />
      </Box>
      </div>
   </>

)
}
