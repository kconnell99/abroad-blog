import styled from '@emotion/styled';

export const PhotoContainer=styled.div`
    max-height:600px;
    max-width: 600px;
`
export const ImageContainer = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const PhotoGridContainer=styled.div`
    display: flex;
    flex-wrap: wrap;
`