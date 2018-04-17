import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Cover from './Cover';
import Footer from './Footer';
import 'bulma/css/bulma.css';
import { 
  Container,
  Section
} from 'bloomer';


class Home extends Component {
  render() {
    return (
      <Container className="root-container" isFluid>
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

export default Home;
