import React from 'react';
import PersonalInformation from './PersonalInformation';
import CustomerService from './CustomerService';
import '../App.css';
import { 
  Columns
  } from 'bloomer';

  
const Section2 = (props) => {
  return(
    <Columns className="section-2">
      <PersonalInformation />
      <CustomerService />
    </Columns>
  );
}
export default Section2; 