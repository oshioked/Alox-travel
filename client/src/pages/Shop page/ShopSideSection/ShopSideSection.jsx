import React from 'react';
import './ShopSideSection.scss';

const ShopSideSection = () =>{
    return(
        <div className = 'side-section shade2bg'>
            <div className = 'container'>
                <div className = 'categories-block'>
                    <h3>SHOP BY CATEGORY</h3>
                    <ul>
                        <li>New In</li>
                        <li>Backpacks</li>
                        <li>Crossbody bags</li>
                        <li>Luggages</li>
                        <li>Accessories</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default ShopSideSection;