import React from 'react';
import './BrandSection.scss';
import { Unsplash, Github, IconMonstr, ReactIcon } from './Brands.icons';

const BrandSection = () =>{
    return(
        <div className = 'brands-section'>
            <div className = 'container'>
                <div className = 'content'>
                    <div className = 'brand'>
                        <Unsplash/>
                    </div>
                    <div className = 'brand'>
                        <Github/>
                    </div>
                    <div className = 'brand'>
                        <ReactIcon/>
                    </div>
                    <div className = 'brand'>
                        <IconMonstr/>
                    </div>
                </div>    
            </div>

        </div>
    )
}

export default BrandSection;