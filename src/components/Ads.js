import React from 'react';
import '../App.css';
import {Row, Col} from 'react-materialize';

const Ads = (props) => {
    return (
        <Row className='Ads container'>
            <Col s={12}>
            <video controls>
                <source src="https://www.youtube.com/watch?v=1v6M41Divso" type="video/mp4"/>
                <source src="https://www.youtube.com/watch?v=1v6M41Divso" type="video/ogg"/>
                Your browser does not support the video tag.
            </video>
            </Col>
        </Row>
    );
}

export default Ads;