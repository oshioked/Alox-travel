import React, { useContext } from 'react';

import SecButton from '../../../components/SecButton/SecButton';
import {AIcon} from '../../../components/SvgComponents/Svgs';

import { ThemeContext } from '../../../contextProviders/ThemeProvider/ThemeProvider';

const WelcomeBlock = ({setCurrentForm, setWelcomeBlockDisplay, setFormBlockDisplay, currentForm}) =>{

    const {currentTheme} = useContext(ThemeContext);

    return(
        <div theme = {currentTheme} className = 'welcome-block'>
            <div className = 'block-content'>
                <div className = '.a-icon'>
                    <AIcon/>
                </div>
                
                <h1>Welcome</h1>
                <SecButton
                    value = 'LOG IN'
                    style = {{width: '250px'}}
                    onClick = {()=>{
                        setCurrentForm('login');
                        setWelcomeBlockDisplay('false');
                        setFormBlockDisplay('true')
                    }}
                />
                <SecButton
                    value = 'SIGN UP'
                    style = {{width: '250px'}}
                    onClick = {()=>{
                        setCurrentForm('signin');
                        setWelcomeBlockDisplay('false');
                        setFormBlockDisplay('true')
                    }}
                />
            </div>
        </div>
    )
}

export default WelcomeBlock;