import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";

/**
 * This form is used to attempt a challenge, which is determined
 * by passing a value through props. Once an answer is submitted, the 
 * user will be informed whether their attempt was a success or failure,
 * and their attempt will be stored in the database.
 *  
 */
function AttemptChallengeForm(props) {

    const dispatch = useDispatch();
    const challenge = useSelector(store => store.challenges.singleChallenge);
    const [answer, setAnswer] = useState('');
    const history = useHistory();

    useEffect(() => {
        console.log(props.match.params.id);
        dispatch({type: 'FETCH_A_CHALLENGE', payload: {id: props.match.params.id}});
        console.log(challenge);
    }, []);

    const submitAnswer = () => {
        const result = (answer.toUpperCase() === challenge.decrypted);
        const attemptObject = {
            challenge: challenge.id,
            success: result
        };
        console.log(result ? `Congratulations, that's correct!` : `Sorry, you're wrong`);
        dispatch({type: 'MAKE_ATTEMPT', payload: attemptObject});
        history.push('/challenges')
    }

    return <div>
        <p>{challenge.title}</p>
        <p>{challenge.name}</p>
        <p>{challenge.encrypted}</p>
        {challenge.type_code === 1 ? 
        <p>Key: {challenge.key}</p> 
        : ''
        }
        <form>
            <input 
            placeholder="Place your answer here"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            />
            <button onClick={submitAnswer}>Submit</button>
        </form>
    </div>;
}

export default AttemptChallengeForm;