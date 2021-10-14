import React, { useDispatch, useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import CipherNav from '../CipherNav/CipherNav';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function SubpageOverview(props) {

  const testCipher = {
    id: 1,
    name: 'Morse Code',
    description: 'Used as a means of encoding telegraph signals',
    history: 'First invented in the early 19th century',
    type_code: 2
  };

  return (
    <div>
      <CipherNav props= {testCipher}/>
      <h2>Overview</h2>
      <p>{testCipher.description}</p>
    </div>
  );
}

export default SubpageOverview;
