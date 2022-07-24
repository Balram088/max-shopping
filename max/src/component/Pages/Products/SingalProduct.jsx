import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Banner, Body } from '../Home/homeStyle';


const SingalProduct= () => {
  const [data,setData] =useState({});
  // const {state} = useContext(AuthContext);

  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch(` https://balram088.github.io/json-api-max/pdb.json${params.id}`)
    .then((res) => res.json())
    .then((res) =>{
     setData(res.data.data)
    })
 },[]);
// console.log("fgasfafa",data);
// <Route path="boys/:id" element={<SingalProduct/> }/>   
// <Link to={`/boys/${e.id}`}><img src={e.image_url} alt="" /></Link>

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
      
   
        <h1>ProductNumber{params.id}</h1>
         <Box boxShadow="dark-lg" p="4" rounded="md" bg="white" h="700px" w="600px" ml="23%">
              <img src="https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010667100-Multicolour-M-1000010667100-8272021_02-2100.jpg" alt="" />
              <Text fontWeight="500" align="left" fontSize="20px" m="2px">
                <span>₹</span>599
              </Text>
              <Text fontWeight="700" fontFamily="ProximaNova-Regular">
              HERON PRESTON
              </Text>
              <Text  fontFamily="ProximaNova-Regular">
              MEN'S HERON PRESTON T-SHIRT
              </Text>
              <Text  fontFamily="ProximaNova-Regular">
              ★★★★{data.rating}
              </Text>
              </Box> 
        <div > <Link to="/">Go Back</Link>  </div>
    
    
    </Body>
    </div>
  )
}

export default SingalProduct
