import React from 'react';
import './ShopSearchBox.scss';
import {SearchIcon} from '../SvgComponents/Svgs';

const ShopSearchBox = (props) =>{
    const keyPressHandler = (event) =>{
        if(event.keyCode === 13){
            props.onSubmit();
        }
    }

    return(
        <div className = 'shop-search-box'>
            <input
                className = 'search-box-input'
                type = 'text' 
                onChange = {props.onChange} 
                placeholder = 'Search products, categories, color, etc'
                onKeyPress = {keyPressHandler} 
            />
            <button className = 'search-icon-container' >
                <SearchIcon/>
            </button>
            
        </div>  
    )
}

export default ShopSearchBox
