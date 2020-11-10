import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
background: url(images/background.png) no-repeat;
background-size: 750px 417px;
width: 100%;
height: 417px;
  
`;
export const Weather = styled.div`
   max-height:100vh;
   max-width:45rem;
   margin:0 auto;
`
export const ApiData = styled.div`
    display:flex;
   flex-direction:row;
   justify-content:space-between;
   align-items:center;
   width:20rem;
   
   
`
export const Icon = styled.div`
    display:flex;
   max-height:100vh;
   font-size:4rem;
   justify-content:center;
   width:20rem;
   position:relative;
`
export const Form = styled.div`
   display:flex;
   flex-direction:row;
   justify-content:space-between;
   width:25rem;
   
`
export const Input = styled.input`
  border-width: 0 0 2px;
  border-color: #c0c0c0;
  outline:0;
  padding:.3rem;
  
`
export const Temp = styled.div`
   display:flex;
   flex-direction:row;
   
   text-align:center;
   justify-content:space-around;
   width:20rem;
   position:relative;

   
`