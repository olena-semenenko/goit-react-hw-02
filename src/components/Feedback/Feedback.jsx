import React from 'react';
import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  const feedbackStatus = Object.keys(feedback);


  //   return markup
  return (
    <div className={css.feedback_field}>
      {feedbackStatus.map(item => {
        const feedbackValues = feedback;

        return (
          <p className={css.feedback_title} key={item}>
            {item}: {feedbackValues[item]}
          </p>
        );
      })}
      {totalFeedback > 0 && <p className={css.feedback_title}>Total: {totalFeedback}</p>}
      {totalFeedback > 0 && <p className={css.feedback_title}>Positive: {positiveFeedback}%</p>}

    </div>
  );
};

export default Feedback;
