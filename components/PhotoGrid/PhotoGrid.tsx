import React from 'react';
import {useState} from 'react';
import {ImageContainer,PhotoContainer,PhotoGridContainer,CaptionOverlay} from './components';
import {Modal,ModalCaption,ModalClose,ModalContent} from '../Modals/components';

export default function PhotoGrid({photos}:any){
    const [photoChosen,setPhotoChosen] = useState(null);
    const showModal = (photo:any) => {
        setPhotoChosen(photo);
    }

    const displayImage=(photo:any)=>{
        return photo.fields.photo.fields.file.url;
    }

    const displayCaption=(photo:any)=>{
        return photo.fields.photo.fields.description;
    }

    const closeModal=()=>{
        setPhotoChosen(null);
    }

    return(
        <>
            <h2>Photos</h2>
            <PhotoGridContainer>
                {photos && photos.data.map((photo:any)=>
                    <PhotoContainer onClick={()=>showModal(photo)} key={photo.sys.id}>    
                        <ImageContainer src = {photo.fields.photo.fields.file.url}/>
                        <CaptionOverlay className="overlay">{photo.fields.photo.fields.description}</CaptionOverlay>
                    </PhotoContainer>
                    )
                }
            </PhotoGridContainer>
            {photoChosen && 
                <Modal>
                    <ModalClose role="button" onClick={closeModal}>X</ModalClose>
                    <ModalContent src={displayImage(photoChosen)}></ModalContent>
                    <ModalCaption>{displayCaption(photoChosen)}</ModalCaption>
                </Modal>
            } 
        </>
    )
}