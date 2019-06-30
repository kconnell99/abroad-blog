import NavBar from '../components/NavBar/NavBar';
import React from 'react';
import {PostHeader,PostHeaderImage,PostTag,PostTitleContainer,PostDescription,PostTagsContainer,PostDateContainer,PostBodyContainer} from '../components/Pages/components';

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


Post.getInitialProps = (context:any) => context.query.post.fields;

export default Post