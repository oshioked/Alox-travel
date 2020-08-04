import React from 'react';
import './Collectionpage.scss';

import RecommendedSection from './RecommendedSection/RecommendedSection';
import CollectionOverviewSection from './CollectionOverviewSection/CollectionOverviewSection';

const Collectionpage = () =>{
    return(
        <div className = 'collection-page'>
            <RecommendedSection/>
            <CollectionOverviewSection/>
        </div>
    )
}

export default Collectionpage;