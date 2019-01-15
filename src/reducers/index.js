import {MAKE_GUESS} from '../actions';

const initialState = {
  guesses: []
};

export const hotColdReducer = (state=initialState, action) => {
  if (action.type === MAKE_GUESS) {
    return Object.assign({}, state, {
      guesses: action.guesses
    });
  }

  return state;
};