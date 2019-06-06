import styled from '@emotion/styled';

export const PhotoContainer=styled.div`
    border: 5px solid white;
    max-width: 300px;
    max-height: 300px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 25px;
    padding: 10px;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ImageContainer = styled.img`
    max-width: 100%;
    max-height: 100%;
`

export const PhotoGridContainer=styled.div`
    display: flex;
    flex-wrap: wrap;
`