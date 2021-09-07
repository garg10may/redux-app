import * as actions from './actionTypes';

function incrementCount(id) {
  return {
    type: actions.INCREMENT_COUNT,
    payload: {
      id: id
    }
  }
}