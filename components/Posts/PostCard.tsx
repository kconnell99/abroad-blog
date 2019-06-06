import React from 'react';
import Link from 'next/link';
import {PostContainer,PostImage,PostTitle,PostDate} from './components'

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

  export default PostCard