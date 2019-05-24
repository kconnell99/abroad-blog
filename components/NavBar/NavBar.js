import React from 'react';
import NavBarItem from './NavBarItem';

export default function NavBar(props){
    const options = ["HOME","ABOUT","MAP","PHOTOS","CONTACT"];
    const layoutOptions = options.map(item => <NavBarItem key = {item}>{item}</NavBarItem>)
    
    return(
        <div>
            <h1>BLOG TITLE</h1>
            <h2>{props.children}</h2>
           {layoutOptions} 
        </div>
    )
}
