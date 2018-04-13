import React from 'react';
import '../App.css';
import { 
  NavbarItem,
  Button,
  NavbarEnd,
  NavbarMenu,
  NavbarLink,
  NavbarStart
  } from 'bloomer';


const Header = (props) => {
  const userName = 'Linda';

  return (
      <NavbarMenu>
        <NavbarStart>
          <NavbarItem href='#/'>Home</NavbarItem>
          <NavbarItem href='#/'>About</NavbarItem>
          <NavbarItem href='#/'>Subs</NavbarItem>
          <NavbarItem hasDropdown isHoverable>
            <NavbarLink href='#/documentation'>Documentation</NavbarLink>  
          </NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem>
            <Button href="">
              <span>Welcome back, {userName}</span>
            </Button>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
  );
}

export default Header;