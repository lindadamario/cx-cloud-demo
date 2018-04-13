import React from 'react';
import '../App.css';
import { 
    Container, 
    Box, 
    Notification, 
    Nav,
    HeroBody,
    TabList,
    Button,
    Section,
    Title,
    Columns,
    Column,
    Tile
  } from 'bloomer';
  

const CurrentSubscription = (props) => {
    const currentSubscription = '1GB Internet / Month';
    const price = '15,99';

    return (
        <Columns>
            <Column isSize='2/3' isColor='warning' hasTextAlign='centered'>
                <Title isSize="2">Title</Title>
                <p>fdsfdsvfdgfbvcbfd</p>
                <p>fdsfdsvfdgfbvcbfd</p>
                <p>fdsfdsvfdgfbvcbfd</p>
                <p>fdsfdsvfdgfbvcbfd</p>
                <p>fdsfdsvfdgfbvcbfd</p>
                <p>fdsfdsvfdgfbvcbfd</p>
            </Column>
            <Column>
                <Columns>
                    <Column isColor='warning' hasTextAlign='centered'>
                        <Title isSize="4">Title</Title>
                        <p>fdsfdsvfdgfbvcbfd</p>
                    </Column>
                    <Column isColor='warning' hasTextAlign='centered'>
                        <Title isSize="4">Title</Title>
                        <p>fdsfdsvfdgfbvcbfd</p>
                    </Column>
                </Columns>
                <Columns>
                    <Column isColor='warning' hasTextAlign='centered'>
                        <Title isSize="4">Title</Title>
                        <p>fdsfdsvfdgfbvcbfd</p>
                    </Column>
                    <Column isColor='warning' hasTextAlign='centered'>
                        <Title isSize="4">Title</Title>
                        <p>fdsfdsvfdgfbvcbfd</p>
                    </Column>
                </Columns>
            </Column>
        </Columns>
    );
}

export default CurrentSubscription;