import React from 'react';
import PostCard from './PostCard';

export default function PostGrid({posts}:any){
    return(
        <div>
            {posts && posts.data.map((post:any)=><PostCard key={post.sys.id} post={post}/>)}

        </div>
    )
}




