import { CHANGE_SEARCHFIELD } from './constants.js';

const intialState = {
  searchField: ''
}

export const searchRobots = (state=intialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
}