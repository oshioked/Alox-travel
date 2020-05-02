import React from 'react';
import './Welcome2.scss';
import DescriptionSet from '../../../components/DescriptionSet/DescriptionSet';

const Welcome2 = () =>{
    return(
        <div className = 'welcome2'>
            <div className = 'image-darkener' />
            <div className = 'container'>
                <div className = 'welcome2-content'>
                    <div className = 'description-set'>
                        <DescriptionSet
                            title = 'The Self-adjusting Watch.'
                            detail = 'Where ever you travel to, whatever time zone, using our upgraded GPS system, this watch automatically change time zone.'
                            btnValue = 'PREORDER NOW'
                        />                    
                    </div>
                </div>  
            </div>

        </div> 
        
    )
}

export default Welcome2;