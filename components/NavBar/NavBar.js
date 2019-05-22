import React from 'react';
import NavBarItem from './NavBarItem';

export default function NavBar(props){
    const options = ["HOME","ABOUT","INDEX","MAP","PHOTOS","CONTACT"];
    const layoutOptions = options.map(item => <NavBarItem>{item}</NavBarItem>)
    
    return(
        <div>
            <h1>{props.children}</h1>
           {layoutOptions} 
        </div>
    )
}
