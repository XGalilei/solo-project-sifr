import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function UserChallengeListItem(props) {

    const history = useHistory();
    const dispatch = useDispatch();
    //const attempts = useSelector(store => store.attempts.allAttempts);
    //const successes = useSelector(store => store.attempts.successes);

    const cipher = useSelector(store => store.ciphers.singleCipher);

    useEffect(() => {
        //dispatch({type: 'FETCH_CHALLENGE_ATTEMPTS', payload: props.key});
        //dispatch({type: 'FETCH_CHALLENGE_SUCCESS', payload: props.key});
        //dispatch({type: 'FETCH_SINGLE_CIPHER', payload: props.challenge.cipher_id})
    }, []);

    const edit = () => {
        const idObject = {id: props.challenge.id};
        console.log(props.challenge.id);
        dispatch({type: 'FETCH_A_CHALLENGE', payload: idObject});
        history.push(`/edit-challenge/${props.challenge.id}`);
    }

    const deleteChallenge = () => {

    }

    return <div>
        <p>{props.challenge.title}</p>
        <p>Cipher Type: {props.challenge.cipher_id}</p>
        {/*<p>Success: {successes.count} / {attempts.length}</p>*/}
        <p>Plaintext: {props.challenge.decrypted}</p>
        <p>Ciphertext: {props.challenge.encrypted}</p>
        {cipher.type_code === 1 ?
        <p>Key: {props.challenge.key}</p>
        : ''}
        <button onClick={edit}>Edit</button>
        <button onClick={deleteChallenge}>Delete</button>       
    </div>;
}

export default UserChallengeListItem;