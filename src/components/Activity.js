import React from 'react';
import '../App.css';
import {Row, Col, Table, Button } from 'react-materialize';

// add Tabs / Tab components for the header

const Activity = (props) => {
    return(
        <Row className='Activity'>
            <Col>
                <h3 className='h3'>Activity</h3>
                <Table className='Activity'>
                    
                    <thead>
                        <tr>
                        <th data-field="date">Date</th>
                        <th data-field="expense">Expense</th>
                        <th data-field="amount">€</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>29/03</td>
                            <td>Desc</td>
                            <td>20.89</td>
                        </tr>
                        <tr>
                            <td>26/03</td>
                            <td>Desc</td>
                            <td>20.89</td>
                        </tr>
                        <tr>
                            <td>12/03</td>
                            <td>Desc</td>
                            <td>20.89</td>
                        </tr>
                    </tbody>
                    
                </Table>
                <Button waves='light' node='a' href=''>Show More</Button>
            </Col>
        </Row>
    );
}

export default Activity;