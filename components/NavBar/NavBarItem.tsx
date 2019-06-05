import React from 'react';
import Link from 'next/link';
import {useState} from 'react';
import styled from '@emotion/styled';


const NavBarItem = (props:any) => {
  
  const [contactIsShown,setContactIsShown] = useState(false);
  const hide = () => setContactIsShown(false);
  const show = () => setContactIsShown(true);

  const linkName = props.children.toLowerCase()
  if(linkName === 'home'){
    return (
      <div>
        <Link href ={'./'} >
        <NavBarItemContainer>
          <a>
            {props.children}
          </a>
        </NavBarItemContainer>
      </Link>
      </div>
    )
  }

  if(linkName === 'contact'){
    
    return (
      <div>
          <NavBarButtonContainer onClick = {show}>{props.children}</NavBarButtonContainer>
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
      <NavBarItemContainer>
        <a>
          {props.children}
        </a>
      </NavBarItemContainer>
      </Link>
    </div>
  );
};

const NavBarItemContainer = styled.div`
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  transition: all .4s;
  text-align: center;
  &:hover{
    background: #bccbde;
  }
`
const NavBarButtonContainer = styled.button`
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  transition: all .4s;
  text-align: center;
  &:hover{
    background: #bccbde;
  }
`



export default NavBarItem