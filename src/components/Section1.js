import React from 'react';
import CurrentSubscription from './CurrentSubscription';
import SubscriptionPlans from './SubscriptionPlans';
import '../App.css';
import { 
  Columns
  } from 'bloomer';

  
const Section1 = (props) => {
  return(
    <Columns className="Subscriptions">
      <CurrentSubscription />
      <SubscriptionPlans />
    </Columns>
  );
}
export default Section1; 