import styled from '@emotion/styled';

export const PostTitleContainer=styled.h2`
    position: absolute;
    margin: 0px;
    left: 0;
    right: 0;
    bottom: 0%;
    width: 60%;
    color: white;
    font-size: 4em;
`
export const PostDateContainer=styled.h3`
    text-align: center;
    font-family: 'Inconsolata';
    margin-left: 30px;
    `

export const PostHeader=styled.div`
    position: relative;
    display: block;
`
export const PostDescription=styled.div`
    display: flex;
    align-items: flex-start;
    margin-left: 20%;
`

export const PostHeaderImage=styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.8;
`
export const PostTag=styled.div`
    padding: 10px;
    border: 1px solid #e6e6e6;
    background-color: yellow;
    border-radius: 5px;
    font-size: 1em;
    color: black;
`

export const PostTagsContainer=styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
`

export const PostBodyContainer=styled.p`
    font-family: 'Inconsolata';
    text-align: left;
    font-size: x-large;
    margin-left: 20%;
    margin-right: 20%;
`