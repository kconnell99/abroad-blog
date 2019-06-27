import React from 'react';
import {useState} from 'react';
import {ImageContainer,PhotoContainer,PhotoGridContainer,CaptionOverlay} from './components';
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
            <h2>Photos</h2>
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
                        <CaptionOverlay className="overlay">{photo.fields.photo.fields.description}</CaptionOverlay>
                    </PhotoContainer>
                    )
                }
            </PhotoGridContainer>
        </>
        
    )
}

