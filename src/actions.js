import { CHANGE_SEARCHFIELD } from './constants.js';

export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCHFIELD,
  payload: text
  } 
}