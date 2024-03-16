import { useState } from 'react';
import css from './App.module.css';

import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';

const buttons = ['good', 'neutral', 'bad'];
function App() {
  const feedbackInit = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  function handleClick() {
    console.log("Click")
  };

  const [feedback, setfeedback] = useState(feedbackInit);
  console.log(feedback);

  return (
    <div>
      <button  onClick={handleClick} >Click</button>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      ></Description>
      <Options onClick={handleClick} buttons={buttons}></Options>
      <Feedback feedback={feedback}></Feedback>
    </div>
  );
}

export default App;
