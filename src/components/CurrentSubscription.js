import React from 'react';
import '../App.css';
import { 
    Title,
    Columns,
    Column
  } from 'bloomer';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/fontawesome-free-solid';


const CurrentSubscription = (props) => {
    const currentSubscription = '1GB Internet / Month';
    const price = '15,99';

    return (
        
            <Column className="CurrentSubscription" isSize='2/3' hasTextAlign='centered'>
                <Columns >
                    <Column>
                        <Title isSize="1">Title</Title>
                        <Columns className="subCurrentSubscription">
                            <Column hasTextAlign='centered'>

                                <Title isSize="3">{currentSubscription}</Title>
                            </Column>
                            <Column hasTextAlign='centered'>
                            <FontAwesomeIcon color="gold" size="8x" icon={faBeer} />
                            </Column>
                            <Column hasTextAlign='centered'>
                                <Title isSize="3">{price}</Title>
                            </Column>
                        </Columns>
                        <p isSize="4">See other Subscriptions</p>
                    
                    </Column>
                </Columns>
            </Column>
        
    );
}

export default CurrentSubscription;