import { Spacer } from "@chakra-ui/react";
import {SocialIcon,SocialIcon2,footerData} from './FooterData';
import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
SocialRow
} from "./FooterStyle";
import { Link } from "react-router-dom";


const Footer = () => {
return (
	<Box>
        
	<Container>
		<Row>
          {footerData.map((e)=>(
            <Column>
            <Heading>{e.heading}</Heading>
                        <FooterLink>{e.flink}</FooterLink>
<FooterLink>{e.flink}</FooterLink>
            <FooterLink href="#">{e.flink1}</FooterLink>
           <FooterLink  href="#">{e.flink2}</FooterLink>
            <FooterLink href="#">{e.flink3}</FooterLink>
            <FooterLink href="#">{e.flink4}</FooterLink>
            <FooterLink href="#">{e.flink5}</FooterLink>
            <FooterLink href="#">{e.flink6}</FooterLink>
            <FooterLink href="#">{e.flink7}</FooterLink>

         </Column>
          ))}
	
		
		</Row>
        <SocialRow SocialRow>
            <Spacer/>
            {SocialIcon.map((e)=>(
                <Link to={e.to}>{e.icon}</Link>
            ))}
	   </SocialRow>
      <SocialRow>
            {SocialIcon2.map((e)=>(
            
                <span> <Link to={e.to}><p> {e.icon} </p></Link></span>
               
               
            ))}
	   </SocialRow>
       <br />
       <hr />
       <SocialRow>
           <div style={{marginTop:"30px" ,display:"flex"}}> 
             <div>
             <Link class="logo" to="/"><img style={{ width: "110px" }} src="https://i1.lmsin.net/website_images/in/logos/header/logo-max.svg" alt="logo"  /></Link>

             </div>
             
            <div style={{fontSize:"10px" ,color:"gray",marginLeft:"30px"} } >
                
            <p>© 2022 Retail World Limited.</p>
            <p >Terms & Conditions - Privacy Policy</p>
            </div>

           </div>
	   </SocialRow>
	</Container>
	</Box>
);
};
export default Footer;
