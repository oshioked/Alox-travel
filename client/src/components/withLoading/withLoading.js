import React, { useEffect, useRef, useState } from 'react'
import OnImagesLoaded from 'react-on-images-loaded';
import {useDispatch} from 'react-redux'
import { setLoadingDisplay } from '../../Redux/LoadingScreen/loadingsreen.actions';

const withLoading = (Page) => (images) =>{
    const dispatch = useDispatch();
    const pageRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        console.log('withe loadeing set display to true');
        // pageRef.current.style.visibility='hidden';
        dispatch(setLoadingDisplay('true'))
    }, [dispatch])

    useEffect(() => {
        if(loaded){
            // pageRef.current.style.visibility='visible';
        }
    }, [loaded])

    useEffect(() => {
        var images = new Array()
        const preload = () => {
            for (var i = 0; i < preload.arguments.length; i++) {
                images[i] = new Image()
                images[i].src = preload.arguments[i]
            }
        }
        const allPreloadImgs = document.querySelectorAll('.preload');
        console.log(allPreloadImgs);
        // preload(
        //     "http://localhost:3000/gallery/image-001.jpg",
        //     "http://domain.tld/gallery/image-002.jpg",
        //     "http://domain.tld/gallery/image-003.jpg"
        // )
    }, [])

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