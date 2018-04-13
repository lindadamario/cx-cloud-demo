import React from 'react';
import '../App.css';
import { 
    NavCenter, 
    NavItem, 
    Icon, 
    NavRight, 
    NavLeft,
    Nav,
    Section,
    Subtitle,
    NavbarItem,
    Button,
    Navbar,
    NavbarEnd,
    NavbarMenu,
    NavbarBurger,
    NavbarLink,
    NavbarDropdown,
    NavbarDivider,
    NavbarStart,
  } from 'bloomer';
  
  import FontAwesomeIcon from '@fortawesome/react-fontawesome';
  import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';


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
              <Button href="https://twitter.com/intent/tweet?text=bloomer:
              a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark">
                <span>Welcome back, Linda</span>
              </Button>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
    );
}

export default Header;