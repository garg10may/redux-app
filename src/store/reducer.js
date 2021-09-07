import * as actions from './actionTypes';

const initialState = {
  counters: [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 34 },
    { id: 4, value: 0 }
  ]
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.INCREMENT_COUNT:

      state.counters.forEach(counter => {
        if (counter.id === action.payload.id) {
          counter.value = counter.value + 1
        }
      });
      return { ...state }
    case actions.DELETE:
    //todo
    case actions.RESET_COUNT:
    //todo
    case actions.RESET_ALL_COUNT:
    //todo
    default:
      return state;
  }

}