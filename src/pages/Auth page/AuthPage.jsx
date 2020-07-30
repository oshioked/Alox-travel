import React, { useState, useEffect, useRef, useContext } from 'react';
import './AuthPage.scss';

import gsap from 'gsap';
import WelcomeBlock from './WelcomeBlock/WelcomeBlock';
import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';
import { ThemeContext } from '../../contextProviders/ThemeProvider/ThemeProvider';

const AuthPage = ()=>{
    const containerRef = useRef(null);

    useEffect(()=>{
        const welcomeBlock = containerRef.current.children[0];
        const formBlock = containerRef.current.children[1];

        const tl = gsap.timeline();
    

        tl
            .from(welcomeBlock, 
            {
                // position: 'absolute',
                width: '100%',
                zIndex: 333,
                duration: 1
            })
    })


    const [currentForm, setCurrentForm] = useState(window.localStorage.getItem('SignInLoginInCurrentForm'));
    const [WelcomeBlockDisplay, setWelcomeBlockDisplay] = useState('true');
    const [formBlockDisplay, setFormBlockDisplay] = useState('false');
    const [shouldformAnimate, setFormAnimate] = useState('false');

    const setCurrentFormWithAnime = (value) =>{
        setTimeout(()=>{
           setCurrentForm(value) 
        }, 500)
        if(currentForm!==value){
            setFormAnimate('true');
            setTimeout(()=>{
                setFormAnimate('false')
            }, 500)
        }
    } 

    useEffect(()=>{
        window.localStorage.setItem('SignInLoginInCurrentForm',currentForm);
    }, [currentForm])

    const {currentTheme} =useContext(ThemeContext);


    return(
        <div className = 'signup-and-login-page'>
            <div className = 'image-darkener'/>
            <div ref = {containerRef}  className = 'container'>
                <div className = 'welcome-block-container shade1bg' display = {WelcomeBlockDisplay}>
                    <WelcomeBlock 
                        setCurrentForm = {setCurrentFormWithAnime}
                        currentForm = {currentForm}
                        setWelcomeBlockDisplay = {setWelcomeBlockDisplay}   
                        setFormBlockDisplay = {setFormBlockDisplay}
                    />
                </div>

                <div className = 'form-block' display = {formBlockDisplay}>
                    <div className = 'form-container'>
                        <div animate = {shouldformAnimate} theme = {currentTheme} className = 'form shade2bg'>
                            {
                                currentForm === 'login'
                                ? <LoginForm setCurrentForm = {setCurrentFormWithAnime}/>
                                : <SignupForm setCurrentForm = {setCurrentFormWithAnime}/>                      
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AuthPage;