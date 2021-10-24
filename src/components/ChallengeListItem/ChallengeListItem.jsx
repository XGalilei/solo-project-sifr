import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

/**
 * Holds all relevant information of a challenge for usage on the "Challenges" page.
 * 
 */
function ChallengeListItem({challenge}) {

    const user = useSelector(store => store.user);
    const attempts = useSelector(store => store.attempts.allAttempts);
    const dispatch = useDispatch();
    const history = useHistory();
    const challengeId = challenge.id;
    const creatorId = challenge.creator_id;
    const challengeAttempts = [];
    const challengeSuccess = [];
    let complete = false;

    /**
     * Admittedly a piecemeal attempt (albeit the only one that seemed to work)
     * at gathering the necessary attempts for the specified challenge. 
     */
    for(let attempt of attempts) {
        if (attempt.challenge_id === challengeId) {
            challengeAttempts.push(attempt);
            if(attempt.success) {
                challengeSuccess.push(attempt);
                if(attempt.user_id === user.id) {
                    complete = true;
                }
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

        <button className="btn"
        disabled={creatorId === user.id || complete}
        onClick={handleAttempt}
        > {complete ? "Challenge Complete" : "Attempt Challenge"}
        </button>
    </div>;
}

export default ChallengeListItem;