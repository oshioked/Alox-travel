import React, { useEffect, useRef, useState } from 'react'
import OnImagesLoaded from 'react-on-images-loaded';
import {useDispatch} from 'react-redux'
import { setLoadingDisplay } from '../../Redux/LoadingScreen/loadingsreen.actions';

const withLoading = (Page) => () =>{
    const dispatch = useDispatch();
    const pageRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        console.log('withe loadeing set display to true')
        dispatch(setLoadingDisplay('true'))
    }, [dispatch])

    useEffect(() => {
        if(loaded){
            console.log(pageRef.current.children[0]);
        }
    }, [loaded])

    const onLoaded = () =>{
        setTimeout(()=>{
            console.log('withe loading set display to false')
            dispatch(setLoadingDisplay('false'));
            setLoaded(true)
        }, 5000)
    }

    return(
        <OnImagesLoaded
            onLoaded = {onLoaded}
            onTimeout = {onLoaded}
            timeout = {10000}
        >
            <div ref = {pageRef}>
                <Page/>
            </div>
        </OnImagesLoaded>
    )
}

export default withLoading;