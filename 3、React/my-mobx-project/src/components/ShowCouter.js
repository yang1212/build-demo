
import React from 'react';
import { observer } from 'mobx-react-lite';
import counterStore from '../stores/CounterStore.js';

const Counter = observer(() => {
  return (
    <div>
      <p>Count: {counterStore.count}</p>
      <p>Double Count: {counterStore.doubleCount}</p>
    </div>
  );
});

export default Counter;
