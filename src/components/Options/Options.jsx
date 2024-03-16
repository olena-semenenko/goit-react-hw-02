import React from 'react';
import css from './Options.module.css';

const Options = ({ buttons, updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <>
      <ul className={css.options_list}>
        {buttons.map(item => {
          return (
            <li key={item}>
              <button className={css.options_button} onClick={updateFeedback}>
                {item}
              </button>
            </li>
          );
        })}
        {totalFeedback > 0 && (
          <button className={css.options_button} onClick={resetFeedback}>
            Reset
          </button>
        )}
      </ul>
    </>
  );
};

export default Options;
