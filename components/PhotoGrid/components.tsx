import styled from '@emotion/styled';

export const PhotoContainer=styled.div`
    max-height:300px;
    max-width: 300px;
    margin: 10px;
    border: 1px solid white;
    position: relative;
   
    
`
export const ImageContainer = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &:hover{
        content: "";
        position: absolute;
        background: white;
    }
`

export const PhotoGridContainer=styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`