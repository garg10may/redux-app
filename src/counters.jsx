import React from 'react';
import Counter from './counter';
import { useSelector, useDispatch } from 'react-redux';
import { resetAllCount } from './store/actions';

function Counters() {

  const dispatch = useDispatch();
  const counters = useSelector(state => state.counters)
  return (
    <div>
      <div>
        <button onClick={() => dispatch(resetAllCount())}>Global Reset</button>
      </div>
      <div>
        {
          counters.map(x => {
            return <Counter
              id={x.id}
              value={x.value}
              key={x.id}
            ></Counter>
          })
        }
      </div>
    </div >
  )
}


export default Counters;