import React from 'react';
import Link from 'next/link';
import NavBarItem from './NavBarItem';
import {FullNavBarContainer,NavBarItemsContainer,NavBarTitle} from './components';

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


