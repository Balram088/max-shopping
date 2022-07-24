import styled from "styled-components";

export const Wrapper = styled.div`

display: flex;
width:100%;
gap:100px;
font-weight:700;
font-size:15px;
padding:4px;
color:white;
margin:auto;
position: fixed;
z-index: 12;
background-color:black;
margin-bottom:6px;


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