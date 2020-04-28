import React from 'react';
import './LoginForm.scss';

import SecButton from '../../../components/SecButton/SecButton';

const LoginForm = ({setCurrentForm})=>{
    return(
        <div className = 'login-form'>
            <div className = 'login-form-content'>
                <h2 className = 'title'>Log In</h2>
                <div className = 'inputs'>
                    <input className = 'shade1bg' type = 'email' placeholder = 'Email Address'/>
                    <input className = 'shade1bg' type = 'password' placeholder = 'Password'/>
                    <label>
                        <input type = 'checkbox' name = 'Remember Me'/>
                        Remember me
                    </label>
                    
                    
                    <SecButton
                        value = 'LOG IN'
                        color = 'white'
                        style = {{width: '100%' }}
                    />
                    <p>Don't have an account? <span onClick = {()=>{setCurrentForm('signup')}}>Sign up</span></p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;