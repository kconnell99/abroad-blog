import React from 'react';
import Link from 'next/link';

const NavBarItem = (props) => {
    const linkName = props.children.toLowerCase()
    
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