import React from 'react';
import {
  Nav,
  Bars,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavElements';
import { FaBars } from 'react-icons/fa';
import '../Navbar/navbar.css';

const Navbar = () => {
  return (
    <>
       <Nav>
        <NavLink to='/'>
        <h2>Shoping Cart
          </h2>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/Resume' >
            
          </NavLink>
          <NavLink to='/About' >
            About Me
          </NavLink>
          <NavLink to='/Projects' >
            Projects
          </NavLink>
          <NavLink to='/Contacts' >
            Contacts
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/SignIn'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
