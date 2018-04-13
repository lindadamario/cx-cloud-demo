import React from 'react';
import { 
    Container, 
    Title,
    HeroBody
  } from 'bloomer';


  const Cover = (props) => {
    return(
        <HeroBody className="cover">
        <Container hasTextAlign='centered'>
          <Title className="title" isSize="1">Title</Title>
        </Container>
      </HeroBody>
    );
  }
  export default Cover; 