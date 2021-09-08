import * as actions from './actionTypes';
import { createAction } from '@reduxjs/toolkit';

// export const incrementCount = createAction("incrementCount")

export function incrementCount(id) {
  return {
    type: actions.INCREMENT_COUNT,
    payload: {
      id
    }
  }
}

export function resetCount(id) {
  return {
    type: actions.RESET_COUNT,
    payload: {
      id
    }
  }
}

export function resetAllCount() {
  return {
    type: actions.RESET_ALL_COUNT,
    payload: {}
  }
}

export function deleteCounter(id) {
  return {
    type: actions.DELETE,
    payload: {
      id
    }
  }
}