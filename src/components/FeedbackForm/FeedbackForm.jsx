import React, { useState } from 'react';
import {useSelector} from 'react-redux';

// this form is used for submitting feedback to the database for further analysis
function FeedbackForm(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default FeedbackForm;
