import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function ChallengeListItem(props) {

    const user = useSelector(store => store.user);
    const attempts = useSelector(store => store.attempts.allAttempts);
    const successes = useSelector(store => store.attempts.successes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'FETCH_CHALLENGE_ATTEMPTS', payload: props.challenge.id});
        dispatch({type: 'FETCH_CHALLENGE_SUCCESS', payload: props.challenge.id});
    }, []);

    const handleAttempt = () => {
        console.log('attempting');
    }

    return <div>
        <h4>{props.challenge.title}</h4>
        <p>Cipher Type: {props.challenge.cipher_id}</p>
        <p>Created by: {props.challenge.creator_id}</p>
        <p>Success Rate: {successes.length} / {attempts.length} </p>
        <p>{props.challenge.encrypted}</p>

        <button
        disabled={props.challenge.creator_id === user.id}
        onClick={handleAttempt}
        >Attempt Challenge</button>
    </div>;
}

export default ChallengeListItem;