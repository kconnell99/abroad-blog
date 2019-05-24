import React from 'react';
import Link from 'next/link';

const NavBarItem = (props:any) => {
    const linkName = props.children.toLowerCase()
    if(linkName === 'home'){
      return (
        <div>
          <Link href ={'./'}>
          <a>
            {props.children}
          </a>
       </Link>
        </div>
      )
    }
    return (
      <div>
       <Link href ={'/' + linkName}>
        <a>
            {props.children}
        </a>
       </Link>
      </div>
    );
  };

  export default NavBarItem