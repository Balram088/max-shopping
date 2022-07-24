import style from "styled-components";
export const BasketWrapper = style.div`
*{
    font-family: ProximaNova-Regular,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
}

.basketHeading{
    font-size:24px;
}
.basketMainHead{
    /* border:2px solid red; */
    width:100%;
    margin:auto;
    
}
.basketMain{
    display:flex;
    border:2px solid gray;
    gap:2.5%;
    width:90%;
    margin:auto;
}

.basketMainLeft{
    height:auto;
    width:60%;
    
    
}
.basketMainRight{
    border-left:2px solid gray;
    height:800px;
    width:45%;
}
.basketMainDiv1{

    padding-left:10px;
    border:2px solid whitesmoke;
    margin-bottom:30px;
    height: 130px;
}
.basketDiv1{
    display:flex;
    gap:10px;
    padding-top: 20px;
}
.basketDiv1 p{
    margin-right: 10px;
}
.basketDiv1> .basketInp{
    height:35px;
    border-radius:06px;
    border:2px solid gray;
   
}
.basketDiv1> .basketInpBtn{
    height: 40px;
    width:90px;
    background-color: white;
    color: gray;
    border-radius: 06px;
    border:1px solid gray;
}

.basketDiv2{
    border:2px solid whitesmoke;
    height: 80px;
    margin-bottom:30px;
    display: flex;
    gap:25px;
    padding:10px;
}
.basketDiv2 img{
height:67px;
width:92px;
}


.basketDiv2Flex{
display:flex;
gap:90px;
}

.basketDiv3{
    border:2px solid whitesmoke;
    height: 200px;
    margin-bottom:30px;
}
.basketDiv3flex1{
    font-size: 14px;
    display:flex;
    justify-content:space-between;
    margin-right:10px;
    margin-bottom: 15px;
    
}

.basketDiv3flex2{
    display:flex;
    font-size: 14px;
    justify-content:space-between;
    margin-bottom: 15px;
    margin-right:10px;
    
}

.basketDiv3flex3{
    display:flex;
    margin-bottom: 15px;
    justify-content:space-between;
    margin-right:10px;
    
}
.basketDiv3 .basketDiv3btn{
    background-color: rgb(48,58,178);
    color:white;
    border-style:none;
    margin:5%;
    height:40px;
    width:90%;

}


.basketDiv4{
    border:2px solid whitesmoke;
    height: 140px;
    margin-bottom:30px;
    padding: 10px;
}
.basketDiv4>.basketDiv4Flex{
    display: flex;
    justify-content: space-between;
    margin-right:10px;
}
.basketDiv4Btn{
    
    background-color: white;
    color: rgb(48,58,178);
    border-color:rgb(48,58,178);
    height:40px;
    font-size: 16px;
    font-weight: bold;
    margin-top:5px;
    padding:10px;
}

.basketDiv5{
    border:2px solid whitesmoke;
    height: 50px;
}

/* cart data */
.images{
    height: 100px;
}
.map_div{
    display: flex;
   
    gap: 15px;
}


`

