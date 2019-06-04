import NavBar from '../components/NavBar/NavBar';
import React from 'react';
import {makeCMSContentRequest} from '../services/CMSrequest';


const Post = (data: any) => {
    const {postTitle,postMainImage,postCreationDate,postBody} = data
    return(
        data && 
        <div>
            <NavBar/>
                <h2>
                    {postTitle}
                </h2>
                <div>
                    <img src = {postMainImage.fields.file.url}/>
                </div>
                <h3>
                    {postCreationDate}
                </h3>
                <p>
                    {postBody}
                </p>  
        </div>
    )
}

Post.getInitialProps = (context:any) => context.query.post.fields;

export default Post