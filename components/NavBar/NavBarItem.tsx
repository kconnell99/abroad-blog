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
        <PopupBackgroundContainer>
          <PopupContent>
            Email: ktconnell99@gmail.com
            <button onClick ={hide}>X</button>
          </PopupContent>
        </PopupBackgroundContainer>}
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
  display: inline-block;
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

const PopupBackgroundContainer = styled.div` 
  position: fixed;
  width: 100%;  
  height: 100%;  
  top: 0;  
  left: 0;  
  right: 0;  
  bottom: 0;  
  margin: auto;  
  background-color: rgba(0,0,0, 0.5);   
`
const PopupContent=styled.div`
  text-align: center;  
  background-color: white;
  position: fixed;
  width: 500px;
  height: 200px;
  top: 50%;
  left: 50%;
  margin-top: -100px; /* Negative half of height. */
  margin-left: -250px; /* Negative half of width. */
`


export default NavBarItem