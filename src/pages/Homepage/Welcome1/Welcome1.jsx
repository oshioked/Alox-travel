import React, { useContext } from 'react';
import './Welcome1.scss';
import DescriptionSet from '../../../components/DescriptionSet/DescriptionSet';
import { ThemeContext } from '../../../contextProviders/ThemeProvider/ThemeProvider';

const Welcome1 = () =>{

    const {currentTheme} = useContext(ThemeContext);

    return(
        <div className = 'welcome1'>
            <div className ='container'>
                <div className = 'content-holder'>
                    <div theme = {currentTheme} className='welcome1-content shade2bg'>
                        <div className = 'contain'>
                            <div className = 'description-set'>
                                <DescriptionSet
                                    title = 'The New Simple Fire Backpack'
                                    detail = 'An extraordinary backpack is on its way. There’s no need to carry a full luggage when you’re travelling for only a few days.'
                                    btnValue = 'SHOP NOW'
                                />
                            </div>
                            <img alt = 'product-bag' src = {require('./welcome1Product.png')}/> 
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Welcome1;