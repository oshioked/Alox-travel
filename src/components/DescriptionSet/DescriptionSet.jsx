import React from 'react';
import './DescriptionSet.scss';
import SecButton from '../SecButton/SecButton';

const DescriptionSet = ({title, btnLinkTo, detail, btnValue}) =>{
    return(
        <React.Fragment>
            <h1 className = 'description-set-title'>{title}</h1>
            <p className = 'description-set-detail'>{detail}</p>
            <SecButton linkTo = {btnLinkTo} value = {btnValue}/>
        </React.Fragment>
    )
}

export default DescriptionSet; 