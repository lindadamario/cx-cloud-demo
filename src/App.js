import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Cover from './components/Cover';
// import Menu from './components/Menu';
// import Activity from './components/Activity';
import PersonalInformation from './components/PersonalInformation';
// import Ads from './components/Ads';
// import CustomerService from './components/CustomerService';
import Footer from './components/Footer';
import 'bulma/css/bulma.css';
import { 
  Container,
  Section
} from 'bloomer';


class App extends Component {
  render() {
    return (
      <Container isFluid>
        <Header />
        <Cover />
        <Section className='section-1'>
          <Section1 /> 
        </Section>
        <Section className='section-2'>
          <Section2 /> 
        </Section>
        <Footer /> 
      </Container>
    );
  }
}

export default App;
