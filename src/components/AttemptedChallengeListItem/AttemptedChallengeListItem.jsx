import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

/**
 * AttemptedChallengeListItem contains all information on a challenge the current user
 * has attempted. That information will include the number of attempts on the challenge by 
 * the user, and whether the challenge has been completed or not.
 * 
 * If the challenge has been completed by the user, it will be marked as "Complete", and the user
 * will not have the chance to complete it again.
 *  
 */
function AttemptedChallengeListItem({ challenge }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(store => store.user);
    const attempts = useSelector(store => store.attempts.allAttempts);
    const challengeAttempts = [];
    let complete = false;


    /**
     * An admittedly piecemeal way of populating the number of attempts,
     * as well as determining whether the user has successfully completed 
     * the challenge
     */
    for(let attempt of attempts) {
        if(attempt.challenge_id === challenge.id && attempt.user_id === user.id) {
            challengeAttempts.push(attempt);
            if(attempt.success) {
                complete = true;
            }
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
        <p>Status: {complete ? 'Complete' : 'Incomplete'}</p>
        <p>You have attempted this challenge {challengeAttempts.length} times</p>
        {
            complete ?
            <div className="btn btn_complete">Challenge Complete</div> 
            : 
            <button 
            onClick={attemptChallenge}
            className="btn">
                Attempt Challenge
            </button>
        }

    </div>
}

export default AttemptedChallengeListItem;