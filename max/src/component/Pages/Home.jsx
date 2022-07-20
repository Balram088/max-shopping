import React from 'react';
import style from 'styled-components';
import { Box,Center,Heading } from "@chakra-ui/react";
import ImageSlider from "../Slider/ImageSlider";
import { SlideData } from "../Slider/SlideData";
const Banner = style.div`
  background-color: #303ab2;
  height: 50px;
  text-align: center;
  padding-top: 20px;
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
      <Banner>
        <p>
          Buy 3 @ ₹499/699/999/1499 + Free Shipping on orders above JUST ₹499.
        </p>
      </Banner>
      <Box w="100%" color="white">
        <ImageSlider slides={SlideData} />
      </Box>
      <Box w="100%" mb="50" center>
      <Center  w="100%" h='100px' color='white'>
      <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBytwo1A-FREESHIPCOMMON-20JULY2022A.png" alt="" />

      </Center>
      </Box>
      
      <div>
      <hr />
     <div>
      <p style={{textAlign:"left" ,fontSize:"40px", margin:"40px"}}>Style Spotlight</p>
     </div>
  
      
      <Center h='100%' w='100%' >
        <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBythree-D-Boys-18JULY2022.png" alt="" />
        </Center> 
      
        </div>
        
      </div>
   </>

)
}
