import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CipherNav from '../CipherNav/CipherNav';
import { encrypt, decrypt} from './ciphers.js';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function SubpageCipher(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const dispatch = useDispatch();
  const cipher = useSelector(store => store.ciphers.singleCipher);

  useEffect(() => {
    console.log(props);
    //const id = props.match.params.id;
    //dispatch({ type: 'FETCH_SINGLE_CIPHER', payload: id })
  }, []);

  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');
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
