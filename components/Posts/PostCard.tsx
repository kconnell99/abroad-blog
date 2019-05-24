import React from 'react';
import Link from 'next/link';

const PostCard = ({post,handleClick}:any) => {
    const {postTitle,postMainImage,postCreationDate,postBody} = post.fields

    return(
        <Link href="test-post-2">
            <a>
                <div>
                    <img src = {postMainImage.fields.file.url}/>
                </div>
                <h2>{postTitle}</h2>
                <h3>{postCreationDate}</h3>
            </a>
        </Link>
    )
  };

  export default PostCard