import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function NewChallengeForm () {

    const emptyCipher = {
        id: 0,
        type_code: 0,
        name: '',

    }
    const [title, setTitle] = useState('');
    const [cipher, setCipher] = useState(emptyCipher);

    const ciphers = useSelector(store => store.ciphers.allCiphers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'FETCH_CIPHERS'});
    }, []);

    const submitChallenge = () => {
        console.log(title);
        console.log(cipher.name);
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
            <button>Submit</button>
        </form>
    </div>;
}

export default NewChallengeForm;