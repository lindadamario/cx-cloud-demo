import React from 'react';
import '../App.css';
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
    Section,
    Subtitle,
    Columns,
    Image,
    Column,
    Button } from 'bloomer';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { spinner, instagram, faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'


const userApi = {
    data: {
        'fullname': 'John Doe',
        'birth': '12/03/1992',
        'cardNo': '**** **** **** *123',
        'subscription': '1GB Internet/Month',
    }
};

const PersonalInformation = (props) => {
    const userInfo = userApi.data;
    
    return(
        <Columns> 
            <Column isSize='1/3' isColor='warning' hasTextAlign='centered'>
                <Title isSize="4">Personal Information</Title>
                <ul>
                    <li>Fullname: {userInfo.fullname}</li>
                    <li>Date of Birth: {userInfo.birth}</li>
                    <li>Card No: {userInfo.cardNo}</li>
                    <li>Subscription: {userInfo.subscription}</li>
                </ul>
            </Column>
            <Column>
                <Columns>
                    <Column isColor='warning' hasTextAlign='centered'>
                        <Image isSize="640x120" src="https://via.placeholder.com/640x120" />
                    </Column>
                </Columns>
                <Columns>
                    <Column isColor='warning' hasTextAlign='centered'>
                        <Columns display="inline-flex">
                            <Column isSize='1/3' isColor='warning' hasTextAlign='centered'>
                                <FontAwesomeIcon icon={faCoffee} />
                                <Title isSize="4">Title</Title>
                            </Column>
                            <Column isSize='1/3' isColor='warning' hasTextAlign='centered'>
                                <FontAwesomeIcon icon={faCoffee} />
                                <Title isSize="4">Title</Title>
                            </Column>
                            <Column isSize='1/3' isColor='warning' hasTextAlign='centered'>
                                
                                <Title isSize="4">Title</Title>
                                
                                <FontAwesomeIcon icon="instagram"/>
                            </Column>
                        </Columns>
                    </Column>
                </Columns>
            </Column>
        </Columns>
    );
}

export default PersonalInformation;