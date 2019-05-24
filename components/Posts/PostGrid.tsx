import React from 'react';
import PostCard from './PostCard';


const handleClick = (post:any) => {
    console.log(post.post.fields.postTitle.replace(/\s+/g, '-').toLowerCase());
    // <Link href = {'/' + post.post.fields.postTitle.replace(/\s+/g, '-').toLowerCase()}/>
  }


export default function PostGrid({posts}:any){
    console.log(posts)
    return(
        <div>
            <h1>BLOG TITLE</h1>    
            {posts && posts.data.map((post:any)=><PostCard key={post.sys.id} post={post} handleClick = {()=>{handleClick({post})}}/>)}

        </div>
    )
}




