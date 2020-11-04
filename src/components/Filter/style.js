import { FaBars } from 'react-icons/fa';
import {  Link } from 'react-router-dom';
import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  padding:1rem;
  margin:1rem;
  border-bottom:.1rem #c0c0c0 solid;
  justify-content:space-between;
  max-width:62.4rem;
  
`;
export const FilterResult = styled.div`
    font-size:1.2rem;
    color:#54565A;
`;
export const Sorts = styled.div`
    font-size:1.2rem;
    color:#54565A;
`;
export const Order = styled.div`
font-size:1.2rem;
    color:#54565A;
`
export const Select = styled.select`
    margin-left:1rem;
    flex:1;
    width:7rem;
    height:2rem;
`