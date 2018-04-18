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
import { Link } from 'react-router-dom'


const Header = (props) => {
  const userName = 'Linda';

  return (
    <NavbarMenu>
        <NavbarStart>
          <NavbarItem>
            <Link to='/'>Home</Link>       
          </NavbarItem>
          <NavbarItem href='/profile'>
            <Link to='/profile'>Profile</Link>
          </NavbarItem> 
          <NavbarItem href='/profile'>
            <Link to='/login'>Login</Link>
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