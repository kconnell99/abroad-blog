import React from 'react';
import PostCard from './PostCard';
import {PostGridContainer} from './components';

export default function PostGrid({posts}:any){
    return(
        <PostGridContainer>
            {posts && posts.data.map((post:any)=><PostCard key={post.sys.id} post={post}/>)}

        </PostGridContainer>
    )
}




