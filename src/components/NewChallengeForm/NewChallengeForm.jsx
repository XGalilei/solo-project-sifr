import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function NewChallengeForm() {

    const [title, setTitle] = useState('');
    const [cipher, setCipher] = useState({});
    const [plaintext, setPlainText] = useState('');


    const ciphers = useSelector(store => store.ciphers.allCiphers);
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);


    useEffect(() => {
        dispatch({ type: 'FETCH_CIPHERS' });
    }, []);

    const submitChallenge = () => {
        console.log(title);
        console.log(cipher.name);
        const challengeMid = {
            title: title,
            cipher: cipher.id,
            plaintext: plaintext,
        }
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
                    return <option value={cipherOp.id}
                        onClick={() => {
                            setCipher(cipherOp);
                            setSelected(true);
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
                    ? <input placeholder="key" />
                    : ''}
                <button>Submit</button>
            </> : ''}

        </form>
    </div>;
}

export default NewChallengeForm;