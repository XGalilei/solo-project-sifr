import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import CipherNav from '../CipherNav/CipherNav';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function SubpageHistory(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);

  const testCipher = {
    id: 1,
    name: 'Morse Code',
    description: 'Used as a means of encoding telegraph signals',
    history: 'First invented in the early 19th century',
    type_code: 2
  };

  return (
    <div>
      <CipherNav props={testCipher}/>
      <h2>History</h2>
      {testCipher.history}
    </div>
  );
}

export default SubpageHistory;
