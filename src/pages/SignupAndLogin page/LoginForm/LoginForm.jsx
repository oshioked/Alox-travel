import React, { useState } from 'react';
import './LoginForm.scss';

import SecButton from '../../../components/SecButton/SecButton';

import {connect} from 'react-redux';
import { startSignIn } from '../../../Redux/User/user.actions';
import { sign } from 'crypto';

class LoginForm extends React.Component{

    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    onInputChange=(event)=>{
        const {name, value} = event.target;
        console.log(name)
        this.setState({[name]: value})
    }

    render(){
        const {setCurrentForm, signInStart} =this.props;
        return(
            <div className = 'login-form'>
                <div className = 'login-form-content'>
                    <h2 className = 'title'>Log In</h2>
                    <div className = 'inputs'>
                        <input onChange = {this.onInputChange} name = 'email' className = 'shade1bg' type = 'email' placeholder = 'Email Address'/>
                        <input onChange = {this.onInputChange} name= 'password' className = 'shade1bg' type = 'password' placeholder = 'Password'/>
                        <label>
                            <input name= 'checkbox' type = 'checkbox' name = 'Remember Me'/>
                            Remember me
                        </label>
                        
                        
                        <SecButton
                            value = 'LOG IN'
                            color = 'white'
                            style = {{width: '100%' }}
                            onClick = {()=>signInStart(this.state)}
                        />
                        <p>Don't have an account? <span onClick = {()=>{setCurrentForm('signup')}}>Sign up</span></p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    signInStart: (data) => dispatch(startSignIn(data))
})

export default connect(null, mapDispatchToProps)(LoginForm);