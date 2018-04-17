import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
    Column, 
    Field,
    Control,
    Input,
    Checkbox,
    Title
  } from 'bloomer';
import { Select } from 'bloomer/lib/elements/Form/Select';
import { Button } from 'bloomer/lib/elements/Button';

class Profile extends Component {
    state = { 
        fullname: 'linda',
        email: '',
        phoneNumber: '',
        birthday: '', 
        address: '',
        city: '',
        country: '',
        clientType: ''
    }

    // onSubmit = () => {
    //     this.setState()
    // }



    render() {
        const { 
            fullname,
            email,
            phoneNumber,
            birthday, 
            address,
            city,
            country,
            clientType
        } = this.state;

        return(
            <Column>
                <Title>Profile page</Title>
                <form>
                    <Field>  
                        <label className="fullname">Fullname</label>
                        <Control>
                            <Input value={fullname} placeholder="Text input" />
                        </Control>
                        <p>You submitted: </p>             
                    </Field>
                    <Field>  
                        <label className="email">Email</label>
                        <Control>
                            <Input placeholder="Text input" />
                        </Control>     
                        <p>You submitted: </p>          
                    </Field>
                    <Field>  
                        <label className="phoneNumber">Phone Number</label>
                        <Control>
                            <Input placeholder="Text input" />
                        </Control>    
                        <p>You submitted: </p>           
                    </Field>
                    <Field>  
                        <label className="birthday">Birthday</label>
                        <Control>
                            <Input placeholder="Text input" />
                        </Control> 
                        <p>You submitted: </p>              
                    </Field>
                    <Field>  
                        <label className="address">Address</label>
                        <Control>
                            <Input placeholder="Text input" />
                        </Control>  
                        <p>You submitted: </p>             
                    </Field>
                    <Field>  
                        <label className="city">City</label>
                        <Control>
                            <Input placeholder="Text input" />
                        </Control> 
                        <p>You submitted: </p>              
                    </Field>
                    <Field>  
                        <label className="country">Country</label>
                        <Control>
                            <Input placeholder="Text input" />
                        </Control> 
                        <p>You submitted: </p>              
                    </Field>
                    <Field>  
                        <label className="clientType">Client Type</label>
                        <Control>
                            <Input placeholder="Text input" />
                        </Control> 
                        <p>You submitted: </p>              
                    </Field>
                    <Button>Submit</Button>
                </form>
            </Column>
        );
    }
};

export default Profile;