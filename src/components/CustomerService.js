import React from 'react';
import '../App.css';
import { 
    Title,
    Columns,
    Image,
    Column } from 'bloomer';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/fontawesome-free-solid';

const CustomerService = (props) => {
    
    return(        
        <Column className="CustomerService">
            <Columns>
                <Column hasTextAlign='centered'>
                    <Image isSize="640x120" src={require('../images/image-1.jpg')} />
                </Column>
            </Columns>
            <Columns>
                <Column hasTextAlign='centered'>
                    <Columns display="inline-flex">
                        <Column isSize='1/3' isColor='warning' hasTextAlign='centered'>
                            <Title isSize="4">Chat with Us</Title>
                            <FontAwesomeIcon color="gold" size="4x" icon={faBeer} />
                        </Column>
                        <Column isSize='1/3' isColor='warning' hasTextAlign='centered'>
                            <Title isSize="4">Call Us</Title>
                            <FontAwesomeIcon color="gold" size="4x" icon={faBeer} />
                        </Column>
                        <Column isSize='1/3' isColor='warning' hasTextAlign='centered'>
                            <Title isSize="4">FAQ</Title>
                            <FontAwesomeIcon color="gold" size="4x" icon={faBeer} />
                        </Column>
                    </Columns>
                </Column>
            </Columns>
        </Column>
    );
}

export default CustomerService;