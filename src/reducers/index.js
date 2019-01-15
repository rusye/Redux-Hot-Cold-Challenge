import {MAKE_GUESS, RESTART_GAME} from '../actions';

const initialState = {
  guesses: [],
  correctAnswer: ''
};

export const hotColdReducer = (state=initialState, action) => {
  if (action.type === MAKE_GUESS) {
    return Object.assign({}, state, {
      guesses: action.guesses
    });
  }

  else if (action.type === RESTART_GAME) {
    return Object.assign({}, state, {
      correctAnswer: action.correctAnswer
    })
  }

  return state;
};