import React from 'react';
import Link from 'next/link';
import {PostContainer,PostImage,PostTitle,PostDate} from './components'

const tagsToString=(tags:Array<string>)=>{
    var ret = tags.join(" ");
    return ret;
}

export var allTags:Set<string>=new Set([]);

const addAllTags=(tags:Array<string>)=>{
    tags.forEach(tag=>allTags.add(tag))
}

const PostCard = ({post}:any) => {
    const {postTitle,postMainImage,postCreationDate,postUrl,postTags} = post.fields;
    addAllTags(postTags)
    return (
        <Link href={postUrl}>
            <PostContainer className = {tagsToString(postTags)}>
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