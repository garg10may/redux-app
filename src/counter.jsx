import React from 'react'
import store from './store/store';
import { incrementCount } from './store/actions';

export default function Counter({value, id}) {
  return (
    <div>
      <div style={{ margin: 10, fontWeight: 20, float: 'left' }}>{value}</div>
      <button style={{ margin: 10 }} onClick={() => store.dispatch(incrementCount(id))}>Increment</button>
      <button style={{ margin: 10 }} onClick={() => 1}>Reset</button>
      <button style={{ margin: 10 }} onClick={() => 1}>Delete</button>
    </div>
  );
}