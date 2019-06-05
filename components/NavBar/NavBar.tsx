import React from 'react';
import Link from 'next/link';
import NavBarItem from './NavBarItem';
import styled from '@emotion/styled';

export default function NavBar(){
    const options = ["HOME","ABOUT","MAP","PHOTOS","CONTACT"];
    const layoutOptions = options.map(item => <NavBarItem key = {item}>{item}</NavBarItem>)

    return(
        <FullNavBarContainer>
            <Link href ={'./'}>
                <NavBarTitle>BLOG TITLE</NavBarTitle>
            </Link>
            <NavBarItemsContainer>
                {layoutOptions} 
            </NavBarItemsContainer>
        </FullNavBarContainer>
    )
}

const FullNavBarContainer=styled.div`
    background: #c2dde6;
    width: 100vw;
  height: 200px;
  border-bottom: 5px solid #bccbde;
  display: relative;
`

const NavBarItemsContainer = styled.div`
    width: 100%;
    background: #c2dde6;
    margin-bottom: 20px;
    display: flex;
    float: bottom;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 85px;
`

const NavBarTitle = styled.h1`
    text-align: center;
    color: white;
`
