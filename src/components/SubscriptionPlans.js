import React from 'react';
import '../App.css';
import {Row, Col} from 'react-materialize';

const SubscriptionPlans = (props) => {
    return(

        <Row className='SubscriptionPlans'>
            
            <Col s={4} className='subscriptionPlansContainer'>
                <h3 className='h3'>TV</h3>
                <img className='subscriptionPlansImg' src={require('../images/Bill.png')} alt='' />
            </Col>
            <Col s={4} className='subscriptionPlansContainer'>
                <h3 className='h3'>Mobile</h3>
                <img className='subscriptionPlansImg' src={require('../images/Bill.png')} alt='' />
            </Col>
            <Col s={4} className='subscriptionPlansContainer'>
                <h3 className='h3'>Internet</h3>
                <img className='subscriptionPlansImg' src={require('../images/Bill.png')} alt='' />
            </Col>
        </Row>
    );
}

export default SubscriptionPlans;