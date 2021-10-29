import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CipherNav from '../CipherNav/CipherNav';
import DOMPurify from 'dompurify';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function SubpageHistory(props) {
  const dispatch = useDispatch();
  const cipher = useSelector(store => store.ciphers.singleCipher);

  useEffect(() => {
    //const id = props.match.params.id;
    //dispatch({type: 'FETCH_SINGLE_CIPHER', payload: id})
  }, []);


  return (
    <div>
      <CipherNav props={cipher}/>
      <h2>History</h2>
      {/* This is admittedly a piecemeal solution to a structural flaw in the database. Using DOMPurify will be adequate for the time being,
      but a safer alternative is a goal for the future.*/}
      <div className="container"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(cipher.history)
      }}/>
    </div>
  );
}

export default SubpageHistory;
