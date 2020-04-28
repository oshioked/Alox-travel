import React from 'react';
import './SignupForm.scss';
import SecButton from '../../../components/SecButton/SecButton';

const SignupForm = ({setCurrentForm})=>{
    return(
        <div className = 'signup-form'>
            <div className = 'signup-form-content'>
                <h2 className = 'title'>Create Account</h2>
                <div className = 'inputs'>
                    <input type = 'text' placeholder = 'Name'/>
                    <input type = 'email' placeholder = 'Email Address'/>
                    <input type = 'password' placeholder = 'Password'/>
                    <input type = 'password' placeholder = 'Confirm Password'/>
                    <label>
                        <input type = 'checkbox' name = 'Remember Me'/>
                        Remember me
                    </label>
                    
                    <SecButton
                        value = 'SIGN UP'
                        color = 'white'
                        style = {{width: '100%' }}
                    />

                    <p>By signing up, you agree to all our Terms and Conditions & Privacy Policy</p>
                    <p>Have an account? <span onClick = {()=>{setCurrentForm('login')}}>Log in</span></p>
                </div>
            </div>
        </div>
    )
}

export default SignupForm;