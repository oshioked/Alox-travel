import React from 'react';
import './SmallerProductsSection.scss';
import DescriptionSet from '../../../components/DescriptionSet/DescriptionSet';

const SmallerProductsSection = () =>{
    return(
        <div className = 'smaller-products-section'>
            <div className = 'section-container container'>
                <div className = 'product product1'>
                    <div className = 'container'>
                            <div className = 'product-content'>
                                <img alt = 'productImg' src = {require('./images/prod1.png')}/>
                                <DescriptionSet 
                                    title = 'The Travel Legend'
                                    detail = 'A legendary travel bag which was previously out of stock returns, by request. Many customers asked us to bring it back; we listened, upgraded it, and relaunched it.'
                                    btnValue = 'SHOP NOW'
                        
                                />
                                <div className = 'description-set pc'>
                                    <DescriptionSet
                                        title = 'The Travel Legend'
                                        detail = 'A legendary travel bag which was previously out of stock returns, by request. Many customers asked us to bring it back; we listened, upgraded it, and relaunched it.'
                                        btnValue = 'SHOP NOW'
                            
                                    />
                                </div>
                                
                                
                            </div>
                    </div>
                </div>
                <div className = 'product product2'>
                    <div className = 'container'>
                            <div className = 'product-content .description-set'>
                                <img alt = 'productImg' src = {require('./images/prod2.png')}/>    
                                <DescriptionSet
                                    title = 'Crossbag Season'
                                    detail = 'A few new crossbags for  ikeeping documents, accessories and other stuffs have been added to the collection. We’re sure you’d love them.'
                                    btnValue = 'SHOP NOW'
                                />
                                <div className = ' pc description-set'>
                                    <DescriptionSet
                                        title = 'Crossbag Season'
                                        detail = 'A few new crossbags for  ikeeping documents, accessories and other stuffs have been added to the collection. We’re sure you’d love them.'
                                        btnValue = 'SHOP NOW'
                                    />
                                </div>
                                
                            </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default SmallerProductsSection;