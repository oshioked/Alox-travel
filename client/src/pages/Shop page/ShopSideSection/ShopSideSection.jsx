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
    console.log(activeCategory)
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
            </div>
        </div>
    )
}

export default ShopSideSection;