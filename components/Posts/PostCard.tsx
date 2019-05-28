import React from 'react';
import Link from 'next/link';

const PostCard = ({post}:any) => {
    const {postTitle,postMainImage,postCreationDate,postUrl} = post.fields

    console.log(postUrl);
    return(
        <Link href={postUrl}>
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