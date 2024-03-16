import { useState } from 'react';
import css from './App.module.css';

import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

const buttons = ['good', 'neutral', 'bad'];
function App() {
  const feedbackInit = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(feedbackInit);
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)
  console.log(totalFeedback)
  console.log(feedback)
  console.log( positiveFeedback)


  function updateFeedback(event) {
    const key = event.target.innerHTML;
    setFeedback({ ...feedback, [key]: feedback[key] + 1 });
  }
 function resetFeedback(){
  setFeedback(feedbackInit)
 }
  return (
    <div className={css.container}>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      ></Description>
      <Options
        updateFeedback={updateFeedback}
        buttons={buttons}
        totalFeedback={totalFeedback}
       
        resetFeedback={resetFeedback}
      ></Options>
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}></Feedback>
      ) : (
        <Notification notificationText="Not feedback yet"></Notification>
      )}
    </div>
  );
}

export default App;
