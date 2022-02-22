import React from 'react'
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
                <h1>Logo</h1>
                </NavLink>
                <Bars/>
            <NavMenu>
            <NavLink to='/about' activeStyle>
                about
            </NavLink>
            <NavLink to='/services' activeStyle>
                Services
            </NavLink>
            <NavLink to='/contact-us' activeStyle>
                Contact us
            </NavLink>
            <NavLink to='/sign-up' activeStyle>
                Sign up
            </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'> Sign In </NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    )
}

export default Navbar;
