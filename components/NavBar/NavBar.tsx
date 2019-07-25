import React from 'react';
import Link from 'next/link';
import NavBarItem from './NavBarItem';
import {Global,css} from '@emotion/core';
import {FullNavBarContainer,NavBarItemsContainer,NavBarTitle} from './components';

export default function NavBar(){
    const options = ["HOME","ABOUT","PHOTOS","CONTACT"];
    const layoutOptions = options.map(item => <NavBarItem key = {item}>{item}</NavBarItem>)

    return(
        <>
        <link
            href="https://fonts.googleapis.com/css?family=Josefin+Sans"
            rel="stylesheet"
            key="google-font-josefin+sans"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Inconsolata"
            rel="stylesheet"
            key="google-font-inconsolata"
          />
        <Global styles={css`*{
            color: black;
            font-family: 'Josefin Sans', arial, sans-serif;
        }`}></Global>
          <FullNavBarContainer>
            <Link href ={'./'}>
                <NavBarTitle>Churros y Charlas</NavBarTitle>
            </Link>
            <NavBarItemsContainer>
                {layoutOptions} 
            </NavBarItemsContainer>
        </FullNavBarContainer>  
        </>
      
    )
}


