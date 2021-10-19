import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import DeleteUserButton from '../DeleteUserButton/DeleteUserButton';
import { useEffect } from 'react';
import UserChallengeList from '../UserChallengeList/UserChallengeList';
import AttemptedChallengeList from '../AttemptedChallengeList/AttemptedChallengeList';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const createdChallenges = useSelector((store) => store.challenges.userChallenges)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'FETCH_CREATED_CHALLENGES', payload: {id: user.id}  });
  }, []);

  return (
    <>
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <DeleteUserButton className="btn"/>
      <LogOutButton className="btn" />
    </div>
      <UserChallengeList />
      <AttemptedChallengeList />

    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
