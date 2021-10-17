import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import DeleteUserButton from '../DeleteUserButton/DeleteUserButton';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <>
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <DeleteUserButton className="btn"/>
      <LogOutButton className="btn" />
    </div>
    <div className="container">
      <h2>Your Challenges:</h2>
    </div>
    <div className="container">
      <h2>Attempted Challenges:</h2>
    </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
