import React from 'react';
import "./Navbar.styles.css"
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
const Navbar = () => {
    return (
        <> 
        <Nav>
            <NavLink to='/home'>
               <i class="fa-solid fa-mountain icon"></i>
                </NavLink>
                <Bars/>
            <NavMenu>
            <NavLink to='/about' activeStyle>
                About
            </NavLink>
            <NavLink to='/services' activeStyle>
                Services
            </NavLink>
            <NavLink to='/contact-us' activeStyle>
                Contact us
            </NavLink>
            
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/sign-up' activeStyle> Sign In </NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    )
}

export default Navbar;
