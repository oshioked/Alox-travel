import React from 'react';
import './SignupForm.scss';
import SecButton from '../../../components/SecButton/SecButton';
import { signInWithGoogle, auth, saveUserToFirestore } from '../../../firebase/firebase';
import validate from 'validate.js';
import AuthFormInput from '../../../components/AuthFormInput/AuthFormInput';

const constraint = {
    name: {
        presence: {
            message: 'is required',
            allowEmpty: false
        },
        length: {
            minimum: 8,
            message: 'must be at least 8 characters'
        }
    },
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
    },
    confirmPassword: {
        equality: 'password'
    }
}

const initialState = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    nameError: null,
    emailError: null,
    passwordError: null,
    passwordConfirmError: null,
    signupError: null,
    firstTrial: true,
    isLoading: false
}

class SignupForm extends React.Component{

    constructor(){
        super();
        this.state = initialState
    }

    onInputChange=(event)=>{
        if(!this.state.firstTrial){this.validateInputs();};
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    validateInputs = () =>{
        const error = validate({
            name: this.state.name, 
            email: this.state.email, 
            password: this.state.password,
            confirmPassword: this.state.passwordConfirm
        }, constraint);

        if(error){
            if(error.name){
                this.setState({nameError: error.name[0]})
            }else{
                this.setState({nameError: null})
            }
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
            if(error.confirmPassword){
                this.setState({passwordConfirmError: error.confirmPassword})
            }else{
                this.setState({passwordConfirmError: null})
            }
            return false          
        }else{
            this.setState({nameError: null, emailError: null, passwordError: null, passwordConfirmError: null})
            return true
        }
    }

    onSignUpHandler = async () =>{
        // VALIDATE INPUT
        const isValid = this.validateInputs();
        this.setState({firstTrial: false})
        if(isValid){
            try {
                
                const user = await auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
                await saveUserToFirestore(user, {displayName: this.state.name});

            } catch (error) {
                this.setState({signupError: error.message}, () =>{
                    setTimeout(()=>{
                        this.setState({signupError: null})
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
            <div className = 'signup-form'>
                <div className = 'signup-form-content'>
                    <h2 className = 'title'>Create Account</h2>
                    <p className = "form-error">{this.state.signupError}</p>
                    <div className = 'inputs'>
                        <AuthFormInput
                            onChange = {this.onInputChange}
                            name = 'name'
                            type = 'text'
                            placeholder = "Name"
                            errorMsg = {this.state.nameError}
                        />
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
                        <AuthFormInput
                            onChange = {this.onInputChange}
                            name = 'passwordConfirm'
                            type = 'password'
                            placeholder = "Confirm Password"
                            errorMsg = {this.state.passwordConfirmError}
                        />
                        <label style = {{fontSize: '14px'}}>
                            <input name = 'checkbox' type = 'checkbox'/>
                            Remember me
                        </label>
                    </div>   
                    <SecButton
                        value = 'SIGN UP'
                        color = 'white'
                        style = {{width: '100%' }}
                        onClick = {this.onSignUpHandler}
                    />
                    <SecButton
                        value = "CONTINUE WITH GOOGLE"
                        color = 'white'
                        onClick = {signInWithGoogle}
                        style = {{backgroundColor: '#4285f4', width: '100%', color: 'white', border: 'none', marginTop: '10px'}}
                    />

                    <div className = "bottom-para-container">
                        <p>By signing up, you agree to all our Terms and Conditions & Privacy Policy</p>
                        <p className = 'switch-form-bottom-text' style = {{marginBottom: '30px', marginTop: '20px'}}>Have an account? <span onClick = {()=>{setCurrentForm('login')}}>Log in</span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupForm;