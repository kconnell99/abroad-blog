import React from 'react';
import Link from 'next/link';
import {PostContainer,PostImageContainer, PostImage,PostTitle,PostDate,PostDescription} from './components'

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
            <PostContainer className = {`filterDiv ${tagsToString(postTags)}`}>
                <a style={{display: "block"}}>
                <PostImageContainer>
                    <PostImage src = {postMainImage.fields.file.url}/>
                </PostImageContainer>
                <PostDescription>
                    <PostDate>{postCreationDate}</PostDate>
                    <PostTitle>{postTitle}</PostTitle>
                </PostDescription>
                </a>   
            </PostContainer>     
        </Link>
    )
  };

  export default PostCard