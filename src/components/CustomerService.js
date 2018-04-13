import React from 'react';
import '../App.css';
import { Row, Col } from 'react-materialize';

const CustomerService = (props) => {
    return(
        <Row className='CustomerService'>
            <Col s={12}>
                <h3 className='h3'>Need Help?</h3>
                <ul className='customerService-list'>
                    <li>
                        <p>Contact Us</p>
                        <img className='logo' src={require('../images/Bill.png')} alt='' />
                    </li>
                    <li>
                        <p>Chat with Us</p>
                        <img className='logo' src={require('../images/Bill.png')} alt='' />
                    </li>
                    <li>
                        <p>FAQ</p>
                        <img className='logo' src={require('../images/Bill.png')} alt='' />
                    </li>
                </ul>
            </Col>
        </Row>
    );
}

export default CustomerService;