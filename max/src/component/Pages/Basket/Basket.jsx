import React, { useState } from "react";
import { Banner} from "../Home/homeStyle";
import "./Basketcss.jsx";
import { BasketWrapper } from "./Basketcss.jsx";

const Basket = () => {
  var cart = JSON.parse(localStorage.getItem("cartItem")) || [];
  const [products, setProducts] = useState(cart);

  let totalMrp = cart.map((item) => item.price).reduce((prev, curr) => prev + curr, 0)
  const handleRemove = (id) => {
    let newTodo = products.filter((item) => item.id !== id);
    setProducts(newTodo);
  };

  return (
    <>
   
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
          <BasketWrapper>
      <div className="basketMainHead">
        <p className="basketHeading">Your Shopping Basket</p>
        <hr />
      </div>
      <div className="basketMain">
        <div className="basketMainLeft">
          
            <div  className="map_div">
              <div>
                <img src="https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010667062-Multicolour-M-1000010667062-8272021_01-2100.jpg" className="images" alt="..." />
              </div>
              <div>
                <h5>MEN'S PALM ANGLES TRACK JACKET</h5>
                <p>₹  745 </p>
                <p>Colour: Red</p>
                <p>Size: small</p>
                <div>
                  <button><h1>+</h1></button>
                  <input class="qtyinput" type="number" value="1" />
                  <button><h1>-</h1></button>
                </div>
              </div>

              <button onClick={() => handleRemove(1)}>Remove</button>
            </div>
            <div  className="map_div">
              <div>
              <img src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010855903-Orange-RUST-1000010855903-12012022_01-2100.jpg" className="images" alt="" />
              </div>
              <div>
                <h5>MEN'S PALM ANGLES TRACK JACKET</h5>
                <p>₹  745 </p>
                <p>Colour: Red</p>
                <p>Size: small</p>
                <div>
                  <button><h1>+</h1></button>
                  <input class="qtyinput" type="number" value="2" />
                  <button><h1>-</h1></button>
                </div>
              </div>

              <button onClick={() => handleRemove(1)}>Remove</button>
            </div><div  className="map_div">
              <div>
             <img src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010373162-Pink-Pink-1000010373162-9152021_01-2100.jpg" className="images" alt="" />
              </div>
              <div>
                <h5>WOMEN's PALM ANGLES TRACK JACKET</h5>
                <p>₹  445 </p>
                <p>Colour: Mhroon</p>
                <p>Size: Xl</p>
                <div>
                  <button><h1>+</h1></button>
                  <input class="qtyinput" type="number" value="5" />
                  <button><h1>-</h1></button>
                </div>

              </div>

              <button onClick={() => handleRemove(1)}>Remove</button>
            </div><div  className="map_div">
              <div>
              <img src="https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011273514-Multicolour-M-1000011273514-18042022_01-2100.jpg" className="images" alt="" />
              </div>
              <div>
                <h5>GIRLS'S PALM ANGLES TRACK JACKET</h5>
                <p>₹  1549 </p>
                <p>Colour: Red</p>
                <p>Size: small</p>
                <div>
                  <button><h1>+</h1></button>
                  <input class="qtyinput" type="number" value="2" />
                  <button><h1>-</h1></button>
                </div>
              </div>

              <button onClick={() => handleRemove(1)}>Remove</button>
            </div>
        
        </div>
        <div className="basketMainRight">
          <div className="basketMainDiv1">
            <div className="basketDiv1">
              <p>Deliver to </p>
              <input type="number" className="basketInp" placeholder="Enter pincode" />
              <button className="basketInpBtn">Check</button>
            </div>
            <p
              style={{
                backgroundColor: "linen",
                fontSize: "14px",
                padding: "10px",
              }}
            >
              Enter pin code in box above for delivery estimates and charges
            </p>
          </div>
          <div className="basketDiv2">
            <div>
              <img
                src="https://www.maxfashion.in/static/icons/gift-box.png"
                alt="Error loading pic"
              />
            </div>
            <div>
              <div className="basketDiv2Flex">
                <div>Offers for you!</div>
                <div style={{ color: "blue" }}>Select</div>
              </div>
              <p style={{ color: "gray" }}>
                Choose and apply voucher in 2 simple steps
              </p>
            </div>
          </div>
          <div className="basketDiv3">
            <div className="basketDiv3flex1">
              <p>Total MRP</p>
              <h3>₹ 3484</h3>
            </div>
            <div className="basketDiv3flex2">
              <p>Shipping charge</p>
              <h3>Free</h3>
            </div>
            <div className="basketDiv3flex3">
              <h2>Total</h2>
              <h2>₹ 3484</h2>
            </div>
            <hr style={{ width: "90%" }} />
            <button className="basketDiv3btn">Checkout now</button>
          </div>
          <div className="basketDiv4">
            <div className="basketDiv4Flex">
              <p style={{ fontSize: "16px" }}>Landmark Reward points</p>
              <button className="basketDiv4Btn">Login</button>
            </div>
            <p style={{ fontSize: "14px", color: "gray" }}>
              Tap here to log in and enrol for Landmark Rewards. Earn with every
              purchase and redeem for discounts.
            </p>
            <p style={{ color: "rgb(48,58,178)" }}>
  
              <u>Learn more</u>
            </p>
          </div>

          <div className="basketDiv5"></div>
        </div>
      </div>
      </BasketWrapper>
    </>
  );
};

export default Basket;
