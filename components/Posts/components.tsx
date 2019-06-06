import styled from '@emotion/styled';

export const PostContainer = styled.div`
    border: 5px solid white;
    width: 300px;
    height: 300px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 25px;
    padding: 5px 10px;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
`

export const PostImage = styled.img`
    width: 100%;
    max-height: 75%;
`
export const PostTitle = styled.h2`
    margin: 0;
    padding: 5px;
    text-align: center;
`
export const PostDate = styled.h3`
    margin: 0;
    text-align: center;
`
export const PostGridContainer=styled.div`
    padding-top: 5%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
