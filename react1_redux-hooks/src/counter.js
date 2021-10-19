
import React from 'react'
import { useSelector, useDispatch  } from 'react-redux'

export default function Counter() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'increase' })}>
        增加
      </button>
    </div>
  );
}