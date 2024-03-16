import React from 'react';

const Feedback = ({ feedback }) => {
  const feedbackStatus = Object.keys(feedback);
  const feedbackTotal = Object.values(feedback).reduce((acc, item) => {
    acc + item;
    return acc;
  }, 0);

  //   function FeedbackProcent(feedback, feedbackTotal){
  //  const positive = feedback.good + feedback.neutral;
  //  if(feedbackTotal){
  //     const positivePercent = (positive/feedbackTotal)*100%
  // }

  // return positivePercent;
  //   }
  //   return markup
  return (
    <div>
      {feedbackStatus.map(item => {
        const feedbackValues = feedback;

        return (
          <p key={item}>
            {item}: {feedbackValues[item]}
          </p>
        );
      })}
      {feedbackTotal > 0 && <p>Total:{feedbackTotal}</p>}
    </div>
  );
};

export default Feedback;
