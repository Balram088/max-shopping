import React from "react";
import { Box, Center, Spacer, Text } from "@chakra-ui/react";
import {Body,Banner} from './homeStyle';
import ImageSlider from "./Slider/ImageSlider";
import { SlideData } from "./SlideData";
import { flexData } from "./HomeData";
import { Link } from "react-router-dom";


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
              <Link to="/boys"><img src={e.img} alt="" /></Link>
              </Center>
            </Box>
          ))}
        </div>
      </Body>
    </>
  );
};
