import React, { useState, useEffect, useRef, useContext } from 'react';
import './AuthPage.scss';

import gsap from 'gsap';
import WelcomeBlock from './WelcomeBlock/WelcomeBlock';
import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';
import { ThemeContext } from '../../contextProviders/ThemeProvider/ThemeProvider';

const AuthPage = ()=>{
    const containerRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(()=>{
        const welcomeBlock = containerRef.current.children[0];
        const formBlock = containerRef.current.children[1];
        
        const tl = gsap.timeline();
        if(window.innerWidth > 768){
            tl
                .from(bgRef.current, {
                    duration: 1,
                    scale: 1.1,
                })
                .set(formBlock,{
                    position: 'absolute',
                    autoAlpha: 0,
                    right: 0,
                }, '0')
                .set(welcomeBlock, {
                    xPercent: 50,
                    width: '50%'
                })
                .fromTo(welcomeBlock, {
                    autoAlpha: 0,
                    duration: .5,
                },
                {
                    autoAlpha: 1,
                })
                .to(welcomeBlock,{
                    xPercent: 0,
                    duration: .5,
                    delay: .5,
                    width: '100%',
                })
                .from(welcomeBlock.children[0].children[0], {
                    autoAlpha: 0,
                    y: 50,
                    duration: .5
                }, '+=.3')
                .to(welcomeBlock, {
                    duration: .5,
                    width: '50%'
                })
                .set(formBlock, {
                    autoAlpha: 1
                }, '-=1')
        }else{
            tl
            .from(bgRef.current, {
                duration: 1,
                scale: 1.1,
            })
            .from(welcomeBlock.children[0].children[0], {
                autoAlpha: 0,
                y: 70,
                duration: .5,
            })
        }
    }, [])


    const [currentForm, setCurrentForm] = useState('login');
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

    const {currentTheme} =useContext(ThemeContext);


    return(
        <div className = 'signup-and-login-page'>
            <div ref = {bgRef} id  = 'img-bg-container'/>
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