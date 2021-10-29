import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {encrypt} from '../SubpageCipher/ciphers';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function EditChallenge(props) {

    const challenge = useSelector(store => store.challenges.singleChallenge);
    const [plaintext, setPlaintext] = useState(challenge.decrypted);
    const [ciphertext, setCiphertext] = useState(challenge.encrypted);
    const [title, setTitle] = useState(challenge.title);
    const [key, setKey] = useState(challenge.key);
    const dispatch = useDispatch();
    const history = useHistory();


    const submitChanges = () => {
        setCiphertext(encrypt(plaintext, key, challenge.cipher_id));
        console.log('Ciphertext:', ciphertext);
        const updatedChallenge = {
            decrypted: plaintext,
            encrypted: ciphertext,
            key: key,
            title: title,
            id: challenge.id
        }
        
        dispatch({type: 'EDIT_CHALLENGE', payload: updatedChallenge});
        console.log(updatedChallenge);
        history.push('/user');
    }

    const cancelChanges = () => {
        history.push('/user');
    }

    return (
        <div>
            <form>
                <input
                value={title}
                onChange={event => setTitle(event.target.value)}
                />
                <input
                value={plaintext} 
                onChange={(event) => setPlaintext(event.target.value)}
                />
                {challenge.cipher_id === 2 ?
                <input
                value={key}
                onChange={event => setKey(event.target.value)}
                />
                :
                ''
                }
                <br/>
                <button className="btn" onClick={submitChanges}>Submit</button>
            </form>
            <button className="btn" onClick={cancelChanges}>Cancel</button>
        </div>
    );
}

export default EditChallenge;
