import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const PostCard = ({post}:any) => {
    const {postTitle,postMainImage,postCreationDate,postUrl} = post.fields;
    return (
        <Link href={postUrl}>
            <PostContainer>
                <a>
                <PostImage src = {postMainImage.fields.file.url}/>
                <PostTitle>{postTitle}</PostTitle>
                <PostDate>{postCreationDate}</PostDate>
                </a>   
            </PostContainer>     
        </Link>
    )
  };


const PostContainer = styled.div`
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

const PostImage = styled.img`
    width: 100%;
    max-height: 75%;
`
const PostTitle = styled.h2`
    margin: 0;
    padding: 5px;
    text-align: center;
`
const PostDate = styled.h3`
    margin: 0;
    text-align: center;
`
  export default PostCard