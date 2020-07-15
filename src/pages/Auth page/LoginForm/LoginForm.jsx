import React from 'react';
import './LoginForm.scss';

import SecButton from '../../../components/SecButton/SecButton';
import AuthFormInput from '../../../components/AuthFormInput/AuthFormInput';
import validate from 'validate.js';
import { auth } from '../../../firebase/firebase';


const constraint = {
    email: {
        email: true,
        presence: {
            message: 'is required',
            allowEmpty: false
        },
        
    },
    password: {
        presence: {
            message: 'is required',
            allowEmpty: false
        },
        length: {
            minimum: 8,
            message: 'must be at least 8 characters'
        }
    }
}

class LoginForm extends React.Component{

    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            emailError: null,
            passwordError: null,
            loginError: null,
            firstTrial: true
        }
    }

    onInputChange=(event)=>{
        if(!this.state.firstTrial){this.validateInputs();};
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    validateInputs = () =>{
        const error = validate({email: this.state.email, password: this.state.password}, constraint);
        if(error){
            if(error.email){
                this.setState({emailError: error.email[0]})
            }else{
                this.setState({emailError: null})
            }
            if(error.password){
                this.setState({passwordError: error.password[0]})
            }else{
                this.setState({passwordError: null})
            }  
            return false          
        }else{
            this.setState({emailError: null, passwordError: null})
            return true
        }
    }

    onLoginHandler = async () =>{
        // VALIDATE INPUT
        const isValid = this.validateInputs();
        this.setState({firstTrial: false})
        if(isValid){
            try {
                await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
            } catch (error) {
                this.setState({loginError: error.message}, () =>{
                    setTimeout(()=>{
                        this.setState({loginError: null})
                    }, 3000)
                })
            }
        }else{
            return
        }
    }

    render(){
        const {setCurrentForm} = this.props;
        return(
            <div className = 'login-form'>
                <div className = 'login-form-content'>
                    <h2 className = 'title'>Log In</h2>
                    <p className = "form-error">{this.state.loginError}</p>
                    <div className = 'inputs'>
                        <AuthFormInput
                            onChange = {this.onInputChange}
                            name = 'email'
                            type = 'email'
                            placeholder = "Email Address"
                            errorMsg = {this.state.emailError}
                        />
                        <AuthFormInput
                            onChange = {this.onInputChange}
                            name = 'password'
                            type = 'password'
                            placeholder = "Password"
                            errorMsg = {this.state.passwordError}
                        />
                        <label style = {{fontSize: '14px'}}>
                            <input name= 'checkbox' type = 'checkbox'/>
                            Remember me
                        </label>
                    </div>
                    <SecButton
                        value = 'LOG IN'
                        color = 'white'
                        style = {{width: '100%', marginTop: '20px' }}
                        onClick = {this.onLoginHandler}
                    />
                    <p className = 'switch-form-bottom-text' style = {{fontSize: '13px', marginBottom: '30px', marginTop: '20px'}}>Don't have an account? <span onClick = {()=>{setCurrentForm('signup')}}>Sign up</span></p>
                </div>
            </div>
        )
    }
}

export default LoginForm;