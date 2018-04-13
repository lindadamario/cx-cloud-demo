import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
//import CurrentSubscription from './components/CurrentSubscription';
// import SubscriptionPlans from './components/SubscriptionPlans';
// import Menu from './components/Menu';
// import Activity from './components/Activity';
import PersonalInformation from './components/PersonalInformation';
// import Ads from './components/Ads';
// import CustomerService from './components/CustomerService';
import Footer from './components/Footer';
import 'bulma/css/bulma.css';
import { 
  Container, 
  Box, 
  Notification, 
  Hero, 
  NavCenter, 
  NavItem, 
  Icon, 
  NavRight, 
  HeroHeader,
  NavLeft,
  Title,
  Tab,
  TabLink,
  Tabs,
  HeroFooter,
  Nav,
  HeroBody,
  TabList  ,
  Section,
  Subtitle,
  NavbarItem,
  Columns,
  Column,
  Button,
  Navbar,
  NavbarEnd,
  NavbarBrand,
  Brand,
  NavbarMenu,
  NavbarBurger,
  NavbarLink,
  NavbarDropdown,
  NavbarDivider,
  NavbarStart,
  Field,
  Control
} from 'bloomer';
import CurrentSubscription from './components/CurrentSubscription';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'



class App extends Component {
  render() {
    return (
      <Container isFluid>
        <Header />
        <HeroBody>
          <Container hasTextAlign='centered'>
            <Title isSize="1">Title</Title>
          </Container>
        </HeroBody>
        <Section className='section-1'>
          <CurrentSubscription /> 
        </Section>
        <Section className='section-2'>
          <PersonalInformation /> 
        </Section>
        
        <Footer /> 
        
      </Container>
    );
  }
}

export default App;
