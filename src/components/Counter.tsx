import { useState } from 'react';

import classes from './Counter.module.scss';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(prev => prev + 1);
  };

  return (
    <div className={classes.btn}>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
    </div>
  );
};
