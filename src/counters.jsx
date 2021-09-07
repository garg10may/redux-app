import React from 'react';
import Counter from './counter';
import store from './store/store';

function Counters() {

  return (
    <div>
      <div>
        <button style={{ marginLeft: 20, marginTop: 40, marginBottom: 40, fontWeight: 'bold' }}>Global Reset</button>
      </div>
      <div>
        {
          store.getState().counters.map(x => {
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