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

    useEffect(() => {
        //dispatch({type: 'FETCH_CHALLENGE_ATTEMPTS', payload: {id: challengeId} });
        //dispatch({type: 'FETCH_CHALLENGE_SUCCESS', payload: {id: challengeId}});
    }, []);

    const handleAttempt = () => {
        console.log('attempting');
        dispatch({type: 'FETCH_A_CHALLENGE', payload: {id: challengeId}})
        history.push(`attempt-challenge/${challengeId}`)
    }

    return <div>
        <h4>{challenge.title}</h4>
        <p>Cipher Type: {challenge.name}</p>
        <p>Created by: {challenge.username}</p>
        {/*<p>Success Rate: {successes.length} / {attempts.length} </p>*/}
        <p>{challenge.encrypted}</p>

        <button
        disabled={challenge.creator_id === user.id}
        onClick={() => handleAttempt}
        >Attempt Challenge</button>
    </div>;
}

export default ChallengeListItem;