import React from 'react';
import Link from 'next/link';
import {useState} from 'react';
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
        {contactIsShown && 
          <form action="mailto:ktconnell99@gmail.com"
          method="POST"
          enctype="multipart/form-data"
          name="EmailTestForm">
            Your Name:<br></br>
              <input type="text" name="VisitorName"></input>
              <br></br>
              Your Comment:
              <br></br>
              <textarea name="VisitorComment">
              </textarea>

              <input type="submit" value="Email This Form"></input>
          </form>}
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