import React from 'react';
import PostCard from './PostCard';
import styled from '@emotion/styled';

export default function PostGrid({posts}:any){
    return(
        <PostGridContainer>
            {posts && posts.data.map((post:any)=><PostCard key={post.sys.id} post={post}/>)}

        </PostGridContainer>
    )
}

const PostGridContainer=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`



