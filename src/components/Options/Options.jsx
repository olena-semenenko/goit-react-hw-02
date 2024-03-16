import React from 'react';
import css from './Options.module.css';

const Options = ({ buttons }) => {
  
  return (
    <div>
      {buttons.map(item => {
        return <button  key={item}>{item}</button>;
      })}
    </div>
  );
};

export default Options;
