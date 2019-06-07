import NavBar from '../components/NavBar/NavBar';
import PostGrid from '../components/Posts/PostGrid';
import {makeCMSContentRequest} from '../services/CMSrequest';
import React from 'react';
import styled from '@emotion/styled';
import {FilterBar} from '../components/FilterBar/FilterBar';

const Index = (data: any) => {
  return(
    <>
      <NavBar/>
        <FilterBar/>
        <HomePageContainer>
          <PostGrid posts = {data}/>
        </HomePageContainer>
    </>
  )
}

Index.getInitialProps = async() => {
  const data = await makeCMSContentRequest('blogPost');
  return {data};
}

const HomePageContainer=styled.div`
  background: url(https://images.pexels.com/photos/997719/pexels-photo-997719.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  // background-color: #bccbde;
  height: 100vh;
  width: 100 vw;
  `

export default Index
