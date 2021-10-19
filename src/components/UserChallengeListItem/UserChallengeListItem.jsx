import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function UserChallengeListItem({challenge}) {
 
    const history = useHistory();
    const dispatch = useDispatch();
    const attempts = useSelector(store => store.attempts.allAttempts);
    const successes = useSelector(store => store.attempts.successes);

    const cipher = useSelector(store => store.ciphers.singleCipher);

    useEffect(() => {
        dispatch({type: 'FETCH_CHALLENGE_ATTEMPTS', payload: {id: challenge.id}});
        dispatch({type: 'FETCH_CHALLENGE_SUCCESS', payload: {id: challenge.id}});
        dispatch({type: 'FETCH_SINGLE_CIPHER', payload: {id: challenge.cipher_id}});
    }, []);

    const edit = () => {
        const idObject = {id: challenge.id};
        console.log(challenge.id);
        dispatch({type: 'FETCH_A_CHALLENGE', payload: idObject});
        history.push(`/edit-challenge/${challenge.id}`);
    }

    const deleteChallenge = () => {

    }

    return <div>
        <p>{challenge.title}</p>
        <p>Cipher Type: {challenge.name}</p>
        <p>Success: {successes.length} / {attempts.length}</p>
        <p>Plaintext: {challenge.decrypted}</p>
        <p>Ciphertext: {challenge.encrypted}</p>
        {cipher.type_code === 1 ?
        <p>Key: {challenge.key}</p>
        : ''}
        <button onClick={edit}>Edit</button>
        <button onClick={deleteChallenge}>Delete</button>       
    </div>;
}

export default UserChallengeListItem;