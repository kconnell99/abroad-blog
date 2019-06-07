import React from 'react';
import {useState} from 'react';
import {ImageContainer,PhotoContainer,PhotoGridContainer} from './components';
import {PopupImageCaption,PopupBackgroundContainer,PopupImageContainer,PopupImageContent} from '../Popups/Popups';

export default function PhotoGrid({photos}:any){
    const [photoEnlarged,setPhotoEnlarged] = useState(false);
    const [photoChosen,setPhotoChosen] = useState(null);
    const togglePhoto = (photo:any) => {
        setPhotoEnlarged(!photoEnlarged);
        setPhotoChosen(photo);
    }

    const showPic=(photo:any)=>{
        return(
            <>
            <PopupImageContent src = {photo.fields.photo.fields.file.url}/>
            <PopupImageCaption>{photo.fields.photo.fields.description}</PopupImageCaption>
            </>
        )    
    }
    return(
        <>
            <PhotoGridContainer>
                {photos && photos.data.map((photo:any)=>
                    <PhotoContainer onClick={()=>togglePhoto(photo)} key={photo.sys.id}>    
                        <ImageContainer src = {photo.fields.photo.fields.file.url}/>
                        {photoEnlarged && 
                        <PopupBackgroundContainer onClick={togglePhoto}>
                            <PopupImageContainer>
                                {photoChosen && showPic(photoChosen)}
                            </PopupImageContainer>
                        </PopupBackgroundContainer>
                        }
                        {/* todo: on click, photo enlarges and caption is shown */}
                        {/* <p>{photo.fields.photo.fields.description}</p> */}
                    </PhotoContainer>
                    )
                }
            </PhotoGridContainer>
        </>
        
    )
}

