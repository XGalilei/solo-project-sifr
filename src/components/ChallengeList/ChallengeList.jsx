import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChallengeListItem from '../ChallengeListItem/ChallengeListItem';

/**
 * The ChallengeList holds all challenges from the database, and holds them for
 * usage in the "Challenges" page. 
 * 
 */
function ChallengeList() {

    const dispatch = useDispatch();
    const challenges = useSelector(store => store.challenges.challenges);

    useEffect(() => {
        dispatch({type: 'FETCH_CHALLENGES'});
        dispatch({type: 'FETCH_CHALLENGE_ATTEMPTS' });
        dispatch({type: 'FETCH_CHALLENGE_SUCCESS'});
    }, []);

    return <div>
        <h2>Under Construction...</h2>
        {challenges.map(challenge => {
            console.log(challenge);
            return <ChallengeListItem
            key={challenge.id}
            challenge={challenge}/>;
        })
        }
    </div>;
}

export default ChallengeList;