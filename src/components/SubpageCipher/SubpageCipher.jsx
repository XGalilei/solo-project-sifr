import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CipherNav from '../CipherNav/CipherNav';
import { encrypt, decrypt} from './ciphers.js';


function SubpageCipher(props) {

  const dispatch = useDispatch();
  const cipher = useSelector(store => store.ciphers.singleCipher);

  useEffect(() => {
    //const id = props.match.params.id;
    //dispatch({ type: 'FETCH_SINGLE_CIPHER', payload: id })
  }, []);

  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');
  const [answer, setAnswer] = useState('');
  //true is encrypt, false is decrypt
  const [mode, setMode] = useState(true);

  function convert(str, key) {
    //console.log(str);
    //console.log(key);

    const result = mode ? encrypt(str, key, cipher.id) :
    decrypt(str, key, cipher.id);

    console.log(result);
  }

  return (
    <div>
      <CipherNav props={cipher} />
      <h2>{mode ? "Encrypt" : "Decrypt"} Mode</h2>
      {mode ? 'Plaintext:' : 'Ciphertext:'}
      <input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <br />
      {cipher.type_code % 2 === 1 ? <>{'Key: '} 
      <input
        value={key}
        onChange={(event) => setKey(event.target.value)}
      />
        <br /></> : ''
      }
      <button onClick={() => { setMode(!mode) }}>Switch Mode</button>
      <button onClick={() => convert(message, key)}>
        {mode ? "Encrypt" : "Decrypt"}</button>
    </div>
  );
}

export default SubpageCipher;
