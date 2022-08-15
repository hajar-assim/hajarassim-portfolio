import React from 'react';
import { Nav, NavLogo, NavItem, NavMenu, NavSy } from './NavBarElements';

const NavBar = () => {
  return (
    <>
    <Nav>
      <NavMenu>
        <NavLogo>ᓚᘏᗢ HA</NavLogo> 
        <NavItem><a href="https://www.linkedin.com/in/hajarassim/" rel="noreferrer" target="_blank">linkedin </a></NavItem>
        <NavItem><a href="https://github.com/hajar-assim" rel="noreferrer" target="_blank">github </a></NavItem>
        <NavItem><a href="mailto:hajarassim@cmail.carleton.ca" rel="noreferrer" target="_blank">mail</a></NavItem>
        <NavItem>resume</NavItem>
        <NavSy>♥</NavSy>
      </NavMenu>
    </Nav>
    </>
  )
}

export default NavBar;

// ᓚᘏᗢ