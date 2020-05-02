import React from 'react';
import './HomeHeader.scss';
import SecButton from '../../../components/SecButton/SecButton';
import {Link} from 'react-router-dom';


const HomeHeader = () =>{
    return(
        <div className = 'home-header' style = {{background: require('./Images/headerBg.png').ro}}>
            <div className = 'image-darkener'/>
            <div className = 'container'>
                <div className = 'home-header-content'>
                    <div className = 'header-description'>
                        <h1>Carefully built travel bags and accessories</h1>
                        <SecButton style = {{border: '2px solid white'}} linkTo = '/collection' value = 'SHOP NOW'/>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default HomeHeader;