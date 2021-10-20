import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {encrypt} from '../SubpageCipher/ciphers.js';

function NewChallengeForm() {

    const [title, setTitle] = useState('');
    const [cipher, setCipher] = useState({});
    const [plaintext, setPlainText] = useState('');
    const [key, setKey] = useState('');

    const ciphers = useSelector(store => store.ciphers.allCiphers);
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);
    const history = useHistory();


    useEffect(() => {
        dispatch({ type: 'FETCH_CIPHERS' });
    }, []);

    const submitChallenge = () => {
        console.log(title);
        console.log(cipher.name);
        const ciphertext = encrypt(plaintext, key, cipher.id);
        const challengeMid = {
            title: title,
            cipherId: cipher.id,
            decrypted: plaintext,
            encrypted: ciphertext,
            key: key
        }
        dispatch({type: 'ADD_CHALLENGE', payload: challengeMid});
        console.log(challengeMid);
        history.push('/challenges');
    }

    //only show the form information once a cipher has been chosen
    return <div>
        <form onSubmit={() => submitChallenge()}>

            <select>
                {/* A cipher must be selected before anything can happen */}
                <option onClick={() => setSelected(false)}>
                    Select a value...
                </option>

                {ciphers.map(cipherOp => {
                    return <option
                    key={cipherOp.id} 
                    value={cipherOp.id}
                        onClick={() => {
                            setCipher(cipherOp);
                            setSelected(true);
                            if(cipherOp.type_code === 2) {
                                setKey('');
                            }
                        }}
                    >
                        {cipherOp.name}
                    </option>
                })
                }
            </select>
            {selected ? <>
                <input placeholder="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input placeholder="plaintext"
                    value={plaintext}
                    onChange={(event) => setPlainText(event.target.value)}
                />
                {cipher.type_code === 1
                    ? <input placeholder="key" 
                    value={key}
                    onChange={(event) => setKey(event.target.value)}
                    />
                    : ''}
                <button>Submit</button>
            </> : ''}

        </form>
        <button onClick={() => history.push('/challenges')}>Cancel</button>
    </div>;
}

export default NewChallengeForm;