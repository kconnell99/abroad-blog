import NavBar from '../components/NavBar/NavBar';
import PostGrid from '../components/Posts/PostGrid';
import {makeCMSContentRequest} from '../services/CMSrequest';
import React from 'react';
import styled from '@emotion/styled';
import {FilterBar} from '../components/FilterBar/FilterBar';
import {PostGridTitle} from '../components/Posts/components';
import Link from 'react'

const Index = (data: any) => {
  return(
    <>
      <NavBar/>
        <PostGridTitle>
          Latest Posts
        </PostGridTitle>
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
  background-color: white;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  // background-color: #bccbde;
  height: 100vh;
  width: 100 vw;
  `

export default Index
