import React from 'react';
import Link from 'next/link';
import {useState} from 'react';
import {ModalPopup} from '../Popups/ModalPopup';
// import {PopupBackgroundContainer, PopupTextContent} from '../Popups/Popups';
import {NavBarItemContainer, NavBarItemText} from './components';


const NavBarItem = (props:any) => {
  
  const [contactIsShown,setContactIsShown] = useState(false);
  const togglePopup = () => setContactIsShown(!contactIsShown);

  const handleChildClick = (e:any) =>{
    e.stopPropagation();
  }

  const linkName = props.children.toLowerCase()
  if(linkName === 'home'){
    return (
      <div>
        <Link href ={'./'} >
        <NavBarItemContainer>
          <NavBarItemText>
            {props.children}
          </NavBarItemText>
        </NavBarItemContainer>
      </Link>
      </div>
    )
  }

  if(linkName === 'contact'){
    return (
      <div>
          <NavBarItemContainer onClick = {togglePopup}>
            <NavBarItemText>
              {props.children}
            </NavBarItemText>
          </NavBarItemContainer>
        {contactIsShown && <ModalPopup></ModalPopup>}
        {/* // <PopupBackgroundContainer onClick ={togglePopup}>
        //   <PopupTextContent onClick ={handleChildClick}> */}
              
          {/* </PopupTextContent>
        </PopupBackgroundContainer>} */}
      </div>
    );
  }
  return (
    <div>
      <Link href ={'/' + linkName}>
      <NavBarItemContainer>
        <NavBarItemText>
          {props.children}
        </NavBarItemText>
      </NavBarItemContainer>
      </Link>
    </div>
  );
};



export default NavBarItem