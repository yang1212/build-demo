
import React from 'react';
import { observer } from 'mobx-react-lite';
import counterStore from '../stores/CounterStore.js';

const Counter = observer(() => {
  return (
    <div>
      <p>Count: {counterStore.count}</p>
      <p>Double Count: {counterStore.doubleCount}</p>
      <button onClick={() => counterStore.increment()}>Increment</button>
      <button onClick={() => counterStore.decrement()}>Decrement</button>
    </div>
  );
});

export default Counter;
