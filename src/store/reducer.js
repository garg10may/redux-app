import * as actions from './actionTypes';

const initialState = {
  dummy1: [1, 2, 3, 4, 5],
  dummy2: 'some text',
  counters: [
    { id: 1, value: 1 },
    { id: 2, value: 0 },
    { id: 3, value: 4 },
    { id: 4, value: 2 }
  ]
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.INCREMENT_COUNT: {
      return {
        ...state,
        counters: state.counters.map(counter => counter.id === action.payload.id ?
          { ...counter, value: counter.value + 1 } : counter)
      }
    }
    case actions.RESET_COUNT: {
      return {
        ...state,
        counters: state.counters.map(counter => counter.id === action.payload.id ?
          { ...counter, value: 0 } : counter)
      }
    }
    case actions.RESET_ALL_COUNT: {
      return {
        ...state,
        counters: state.counters.map(counter => {
          return { ...counter, value: 0 }
        })
      }
    }
    case actions.DELETE: {
      return {
        ...state,
        counters: state.counters.filter(counter => counter.id != action.payload.id)
      }
    }
    default: {
      return state;
    }
  }
}
