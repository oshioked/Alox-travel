import React from 'react';
import './SecButton.css';

const SecButton = ({value, style, onClick}) =>{
    return(
        <button 
            style = {{ ...style}}
            className = 'secBtn'
            onClick = {onClick}
        >
            {value}
        </button>
    )
}

export default SecButton;