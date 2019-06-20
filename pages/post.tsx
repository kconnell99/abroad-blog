import NavBar from '../components/NavBar/NavBar';
import React from 'react';
import styled from '@emotion/styled';

const Post = (data: any) => {
    const {postTitle,postMainImage,postCreationDate,postBody,postTags} = data
    const tags = postTags.map((tag:any) => <PostTag key = {tag}>{tag}</PostTag>)

    return(
        data && 
        <div>
            <NavBar/>
            <PostHeader >
                <div style={{background: "linear-gradient(to bottom, #000000 70%, #e6e6e6 100%)"}}>
                    <PostHeaderImage src = {postMainImage.fields.file.url}/>
                </div>
                <PostTitleContainer>
                    {postTitle}
                </PostTitleContainer>
            </PostHeader>
            <PostDescription>
                <PostTagsContainer>
                    {tags}
                </PostTagsContainer>
                <PostDateContainer>
                    {postCreationDate}
                </PostDateContainer>
            </PostDescription>
                
                <PostBodyContainer>
                    {postBody}
                </PostBodyContainer>  
        </div>
    )
}

export const PostTitleContainer=styled.h2`
    position: absolute;
    margin: 0px;
    left: 0;
    right: 0;
    bottom: 0%;
    width: 60%;
    color: white;
    font-size: 4em;
`
const PostDateContainer=styled.h3`
    text-align: center;
    font-family: 'Inconsolata';
    margin-left: 30px;
    `

const PostHeader=styled.div`
    position: relative;
    display: block;
`
const PostDescription=styled.div`
    display: flex;
    align-items: flex-start;
    margin-left: 20%;
`

const PostHeaderImage=styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.8;
`
const PostTag=styled.div`
    padding: 10px;
    border: 1px solid #e6e6e6;
    background-color: yellow;
    border-radius: 5px;
    font-size: 1em;
`

const PostTagsContainer=styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
`

export const PostBodyContainer=styled.p`
    font-family: 'Inconsolata';
    text-align: left;
    margin-left: 20%;
    margin-right: 20%;
`

Post.getInitialProps = (context:any) => context.query.post.fields;

export default Post