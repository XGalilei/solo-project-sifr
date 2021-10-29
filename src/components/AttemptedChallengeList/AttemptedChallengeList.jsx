import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AttemptedChallengeListItem from "../AttemptedChallengeListItem/AttemptedChallengeListItem";

/**
 * AttemptedChallengeList holds all challenges that have been attempted
 * by the logged-in user. 
 * 
 */
function AttemptedChallengeList() {

    const user = useSelector(store => store.user);
    const attempted = useSelector(store => store.challenges.attemptedChallenges);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'FETCH_ATTEMPTED_CHALLENGES', payload: {id: user.id}});
        dispatch({type: 'FETCH_CHALLENGE_ATTEMPTS'});
    },[]);

    return <div className="container">
        <h2>Attempted Challenges:</h2>
        {attempted.map(challenge => {
            return <AttemptedChallengeListItem 
            key={challenge.id}
            challenge={challenge}
            />
        })}
    </div>
}

export default AttemptedChallengeList;