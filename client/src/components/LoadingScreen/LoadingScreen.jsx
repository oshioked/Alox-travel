import React, { useRef } from 'react';
import './LoadingScreen.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../contextProviders/ThemeProvider/ThemeProvider';
import { useEffect } from 'react';
import gsap from 'gsap';
import { useSelector } from 'react-redux';

const LoadingScreen = () =>{
    const {currentTheme} = useContext(ThemeContext);
    const logoRef = useRef(null);
    const {display} = useSelector(state => state.loadingReducer)
    const screenRef = useRef(null);
    console.log(display);


    useEffect(()=>{
        console.log('effect 2')
        if(display === 'true'){
            console.log('from bottom to center')
            const tl = gsap.timeline()
            tl
                .fromTo(screenRef.current, {
                    yPercent: 100,
                    duration: 1.5,
                    ease: 'power3.out'
                },
                {
                    yPercent: 0,
                })
                .fromTo(logoRef.current, {
                    yPercent: 140,
                    duration: .5
                }, {
                    yPercent: 0,
                })
        }
        if(display === 'false'){
            const tl = gsap.timeline()
            console.log('to top')
            tl
                .to(logoRef.current, {
                    yPercent: -140,
                    duration: .5
                })
                .to(screenRef.current, {
                    yPercent: -100,
                    duration: 1,
                    ease: 'power3.ease'
                });
        }
    }, [display])

    return(
        <div ref = {screenRef} theme = {currentTheme} className = "loading-screen">
            <div  className = 'alox-icon'>
                <svg ref = {logoRef} width="96" height="35" viewBox="0 0 96 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0H22L32.5 30V0H42.5V34H23L21 28H12.5L10.5 34H0L12 0ZM20.5 2H13.5L2.5 32H9L11 26H22.5L24.5 32H31L20.5 2ZM16.5 9L13 20.5H20.5L16.5 9ZM16.5 15L15.5 18.5H17.5L16.5 15ZM40.5 32H34.5V2H40.5V32Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M56 16C58.5 16 59.5 17.5 59.5 21C59.5 23.5 58.8 26 56 26C55 26 53 25 53 21C53 17 54.5 16 56 16ZM56 14C58 14 61 14.5 61.5 21C61.6667 23.3333 60.8 28 56 28C51.2 28 51 22.5 51 21C50.8333 18.8333 51.6 14.4 56 14Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M66.5 7.5H78L81 12.5L83.5 7.5H95.5L86.5 20.5L95.5 34H83.5L80.5 29.5L78 34H66L75 20.5L66.5 7.5ZM84.5 10L81 16L77 10H70.5L77.5 20.5L70 32H77L80.5 25.5L84.5 32H91.5L84.5 20.5L91.5 10H84.5Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M56 7C62.5 7 69.5 10 69.5 21C69.5 28.5 65.6 35 56 35C51.6667 35 43 32.2 43 21C43 7 54.5 6.94488 56 7ZM45 21C45 11.8 51 9 56 9C67 9 67.5 19 67.5 21C67.5 23 67 33 56 33C47.2 33 45 25 45 21Z" fill="white"/>
                </svg>
            </div>
        </div>
    )
}

export default LoadingScreen;