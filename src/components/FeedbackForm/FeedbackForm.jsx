import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

// this form is used for submitting feedback to the database for further analysis
function FeedbackForm(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const history = useHistory();
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    console.log(feedback);
    dispatch({
      type: 'POST_FEEDBACK',
      payload: feedback
    });
    setFeedback('');
  }
  
  const handleCancel = () => {
    setFeedback('');
    history.push('/');
  }

  return (
    <div>
      <h2>Under Construction...</h2>
      <form>
        <textarea placeholder="Leave feedback here"
        value={feedback}
        onChange={(event) => setFeedback(event.target.value)}
        >

        </textarea>
        <br/>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
