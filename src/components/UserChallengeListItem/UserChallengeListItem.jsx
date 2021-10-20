import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function UserChallengeListItem({challenge}) {
 
    const history = useHistory();
    const dispatch = useDispatch();
    const attempts = useSelector(store => store.attempts.allAttempts);
    const successes = useSelector(store => store.attempts.successes);
    const challengeAttempts = [];
    const challengeSuccess = [];

    for(let attempt of attempts) {
        if(attempt.challenge_id === challenge.id) {
            challengeAttempts.push(attempt);
            if(attempt.success) {
                challengeSuccess.push(attempt);
            }
        }
    }


    const edit = () => {
        const idObject = {id: challenge.id};
        dispatch({type: 'FETCH_A_CHALLENGE', payload: idObject});
        history.push(`/edit-challenge/${challenge.id}`);
    }

    const deleteChallenge = () => {

    }

    return <div>
        <p>{challenge.title}</p>
        <p>Cipher Type: {challenge.name}</p>
        <p>Success: {challengeSuccess.length} / {challengeAttempts.length}</p>
        <p>Plaintext: {challenge.decrypted}</p>
        <p>Ciphertext: {challenge.encrypted}</p>
        {challenge.type_code === 1 ?
        <p>Key: {challenge.key}</p>
        : ''}
        <button onClick={edit}>Edit</button>
        <button onClick={deleteChallenge}>Delete</button>       
    </div>;
}

export default UserChallengeListItem;