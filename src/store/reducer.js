import * as actions from './actionTypes';

const initialState = {
  counters: [
    { id: 1, value: 1 },
    { id: 2, value: 0 },
    { id: 3, value: 4 },
    { id: 4, value: 2 }
  ]
}

const testState = [1];

export function reducer(state = testState, action) {
  switch (action.type) {
    case actions.INCREMENT_COUNT: {
      return [4];

    }
    default: {
      return state;
    }
  }

}