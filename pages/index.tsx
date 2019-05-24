import NavBar from '../components/NavBar/NavBar';
import PostGrid from '../components/Posts/PostGrid';
import {makeCMSContentRequest} from '../services/CMSrequest';
import React from 'react';

const Index = (data: any) => {
  return(
    <div>
      <NavBar/>
      <PostGrid posts = {data}/>
    </div>
  )
}

Index.getInitialProps = async() => {
  const data = await makeCMSContentRequest('blogPost');
  return {data};
}

export default Index
