import React from 'react';
import { Nav, NavLogo, NavItem, NavMenu, NavSy } from './NavBarElements';

const NavBar = () => {

  const onMouseOver = event => {
    const el = event.target;
    el.style.color = "#9f8bcf";
  }

  const onMouseOut = event => {
    const el = event.target;
    el.style.color = "#9E9E9E";
  }


  return (
    <>
    <Nav>
      <NavMenu>

        <NavLogo onClick={() => window.location.reload()}>ᓚᘏᗢ HA</NavLogo> 

        <NavItem>
          <a 
          href="https://www.linkedin.com/in/hajarassim/" 
          onMouseEnter={event => onMouseOver(event)} 
          onMouseOut={event => onMouseOut(event)}
          rel="noreferrer" target="_blank">
            linkedin
          </a>
          </NavItem>

        <NavItem>
          <a 
          onMouseEnter={event => onMouseOver(event)} 
          onMouseOut={event => onMouseOut(event)}
          href="https://github.com/hajar-assim" 
          rel="noreferrer" target="_blank">
            github
          </a></NavItem>

        <NavItem>
          <a 
          onMouseEnter={event => onMouseOver(event)} 
          onMouseOut={event => onMouseOut(event)}
          href="mailto:hajarassim@cmail.carleton.ca" 
          rel="noreferrer" target="_blank">
            mail
          </a></NavItem>

        <NavItem>resume</NavItem>

        <NavSy>♥</NavSy>

      </NavMenu>
    </Nav>
    </>
  )
}

export default NavBar;

// ᓚᘏᗢ