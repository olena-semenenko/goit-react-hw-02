import React from 'react';
import css from './Options.module.css';

const Options = ({good,neutrall,bad}) => {
  return (
    <div>
      <button>{good}</button>
      <button>{neutrall}</button>
      <button>{bad}</button>
      {/* <button></button> */}
    </div>
  );
};

export default Options;
