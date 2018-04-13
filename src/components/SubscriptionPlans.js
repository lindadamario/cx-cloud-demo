import React from 'react';
import '../App.css';
import { 
    Columns,
    Column,
    Title
  } from 'bloomer';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/fontawesome-free-solid';


const SubscriptionPlans = (props) => {
    return(
        <Column className="SubscriptionPlans">
            <Columns>
                <Column isColor='warning' hasTextAlign='centered'>
                    <Title isSize="4">Title</Title>
                    <FontAwesomeIcon color="gold" size="4x" icon={faBeer} />
                </Column>
                <Column isColor='warning' hasTextAlign='centered'>
                    <Title isSize="4">Title</Title>
                    <FontAwesomeIcon color="gold" size="4x" icon={faBeer} />
                </Column>
            </Columns>
            <Columns>
                <Column isColor='warning' hasTextAlign='centered'>
                    <Title isSize="4">Title</Title>
                    <FontAwesomeIcon color="gold" size="4x" icon={faBeer} />
                </Column>
                <Column isColor='warning' hasTextAlign='centered'>
                    <Title isSize="4">Title</Title>
                    <FontAwesomeIcon color="gold" size="4x" icon={faBeer} />
                </Column>
            </Columns>
        </Column>
        
    );
}

export default SubscriptionPlans;