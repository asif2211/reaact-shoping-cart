import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ItemExistance = styled.div`
  border-bottom: 0.1rem #c0c0c0 solid;
  
  display: flex;
  padding: 1.3rem;
  margin: 1rem;
  font-size:1.2rem;
  color:#54565A;
`;
export const Ul = styled.ul`
  margin-right:2rem;
`;
export const Li = styled.li`
  list-style-type: none;
  display:flex;
  border-bottom: 0.1rem #c0c0c0 solid;
  padding:1rem;
  
`;
export const CartItem = styled.div`
  padding:.5rem;
`;
export const Image = styled.img`
  flex:1;
  width:3rem;
  height:4rem;
  
`;
export const Title = styled.p`
  text-align: left;
  font-size:1.2rem;
  color:#54565A;
`;
export const ButtonContainer = styled.div`
  margin-left:1rem;
  
`;
export const RemoveBtnContainer = styled.div``;
export const TotalAmount = styled.span`
  color:#54565A;
  font-size:1.2rem;
`;
export const RemoveContainer = styled.div`
  margin-left:1rem;
`;
export const RemoveBtn = styled.button`
  
  
  
`
export const ProceedBtn = styled.button`
  border: none;
  background-color: #F0C041;
  padding:.5rem;
  text-align:center;
  margin:.3rem;
  width:10rem;
  font-size:1rem;
`
export const ProceedContainer = styled.div`

padding:1rem;
margin-left:3rem;
`
// checkout form
export const CheckoutModule = styled.div`
width:100%;
`

export const CheckoutContainer = styled.ul`
  width:100%;
    padding:0;
    list-style-type:none;
    
  
`
export const CheckoutFileds = styled.li`
width:100%;
  display:flex;
  flex-direction:column;
  padding:1rem;
  margin-left:2rem;
  
`
export const InputContainer = styled.div`
  width:100%;
  margin:.5rem;
  

`
export const Input = styled.input`
  width:70%;
  padding:.5rem;
  border:.1rem #c0c0c0 solid;
`

export const CheckOutBtn = styled.button`
  border: none;
  background-color: #ffc000;
  padding:.5rem;
  text-align:center;

  font-size:1.2rem;
  width:76%;
`

