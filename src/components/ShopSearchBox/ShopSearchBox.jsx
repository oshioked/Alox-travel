import React from 'react';
import './ShopSearchBox.scss';
import {SearchIcon} from '../SvgComponents/Svgs';

const ShopSearchBox = (props) =>{
    const keyPressHandler = (event) =>{
        if(event.keyCode === 13){
            props.onSubmit();
        }
    }

    // const styles = {
    //     container: {
    //         height: '40px'
    //     },
    //     inputStyles: {
    //         position: 'relative',
    //         borderRadius: '5px 0 0 5px',
    //         width: '380px',
    //         height: '100%',
    //         paddingLeft: '10px'
    //     },
    //     button: {
    //         borderRaduis: '0 5px 5px 0',
    //         height: '100%',

    //     }
    // }
    return(
        <div className = 'search-box'>
            <input 
                type = 'text' 
                onChange = {props.onChange} 
                placeholder = 'Search products, categories, color, etc'
                onKeyPress = {keyPressHandler} 
            />
            <button><SearchIcon/></button>
        </div>  
    )
}

export default ShopSearchBox
