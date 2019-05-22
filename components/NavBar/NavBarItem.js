import React from 'react';

const NavBarItem = (props) => {
    console.log(props);
    return (
      <div>
       <p>{props.children}</p>
      </div>
    );
  };

  export default NavBarItem