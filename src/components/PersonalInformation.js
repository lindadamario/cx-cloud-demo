import React from 'react';
import '../App.css';
import { 
    Title,
    Column } from 'bloomer';

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
        <Column className="PersonalInformation" isSize='1/3' isColor='warning' hasTextAlign='centered'>
            <Title isSize="4">Personal Information</Title>
            <ul>
                <li>Fullname: {userInfo.fullname}</li>
                <li>Date of Birth: {userInfo.birth}</li>
                <li>Card No: {userInfo.cardNo}</li>
                <li>Subscription: {userInfo.subscription}</li>
            </ul>
        </Column>
    );
}

export default PersonalInformation;