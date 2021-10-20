import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

function AttemptedChallengeListItem({ challenge }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(store => store.user);
    const attempts = useSelector(store => store.attempts.allAttempts);
    const challengeAttempts = [];


    for(let attempt of attempts) {
        if(attempt.challenge_id === challenge.id && attempt.user_id === user.id) {
            challengeAttempts.push(attempt);
        }
    }

    const attemptChallenge = () => {
        console.log('test');
        dispatch({ type: 'FETCH_A_CHALLENGE', payload: { id: challenge.id } });
        history.push(`attempt-challenge/${challenge.id}`);
    }

    return <div>
        <h4>{challenge.title}</h4>
        <p>Type: {challenge.name}</p>
        <p>Created by: {challenge.username}</p>
        <p>Status: Incomplete</p>
        <p>You have attempted this challenge {challengeAttempts.length} times</p>
        <button onClick={attemptChallenge}>Attempt Challenge/Challenge Complete</button>
    </div>
}

export default AttemptedChallengeListItem;