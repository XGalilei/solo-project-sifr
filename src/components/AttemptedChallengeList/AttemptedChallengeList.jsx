import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function AttemptedChallengeList() {

    const user = useSelector(store => store.user);
    const attempted = useSelector(store => store.challenges.attemptedChallenges);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'FETCH_ATTEMPTED_CHALLENGES', payload: {id: user.id}});
    },[]);

    return <div>
        <h2>Attempted Challenges:</h2>
    </div>
}

export default AttemptedChallengeList;