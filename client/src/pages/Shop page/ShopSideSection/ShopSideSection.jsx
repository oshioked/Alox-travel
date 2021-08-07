import React from 'react';
import './ShopSideSection.scss';
import { Link } from 'react-router-dom';

const categories = [
    {
        title: "New In",
    }, 
    {
        title: "Backpacks",
    }, 
    {
        title: "Crossbody bags",
    },
    {
        title: "Luggages",
    }, 
    {
        title: "Accessories",
    }
]

const ShopSideSection = ({activeCategory}) =>{
    return(
        <div className = 'side-section shade2bg'>
            <div className = 'container'>
                <div className = 'option-block'>
                    <h3 className = "option-title-text">SHOP BY CATEGORY</h3>
                    <ul>
                        {
                            categories.map(category => (
                                <li key = {category.title} active = {activeCategory === category.title? 'true' : 'false'}><Link to = {`/shop/collections/${category.title}`}>{category.title}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                <div className = 'option-block'>
                    <h3 className = "option-title-text">FILTER BY</h3>
                    <div className = "filter-options">
                        <div className = "color-option">
                            <p>Color: </p>
                            <div className = 'colors-container'>
                                {
                                    ['#97B7D0', '#884A2B', 'black', '#C98C19', '#323A52', '#531717'].map((color, i) =>(
                                        <div key = {color} style = {{backgroundColor: color}} className = "color"/>
                                    ))                                    
                                }

                            </div>
                        </div>
                        <div className = "material-option">
                            <p>Material: </p>
                            <div className = 'materials-container'>
                                {
                                    ['Leather', 'Cotton'].map((material, i) =>(
                                        <div key = {material} className = "material">
                                            <div className = "checkbox"/>
                                            <p>{material}</p>
                                        </div>
                                    ))                                    
                                }

                            </div>
                        </div>
                        <div className = "waterProof">
                            <div className = "checkbox"/>
                            <p>Water proof</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopSideSection;