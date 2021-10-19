import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function ChallengeListItem(props) {

    const user = useSelector(store => store.user);
    const attempts = useSelector(store => store.attempts.allAttempts);
    const successes = useSelector(store => store.attempts.successes);
    //const cipher = useSelector(store => store.ciphers.singleCipher);
    const dispatch = useDispatch();
    const history = useHistory();
    const challengeId = props.challenge.id;

    useEffect(() => {
        dispatch({type: 'FETCH_CHALLENGE_ATTEMPTS', payload: {id: challengeId} });
        dispatch({type: 'FETCH_CHALLENGE_SUCCESS', payload: {id: challengeId}});
        //dispatch({type: 'FETCH_SINGLE_CIPHER', payload: {id: props.challenge.cipher_id}})
    }, []);

    const handleAttempt = () => {
        console.log('attempting');
        //dispatch({type: 'FETCH_A_CHALLENGE', payload: {id: props.challenge.id}})
        history.push(`attempt-challenge/${props.challenge.id}`)
    }

    return <div>
        <h4>{props.challenge.title}</h4>
        <p>Cipher Type: {props.challenge.cipher_id}</p>
        <p>Created by: {props.challenge.creator_id}</p>
        <p>Success Rate: {successes.count} / {attempts.length} </p>
        <p>{props.challenge.encrypted}</p>

        <button
        disabled={props.challenge.creator_id === user.id}
        onClick={() => handleAttempt}
        >Attempt Challenge</button>
    </div>;
}

export default ChallengeListItem;