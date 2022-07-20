import styled from "styled-components";

export const Wrapper = styled.div`

display: flex;
width:100%;
gap:100px;
font-weight:500;
font-size:14px;
padding:5px;
color:white;
margin:auto;
position: fixed;
z-index: 12;
background-color:black;


a{
  text-decoration: none;
}
.left {
    color:white;
    display:flex;
    gap:30px;
    width:50%;
    justify-content:space-aroun;
    
}
.right {
    color:white;
    display:flex;
    gap:30px;
    width:50%;
    justify-content:right;
    
}

`