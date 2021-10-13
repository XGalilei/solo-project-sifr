import React, { useState } from 'react';
import {useSelector} from 'react-redux';


function DeleteUserButton(props) {
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  const handleClick = () => {
      console.log('clicked delete user');
  }

  return (
    <div>
      <button
      className={props.className} 
      onClick={handleClick}>Delete Account</button>
    </div>
  );
}

export default DeleteUserButton;
