import React from 'react';
import { Link } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { Wrap } from './Style/NavSecondCss';



export const NavbarSecond = () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
    <Wrap>

  <nav>
    <div class="wrapper">
     <Link class="logo" to="/"><img style={{ width: "110px" }} src="https://i1.lmsin.net/website_images/in/logos/header/logo-max.svg" alt="logo"  /></Link>
      {/* <input type="radio" name="slider" id="menu-btn"/> */}
      {/* <input type="radio" name="slider" id="close-btn"/> */}
      <ul class="nav-links">
          
          <li>  <Link class="desktop-item" to="/women">Women</Link> 
          <label for="showMega" class="mobile-item"></label>
          <div class="mega-box">
            <div class="content">
            
              <div class="row">
                <header>Verieties of Women Dresses</header>
                <ul class="mega-links">
                  <li><Link class="desktop-item" to="/tops">Tops</Link></li>
                  <li><Link class="desktop-item" to="/bottoms">Bottoms</Link></li>
                  <li><Link class="desktop-item" to="/indian-wear">Indian Wear</Link></li>
                  <li><Link class="desktop-item" to="/accessories">Accessories</Link></li>
                  <li><Link class="desktop-item" to="/winterwear">Winterwear</Link></li>
                  {/* <li><Link class="desktop-item" to="/more">More</Link></li> */}

                </ul>
              </div>
              <div class="row">
              <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Women-Bottoms-Desktop2-05Nov2019.jpg"/>
              </div>
              <div class="row">
              <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Women-SportsWear-Desktop1-05Nov2019.jpg"/>
              </div>
              <div class="row">
              <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Women-Winterwear-Desktop1-05Nov2019.jpg"/>
              </div>
            </div>
          </div>
        </li>



        <li>  <Link class="desktop-item" to="/men">Men</Link> 
          <label for="showMega" class="mobile-item"></label>
          <div class="mega-box">
            <div class="content">
            
              <div class="row">
                <header>Verieties of Men Dresses</header>
                <ul class="mega-links">
                  <li><Link class="desktop-item" to="/shirt">Shirts</Link></li>
                  <li><Link class="desktop-item" to="/pent">Pents</Link></li>
                  <li><Link class="desktop-item" to="/indian-wear">Indian Wear</Link></li>
                  <li><Link class="desktop-item" to="/accessories">Accessories</Link></li>
                  <li><Link class="desktop-item" to="/winterwear">Winterwear</Link></li>
                  <li><Link class="desktop-item" to="/more">More</Link></li>

                </ul>
              </div>
              <div class="row">
                <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Mens-Ethnicwear-Desktop1-05Nov2019.jpg" alt="" />
              </div>
              <div class="row">
               <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Mens-Tops-Desktop2-19May2021.jpg" alt="" />
              </div>
              <div class="row">
               <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Mens-Bottoms-Desktop3-05Nov2019.jpg " alt="" />
              </div>
            </div>
          </div>
        </li>

        <li>  <Link class="desktop-item" to="/girls">Girls</Link> 
          <label for="showMega" class="mobile-item"></label>
          <div class="mega-box">
            <div class="content">
            
              <div class="row">
                <header>Verieties of Girls Dresses</header>
                <ul class="mega-links">
                  <li><Link class="desktop-item" to="/tops">Tops</Link></li>
                  <li><Link class="desktop-item" to="/bottoms">Bottoms</Link></li>
                  <li><Link class="desktop-item" to="/indian-wear">Indian Wear</Link></li>
                  <li><Link class="desktop-item" to="/accessories">Accessories</Link></li>
                  <li><Link class="desktop-item" to="/winterwear">Winterwear</Link></li>
                  <li><Link class="desktop-item" to="/more">More</Link></li>

                </ul>
              </div>
              <div class="row">
                <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Girls-Tops-Desktop1-05Nov2019.jpg" alt="" />
              </div>
              <div class="row">
                <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Girls-Tops-Desktop2-05Nov2019.jpg" alt="" />
              </div>
              <div class="row">
                 <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Girls-OE-Desktop1-05May22.jpg" alt="" />
              </div>

            </div>
          </div>
        </li>

        <li>  <Link class="desktop-item" to="/boys">Boys</Link> 
          <label for="showMega" class="mobile-item"></label>
          <div class="mega-box">
            <div class="content">
            
              <div class="row">
                <header>Verieties of Boys Dresses</header>
                <ul class="mega-links">
                  <li><Link class="desktop-item" to="/shirt">Shirts</Link></li>
                  <li><Link class="desktop-item" to="/pent">Pents</Link></li>
                  <li><Link class="desktop-item" to="/indian-wear">Indian Wear</Link></li>
                  <li><Link class="desktop-item" to="/accessories">Accessories</Link></li>
                  <li><Link class="desktop-item" to="/winterwear">Winterwear</Link></li>
                  <li><Link class="desktop-item" to="/more">More</Link></li>

                </ul>
              </div>
              <div class="row">
              <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Boys-OE-Desktop1-05May2022.jpg" alt="" />
              </div>
              <div class="row">
                 <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Boys-BabyBoy-Desktop4-04Mar2022.jpg" alt="" />
              </div>
              <div class="row">
                <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Boys-Shoes-Desktop1-05Nov2019.jpg" alt="" />
              </div>
            </div>
          </div>
        </li>

            <div><label ><SearchOutlinedIcon/></label><input type="text" placeholder='What are you looking for?'/></div>

 
            <li><Link to="/signup">Sign Up</Link>  </li>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/basket">|  Basket <LocalMallRoundedIcon/> </Link></li>
      </ul>
      <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
    </div>
  </nav>
    </Wrap>
    </>
)
  }


export default NavbarSecond