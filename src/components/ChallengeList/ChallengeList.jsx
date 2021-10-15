import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

/**
 * Holds all challenges from the database and enters them in the
 * 
 */
function ChallengeList() {

    const dispatch = useDispatch();
    const challenges = useSelector(store => store.challenges);

    useEffect(() => {
        dispatch({type: 'FETCH_CHALLENGES'});
    }, []);

    return <div>
        <h2>Under Construction...</h2>
    </div>;
}

export default ChallengeList;