import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChallengeListItem from '../ChallengeListItem/ChallengeListItem';

/**
 * Holds all challenges from the database and enters them in the
 * 
 */
function ChallengeList() {

    const dispatch = useDispatch();
    const challenges = useSelector(store => store.challenges.challenges);

    useEffect(() => {
        dispatch({type: 'FETCH_CHALLENGES'});
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