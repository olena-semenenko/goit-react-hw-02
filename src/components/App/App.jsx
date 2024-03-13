import { useState } from 'react';
import css from './App.module.css';

import Description from '../Description/Description';
import Options from '../Options/Options';

function App() {
  const feedbackInit = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setfeedback] = useState(feedbackInit);
  return (
    <div>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      ></Description>
      <Options good="Good" neutrall="Neutrall" bad="Bad"></Options>
    </div>
  );
}

export default App;
