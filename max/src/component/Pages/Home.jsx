import React from "react";
import style from "styled-components";

import { Box, Center, Spacer, Text } from "@chakra-ui/react";

import ImageSlider from "../Slider/ImageSlider";
import { SlideData } from "../Data/SlideData";
import { flexData } from "../Data/HomeData";


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
              Buy 3 @ ₹499/699/999/1499 + Free Shipping on orders above JUST
              ₹499.
            </p>
          </Banner>
          <Banner>
            <p>
              Buy 3 @ ₹499/699/999/1499 + Free Shipping on orders above JUST
              ₹499.
            </p>
          </Banner>
          <Banner>
            <p>
              Buy 3 @ ₹499/699/999/1499 + Free Shipping on orders above JUST
              ₹499.
            </p>
          </Banner>
          <Center w="100%" color="white">
            <ImageSlider slides={SlideData} />
          </Center>

          {flexData.map((e) => (
            <Box>
              <Center h="100%" w="100%">
                <Text fontSize="6xl" m="40px">
                  {e.tag}
                </Text>
                <Spacer />
              </Center>
              <hr />
              <Center h="100%" w="100%">
                <img src={e.img} alt="" />
              </Center>
            </Box>
          ))}
        </div>

      </Body>
    </>
  );
};
