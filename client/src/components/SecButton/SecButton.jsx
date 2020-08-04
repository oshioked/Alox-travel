import React from 'react';
import './SecButton.scss';
import {Link} from 'react-router-dom';

const SecButton = ({value, linkTo, style, onClick}) =>{
    return(
        <button 
            style = {{ ...style}}
            className = 'secBtn'
            onClick = {onClick}
        >   
        {
            linkTo
            ? <Link to = {linkTo} >{value}</Link>
            : `${value}`
        }
            
        </button>
    )
}

export default SecButton;