import NavBar from '../components/NavBar/NavBar';
import React from 'react';
import styled from '@emotion/styled';
import {PhotoContainer,ImageContainer} from '../components/PhotoGrid/components';

const Post = (data: any) => {
    const {postTitle,postMainImage,postCreationDate,postBody} = data
    return(
        data && 
        <div>
            <NavBar/>
            <PostHeader >
                <div style={{background: "linear-gradient(to bottom, #000000 70%, #e6e6e6 100%)"}}>
                    <PostHeaderImage src = {postMainImage.fields.file.url}/>
                </div>
                <PostTitleContainer>
                    {postTitle}
                </PostTitleContainer>
            </PostHeader>
                <PostDateContainer>
                    {postCreationDate}
                </PostDateContainer>
                <PostBodyContainer>
                    {postBody}
                </PostBodyContainer>  
        </div>
    )
}

export const PostTitleContainer=styled.h2`
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 10%;
    width: 60%;
    color: white;
    font-size: 4em;
`
const PostDateContainer=styled.h3`
    text-align: center;
    font-family: 'Inconsolata';
`

const PostHeader=styled.div`
    position: relative;
    display: block;
`

const PostHeaderImage=styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.8;
`

export const PostBodyContainer=styled.p`
    font-family: 'Inconsolata';
    text-align: left;
    margin-left: 20%;
    margin-right: 20%;
`

Post.getInitialProps = (context:any) => context.query.post.fields;

export default Post