import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function ChallengeListItem({challenge}) {

    const user = useSelector(store => store.user);
    const attempts = useSelector(store => store.attempts.allAttempts);
    const successes = useSelector(store => store.attempts.successes);
    const dispatch = useDispatch();
    const history = useHistory();
    const challengeId = challenge.id;
    const challengeAttempts = [];
    const challengeSuccess = [];

    for(let attempt of attempts) {
        if (attempt.challenge_id === challengeId) {
            challengeAttempts.push(attempt);
            if(attempt.success) {
                challengeSuccess.push(attempt);
            }
        }
    }



    const handleAttempt = () => {
        console.log('attempting');
        dispatch({type: 'FETCH_A_CHALLENGE', payload: {id: challengeId}})
        history.push(`attempt-challenge/${challengeId}`)
    }

    return <div>
        <h4>{challenge.title}</h4>
        <p>Cipher Type: {challenge.name}</p>
        <p>Created by: {challenge.username}</p>
        <p>Success Rate: {challengeSuccess.length} / {challengeAttempts.length} </p>
        <p>{challenge.encrypted}</p>

        <button
        disabled={challenge.creator_id === user.id}
        onClick={handleAttempt}
        >Attempt Challenge</button>
    </div>;
}

export default ChallengeListItem;