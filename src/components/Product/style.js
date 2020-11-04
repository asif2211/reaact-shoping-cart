import { FaBars } from 'react-icons/fa';
import {  Link } from 'react-router-dom';
import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-template-rows:  1.5em 1fr 1.5rem;
  grid-template-columns: 1fr;
  
`;
export const Title = styled.p`
  
  color:#54565A;
  &:hover{
  color: #ff8000;
}
`;

export const Header  = styled.div`
  grid-area: Header;
  background-color: #203040;
  color: #fff;
`

export const Main  = styled.div`
  grid-area: main;
  margin-bottom:auto;
  
`
export const Footer = styled.div`
  grid-area: footer;
  background-color: #203040;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display:flex;
  flex-wrap:wrap;
`;
export const SubMain = styled.div`
  flex:3 60rem;
`;
export const Sidebar = styled.div`
  flex:1 20rem;
  
`;

export const Linkstyle = styled(Link)`
color:#000;
text-align:center;
font-size:1.3rem;
text-decoration:none;
&:hover{
  color: #ff8000;
  opacity:.5px;
}
`

// product style

export const Ul  = styled.ul`
display:flex;
flex-wrap:wrap;
margin:0;
padding:0;
justify-content:center;
align-items:center;
list-style-type:none;

`
export const Li = styled.li`
flex:0 1 20rem;
height:33rem;
padding:1rem;

`
export const ProductBox = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
height:70%;


`;

export const Images = styled.img`
max-height:24rem;
max-width:24rem;
`

export const PriceMain  = styled.div`
display:flex;
justify-content:space-between;
align-items:center;

`;

export const Price = styled.div`
text-align:center;
font-size:1.2rem;
flex:1;
font-size:1.2rem;
  color:#54565A;

`;
export const Button = styled.button`
text-align:center;
padding:.5rem;
border: 0.1rem #c0c0c0 solid;
background-color: #F0C041;
cursor: pointer;
flex:1;
font-size:1rem;

&:hover {
    transition: all 0.2s ease-in-out;
    
    
  }
`;
// product detail section
export const CloseButton = styled.button`
  position: absolute;
  right:1rem;
  top:1rem;
  z-index:1000;

`;
export const ProductDetail =  styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  max-height:96vh;

`
export const ImagesDetail = styled.img`
   max-height:100vh;
   max-width:45rem;
   margin:0 auto;

`
export const DescriptionContainer = styled.div`
flex:1 1;
margin:1rem;

`
export const DetailTitle = styled.p`
  font-weight:bold;
  
`;
export const DetailDescription = styled.p`
  font-size:1rem;
`;
export const Size = styled.p`
  font-size:1rem;
`;
export const ButtonDetailCart = styled.button`
flex:0 1;
margin:1rem;
border: 0.1rem #c0c0c0 solid;
background-color: #F0C041;
padding:.5rem;
width:50%;
`

