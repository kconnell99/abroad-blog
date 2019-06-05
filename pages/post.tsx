import NavBar from '../components/NavBar/NavBar';
import React from 'react';
import styled from '@emotion/styled';
import {PhotoContainer} from '../components/PhotoGrid/PhotoGrid';
import {ImageContainer} from '../components/PhotoGrid/PhotoGrid';


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
                }}>
                    <ImageContainer src = {postMainImage.fields.file.url}/>
                </PhotoContainer>
                <h3>
                    {postCreationDate}
                </h3>
                <p>
                    {postBody}
                </p>  
        </div>
    )
}

const PostTitleContainer=styled.h2`
    text-align: center;
`


Post.getInitialProps = (context:any) => context.query.post.fields;

export default Post