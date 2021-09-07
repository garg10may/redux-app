import * as actions from './actionTypes';

export function incrementCount(id) {
  console.log('i got called')
  return {
    type: actions.INCREMENT_COUNT,
    payload: {
      id: id
    }
  }
}