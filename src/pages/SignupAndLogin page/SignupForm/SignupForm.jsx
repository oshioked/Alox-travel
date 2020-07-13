import React from 'react';
import './SignupForm.scss';
import SecButton from '../../../components/SecButton/SecButton';
import { startSignUp } from '../../../Redux/User/user.actions';
import {connect} from 'react-redux'

class SignupForm extends React.Component{

    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onInputChange=(event)=>{
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render(){

        const {setCurrentForm, signUpStart} = this.props;
        return(
            <div className = 'signup-form'>
                <div className = 'signup-form-content'>
                    <h2 className = 'title'>Create Account</h2>
                    <div className = 'inputs'>
                        <input onChange = {this.onInputChange} name = 'name' type = 'text' placeholder = 'Name'/>
                        <input onChange = {this.onInputChange} name = 'email' type = 'email' placeholder = 'Email Address'/>
                        <input onChange = {this.onInputChange} name = 'password' type = 'password' placeholder = 'Password'/>
                        <input onChange = {this.onInputChange} name = 'passwordConfirm' type = 'password' placeholder = 'Confirm Password'/>
                        <label>
                            <input name = 'checkbox' type = 'checkbox' name = 'Remember Me'/>
                            Remember me
                        </label>
                        
                        <SecButton
                            value = 'SIGN UP'
                            color = 'white'
                            style = {{width: '100%' }}
                            onClick = {()=>signUpStart(this.state)}
                        />

                        <p>By signing up, you agree to all our Terms and Conditions & Privacy Policy</p>
                        <p>Have an account? <span onClick = {()=>{setCurrentForm('login')}}>Log in</span></p>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) =>({
    signUpStart: (data) => dispatch(startSignUp(data))
})



export default connect(null, mapDispatchToProps)(SignupForm);