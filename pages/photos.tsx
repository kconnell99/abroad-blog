import NavBar from '../components/NavBar/NavBar';
import PhotoGrid from '../components/PhotoGrid/PhotoGrid';
import React from 'react';
import {makeCMSContentRequest} from '../services/CMSrequest';

const Photos = (data: any) => {
    return(
        data && 
        <div>
            <NavBar/>
            <PhotoGrid photos = {data}/>
        </div>
    )
}

Photos.getInitialProps = async() => {
    const data = await makeCMSContentRequest('photo');
    return {data};
}

export default Photos