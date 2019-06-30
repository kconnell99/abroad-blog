import NavBar from '../components/NavBar/NavBar';
import PostGrid from '../components/Posts/PostGrid';
import {makeCMSContentRequest} from '../services/CMSrequest';
import React from 'react';
import styled from '@emotion/styled';
import {PostGridTitle} from '../components/Posts/components';
import {FilterButton} from '../components/FilterBar/FilterButton'

const Index = (data: any) => {

  return(
    <>
      <NavBar/>
        <PostGridTitle>
          Latest Posts
        <FilterButton tags={data}></FilterButton>
        </PostGridTitle>
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
  height: 100vh;
  width: 100 vw;
  `

export default Index
