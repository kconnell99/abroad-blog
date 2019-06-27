import NavBar from '../components/NavBar/NavBar';
import PhotoGrid from '../components/PhotoGrid/PhotoGrid';
import React from 'react';
import {makeCMSContentRequest} from '../services/CMSrequest';

const Photos = (data: any) => {
    return(
        data && 
        <>
            <NavBar/>
            <PhotoGrid photos = {data}/>
        </>
    )
}

Photos.getInitialProps = async() => {
    const data = await makeCMSContentRequest('photo');
    return {data};
}

export default Photos