import React from 'react';
import './Login.css';
import {Segment, Form, Input, Button} from "semantic-ui-react";

const Login = () => {
    return (
        <div className='loginContainer'>
            <Segment className='loginSegment'>
                <div className='top'>
                    <img src='cloud-logo.png' alt='Cloud-Logo' style={{width: 145}}/>
                    <div className='text'>
                        You currently have no accounts, start by connecting
                    </div>
                </div>
                <div className='bottom'>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field
                                control={Input}
                                label='Name'
                                placeholder='First name'
                            />
                            <Form.Field
                                control={Input}
                                label='E-mail'
                                placeholder='Last name'
                            />
                        </Form.Group>
                        <Form.Field
                            control={Input}
                            label='Password'
                            placeholder='Last name'
                            style={{width: '50%'}}
                        />
                        <Form.Field>
                        </Form.Field>
                    </Form>
                </div>
            </Segment>
            <Button color={'yellow'} className='formButton'>Connect Now</Button>
        </div>
    )
}
export default Login;
