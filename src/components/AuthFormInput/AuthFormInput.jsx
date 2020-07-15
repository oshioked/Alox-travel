import React from 'react';
import './AuthFormInput.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../contextProviders/ThemeProvider/ThemeProvider';

const AuthFormInput = props =>{
    const currentTheme = useContext(ThemeContext);

    return(
        <div theme = {currentTheme} className = 'auth-input-container'>
            <input 
                style = {props.errorMsg ? {border: '1.1px solid red'} : null}
                name = {props.name}
                onBlur = {props.onChange}
                onChange = {props.onChange} 
                className = 'shade1bg' 
                type = {props.type}
                placeholder = {props.placeholder}
            />
            <p className = 'error-message'>
                {props.errorMsg}
            </p>
        </div>
    )
}

export default AuthFormInput;