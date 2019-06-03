import React from 'react';
import Link from 'next/link';
import {useState} from 'react';

const handleClick = (key: any) =>{
  return(
    <div style={tooltipStyle}>
      Email: ktconnell99@gmail.com
    </div>
  )
}

const tooltipStyle = {
  // display: this.state.hover ? 'block' : 'none'
}

const NavBarItem = (props:any) => {
  
  const [contactIsShown,setContactIsShown] = useState(false);
  const hide = () => setContactIsShown(false);
  const show = () => setContactIsShown(true);

  const linkName = props.children.toLowerCase()
  if(linkName === 'home'){
    return (
      <div>
        <Link href ={'./'} >
        <a>
          {props.children}
        </a>
      </Link>
      </div>
    )
  }

  if(linkName === 'contact'){
    
    return (
      <div>
        <button onClick = {show}>{props.children}</button>
        {contactIsShown && 
        <div>
          Email: ktconnell99@gmail.com
          <button onClick ={hide}>X</button>
        </div>}
      </div>
    );
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