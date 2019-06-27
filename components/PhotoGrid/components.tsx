import styled from '@emotion/styled';

export const PhotoContainer=styled.div`
    max-height:300px;
    max-width: 300px;
    margin: 10px;
    border: 1px solid white;
    position: relative;
    &:hover{
        
    }
   
`
export const ImageContainer = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: block;
    
`

export const PhotoGridContainer=styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const CaptionOverlay=styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    &:hover{
        opacity: 1;
        border: 1px solid #efefef;
    }
`