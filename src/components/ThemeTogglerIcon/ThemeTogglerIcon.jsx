import React, {useContext} from 'react';
import './ThemeTogglerIcon.scss';

import {ThemeContext} from '../../contextProviders/ThemeProvider/ThemeProvider';

const ThemeTogglerIcon = () =>{

    const {currentTheme, toggleTheme} = useContext(ThemeContext);

    return(
        <div onClick = {toggleTheme} theme = {currentTheme} className = 'theme-toggler-icon'>
            <svg width="33" height="17" viewBox="0 0 33 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <rect width="32.7857" height="17" rx="8.5" fill="#C4C4C4" fill-opacity="0.5"/>
                <circle className = 'toggler-circle' cx="24.2857" cy="8.50004" r="7.28571" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="32.7857" height="17" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>   
    )
   
}

export default ThemeTogglerIcon;