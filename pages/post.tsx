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
                <PostTitleContainer>
                    {postTitle}
                </PostTitleContainer>
                <PhotoContainer style={{
                    margin: "auto",
                    width: "50%",
                    cursor: "auto"
                }}>
                    <ImageContainer src = {postMainImage.fields.file.url}/>
                </PhotoContainer>
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
    text-align: center;
`
const PostDateContainer=styled.h3`
    text-align: center;
`
export const PostBodyContainer=styled.p`
    text-align: left;
    margin-left: 20%;
    margin-right: 20%;
`

Post.getInitialProps = (context:any) => context.query.post.fields;

export default Post