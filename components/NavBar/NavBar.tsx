import React from 'react';
import Link from 'next/link';
import NavBarItem from './NavBarItem';

export default function NavBar(){
    const options = ["HOME","ABOUT","MAP","PHOTOS","CONTACT"];
    const layoutOptions = options.map(item => <NavBarItem key = {item}>{item}</NavBarItem>)

    return(
        <div>
            <Link href ={'./'}>
                <h1>BLOG TITLE</h1>
            </Link>
           {layoutOptions} 
        </div>
    )
}
