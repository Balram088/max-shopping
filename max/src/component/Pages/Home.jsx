import React from "react";
import style from "styled-components";

import { Box, Center, Spacer, Text } from "@chakra-ui/react";

import {  Image ,Stack} from "@chakra-ui/react";
import ImageSlider from "../Slider/ImageSlider";
import { SlideData } from "../Data/SlideData";
import {flexData} from '../Data/HomeData';

const Banner = style.div`
  background-color: #303ab2;
  height: 50px;
  text-align: center;
  padding-top: 20px;
  color: #ffff;
`;
const Body = style.div`
margin:0px 100px 0px 100px;
`



export const Home = () => {
  return (
    <>
    <Body>
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
      
        <Center w="100%" color="white">
          <ImageSlider slides={SlideData} />
        </Center>
        
        {
         flexData.map((e)=>(
          <Box>
          <Center h="100%" w="100%">
          <Text fontSize='6xl'  m='40px' >{e.tag}</Text>
          <Spacer/>
          </Center>
          <hr />
           <Center h="100%" w="100%">
           <img
             src={e.img}
             alt=""
           />
         </Center>
         </Box>
         )) 
        }


      </div>       
       </Body>
        <Box w="100%" color="white">
          <ImageSlider slides={SlideData} />
        </Box>
        <Box w="100%" mb="50" center>
          <Center w="100%" h="100px" color="white">
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBytwo1A-FREESHIPCOMMON-20JULY2022A.png"
              alt=""
            />
          </Center>
        </Box>

        <div>
          <hr />
          <div>
            <p style={{ textAlign: "left", fontSize: "40px", margin: "40px" }}>
              Style Spotlight
            </p>
          </div>

          <Center h="100%" w="100%">
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBythree-D-Boys-18JULY2022.png"
              alt=""
            />
          </Center>
        </div>
        <div>
          <hr />
          <div>
            <p style={{ textAlign: "left", fontSize: "40px", margin: "40px" }}>
            Shop By Age
            </p>
          </div>
          <Stack direction='row' spacing='10' ml='35'> 
  <Image
   h='200'
   w='81'
    src='https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-5modularblock-oneBytwo1C-Boys-18JULY2022.png'
    alt='Dan Abramov'
  />
  <Image
  
  h='200'
   w='81'
    src='https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBythree-E-Boys-18JULY2022.png'
    alt='Dan Abramov'
  />
  <Image 
   h='200'
   w='81'
    src='https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBythree-FF-Boys-18JULY2022.png' alt='Dan Abramov' />
</Stack>
        </div>
      
    </>
  );
};
