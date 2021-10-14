import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CipherNav from '../CipherNav/CipherNav';

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
    const id = props.match.params.id;
    dispatch({type: 'FETCH_SINGLE_CIPHER', payload: id})
  }, []);

  const [message, setMessage] = useState('');
  //true is encrypt, false is decrypt
  const [mode, setMode] = useState(true);


  function convert(str) {
    console.log(mode)
  }

  return (
    <div>
      <CipherNav props={cipher}/>
      <h2>{mode ? "Encrypt" : "Decrypt"} Mode</h2>
      {mode ? 'Plaintext:' : 'Ciphertext:'}<input/>
      <br/>
      {cipher.type_code % 2 === 1 ?<>{'Key: '} <input/><br/></>: ''}
      <button onClick={() => {setMode(!mode)}}>Switch Mode</button>
      <button onClick={() => convert(message)}>
        {mode ? "Encrypt" : "Decrypt"}</button>
    </div>
  );
}

export default SubpageCipher;
