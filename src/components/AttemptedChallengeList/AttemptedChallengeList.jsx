import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AttemptedChallengeListItem from "../AttemptedChallengeListItem/AttemptedChallengeListItem";

function AttemptedChallengeList() {

    const user = useSelector(store => store.user);
    const attempted = useSelector(store => store.challenges.attemptedChallenges);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'FETCH_ATTEMPTED_CHALLENGES', payload: {id: user.id}});
        dispatch({type: 'FETCH_CHALLENGE_ATTEMPTS'});
    },[]);

    return <div>
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