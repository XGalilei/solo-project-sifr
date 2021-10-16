import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function NewChallengeForm () {

    const [title, setTitle] = useState('');
    const [cipher, setCipher] = useState({});

    const ciphers = useSelector(store => store.ciphers.allCiphers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'FETCH_CIPHERS'});
    }, []);

    const submitChallenge = () => {

    }

    return <div>
        <form onSubmit={() => submitChallenge()}>
            <input placeholder="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            />
            <select>
                {ciphers.map(cipherOp => {
                    return <option value={cipherOp.id}
                    onSelect=
                    {() => setCipher(cipherOp)}
                    >
                        {cipherOp.name}
                    </option>
                })}
            </select>
            <input placeholder="plaintext"/>
        </form>
    </div>;
}

export default NewChallengeForm;