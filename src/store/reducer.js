import * as actions from './actionTypes';

const initialState = {
  counters: [
    { id: 1, value: 1 },
    { id: 2, value: 0 },
    { id: 3, value: 4 },
    { id: 4, value: 2 }
  ]
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.INCREMENT_COUNT:
      console.log('reducing the state, incrementing count');
      console.log('Got id: ', action.payload.id);
      // let newState = state.counters.forEach(counter => {
      //   if (counter.id === action.payload.id) {
      //     counter.value = counter.value + 1
      //   }
      // });
      return {
        ...state,
        counters: [
          // ...state.counters.filter(x => x.id != action.payload.id),
          // { id: action.payload.id, value: state.counters.filter(x => x.id === action.payload.id).value + 1 }
          // {id: 3, value:3}
        ]
      };
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