import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {encrypt} from '../SubpageCipher/ciphers';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function EditChallenge(props) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const store = useSelector((store) => store);
    const [plaintext, setPlaintext] = useState(props.challenge.decrypted);
    const [title, setTitle] = useState(props.challenge.title);
    const [key, setKey] = useState(props.challenge.key);
    const dispatch = useDispatch();

    const submitChanges = () => {
        const updatedChallenge = {
            decrypted: plaintext,
            encrypted: encrypt(plaintext, key, props.challenge.cipher_id),
            key: key,
            title: title,
            id: props.challenge.id
        }
        dispatch({type: 'EDIT_CHALLENGE', payload: updatedChallenge});
        console.log('Challenge editing complete');
        history.push('/user');
    }

    const cancelChanges = () => {
        history.push('/challenges');
    }

    return (
        <div>
            <form onSubmit={() => submitChanges}>
                <input
                value={title}
                onChange={event => setTitle(event.target.value)}
                />
                <input
                value={plaintext} 
                onChange={(event) => setPlaintext(event.target.value)}
                />
                {props.challenge.cipher_id === 2 ?
                <input
                value={key}
                onChange={event => setKey(event.target.value)}
                />
                :
                ''
                }

            </form>
            <button onClick={() => cancelChanges}>Cancel</button>
        </div>
    );
}

export default EditChallenge;
