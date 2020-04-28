import React from 'react';
import './DescriptionSet.scss';
import SecButton from '../SecButton/SecButton';

const DescriptionSet = ({title, detail, btnValue}) =>{
    return(
        <React.Fragment>
            <h1 className = 'description-set-title'>{title}</h1>
            <p className = 'description-set-detail'>{detail}</p>
            <SecButton value = {btnValue}/>
        </React.Fragment>
    )
}

export default DescriptionSet; 