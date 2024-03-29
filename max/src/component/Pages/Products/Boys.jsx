import { Box, Button, Grid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Body, Banner } from "../Home/homeStyle";
import axios from "axios";
import { Link } from "react-router-dom";

const Boys = () => {
  const [data, setData] = useState([]);
  const getProductData = () => {
    axios
      .get("https://balram088.github.io/json-api-max/pdb.json")
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getProductData();
  });
  return (
    <div>
      <Body>
        <Banner>
          <p>
            Buy 3 @ ₹499/699/999/1499 + Free Shipping on orders above JUST ₹499.
          </p>
        </Banner>{" "}
        <Banner>
          <p>
            Buy 3 @ ₹499/699/999/1499 + Free Shipping on orders above JUST ₹499.
          </p>
        </Banner>{" "}
        <Banner>
          <p>
            Buy 3 @ ₹499/699/999/1499 + Free Shipping on orders above JUST ₹499.
          </p>
        </Banner>
        <Grid
          w="100%"
          templateRows="repeat(333px ,333px)"
          templateColumns="repeat(4, 1fr)"
          gap={10}
          mt="10px"
          mb="0px"
        >
          {data.map((e) => (
            <Box boxShadow="dark-lg" p="4" rounded="md" bg="white">
                <Link to={`/boys/${e.id}`}><img src={e.image_url} alt="" /></Link>
              
              <Text fontWeight="500" align="left" fontSize="20px" m="2px">
                <span>₹</span>{e.price}
              </Text>
              <Text fontWeight="700" fontFamily="ProximaNova-Regular">
                {e.brand}
              </Text>
              <Text  fontFamily="ProximaNova-Regular">
                {e.name}
              </Text>
              <Text  fontFamily="ProximaNova-Regular">
                {e.rating}
              </Text>
              <Button colorScheme="red" w="100%">
                <Link to="/basket">Add To Basket</Link>
              </Button>
            </Box>
          ))}
           </Grid>
      </Body>
    </div>
  );
};

export default Boys;
