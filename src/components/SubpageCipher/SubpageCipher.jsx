import React, { useState } from 'react';
import {useSelector} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function SubpageCipher(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');
  
  //true is encrypt, false is decrypt
  const [mode, setMode] = useState(true);

  return (
    <div>
      <h2>{mode ? "Encrypt" : "Decrypt"} Mode</h2>
      {mode ? 'Plaintext:' : 'Ciphertext:'}<input/>
      <br/>
      {'Key: '}<input/><br/>
      <button onClick={() => {setMode(!mode)}}>Switch Mode</button>
      <button>{mode ? "Encrypt" : "Decrypt"}</button>
    </div>
  );
}

export default SubpageCipher;
