import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserChallengeListItem from '../UserChallengeListItem/UserChallengeListItem';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function UserChallengeList() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const user = useSelector(store => store.user);
  const challenges = useSelector(store => store.challenges.userChallenges);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'FETCH_CREATED_CHALLENGES', payload: {id: user.id}  });
    dispatch({type: 'FETCH_CHALLENGE_ATTEMPTS'});
  }, [])

  return (
    <div>
      <h2>Your Created Challenges:</h2>
      {challenges.map(challenge => {
          return <UserChallengeListItem 
          key={challenge.id}
          challenge={challenge}
          />
      })}
    </div>
  );
}

export default UserChallengeList;
