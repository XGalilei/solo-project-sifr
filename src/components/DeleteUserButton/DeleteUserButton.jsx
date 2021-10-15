import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';


function DeleteUserButton(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const user = useSelector((store) => store.user);
  const [heading, setHeading] = useState('Functional Component');

  const handleClick = (event) => {
    event.preventDefault();
    console.log('clicked delete user');
    dispatch({
      type: 'DELETE_USER',
      payload: user.id
    });
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
