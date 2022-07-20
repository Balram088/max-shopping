import React from 'react'
import { Link } from "react-router-dom";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { Wrapper } from './Style/NavTopCss';



export const NavbarTop = () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
       {/* keep all the NavLinks here */}
     <Wrapper>
     <div class="left">
            <div> <LocalShippingIcon/>  <Link to="/free-shipping"> Free Shipping</Link>  </div>
            <div> <StorefrontOutlinedIcon/>  <Link to="/return-to-store">Return To Store </Link>  </div>
            <div> <StorefrontOutlinedIcon/>  <Link to="/click-and-collect"> Click & Collect </Link>  </div>
           
     </div>
     <div class="right">
            <div>  <Link to="/download-our-app">DownLoad Our Apps</Link>  </div>
            <div>  <Link to="/store-locator">Store Locator</Link>  </div>
            <div>  <Link to="/help">Help</Link>  </div>
     </div>
</Wrapper>
    
    </>

  )
}

export default NavbarTop