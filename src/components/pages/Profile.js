import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
    Column, 
    Field,
    Control,
    Input,
    Checkbox,
    Title,
    Select,
    Label,
    Button
  } from 'bloomer';

class Profile extends Component {
    
    constructor() {
        super();


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
      }
    
        handleChange(event) {
            const name = event.target.name;
            const value = event.target.value;
            this.setState({
            },() => {
            }) 
        }

        handleSubmit(event) {
            event.preventDefault();
            const data = new FormData(event.target);
            
            fetch('https://httpbin.org/post', {
                method: 'POST',
                body: (data),
            })
                .then(res => res.json())
                .then(data => {
                console.log('This data was successfully received by the server:');
                console.log(data.form);
                });
            }
        

    render() {
        
        return(
            <Column>
                <Title>Profile page</Title>
                <form onSubmit={this.handleSubmit}>
                    <Field>  
                        <label className="fullname">Fullname</label>
                        <Control>
                            <Input
                            ref='fistname' 
                            onChange={this.handleChange}
                            name="fullname" 
                            type="text" />
                        </Control>
                              
                    </Field>
                    <Field>  
                        <label className="email">Email</label>
                        <Control>
                            <Input name="email" type="text" />
                        </Control>     
                        
                    </Field>
                    <Field>  
                        <label className="phoneNumber">Phone Number</label>
                        <Control>
                            <Input name="phoneNumber" type="text" />
                        </Control>    
                        
                    </Field>
                    <Field>  
                        <label className="birthday">Birthday</label>
                        <Control>
                            <Input name="birthday" type="text" />
                        </Control> 
                                 
                    </Field>
                    <Field>  
                        <label className="address">Address</label>
                        <Control>
                            <Input name="address" type="text" />
                        </Control>  
                               
                    </Field>
                    <Field>  
                        <label className="city">City</label>
                        <Control>
                            <Input name="city" type="text" />
                        </Control> 
                             
                    </Field>
                    <Field>  
                        <label className="country">Country</label>
                        <Control>
                            <Input name="country" type="text" />
                        </Control> 
                    </Field>
                    <Field>
                        <Label>Select Gender:</Label>
                        <Control>
                            <Select 
                                name='gender'
                                onChange={this.handleChange}>

                                <option name="gender" type="radio" value='male'>Male</option>
                                <option name="gender" type="radio" value='female'>Female</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>  
                        <label className="clientType">Client Type</label>
                        <Control>
                            <Input name="clientType" type="text" />
                        </Control> 
                                     
                    </Field>
                    <Button type='submit'>Submit</Button>
                </form>
            </Column>
        );
    }
};

export default Profile;