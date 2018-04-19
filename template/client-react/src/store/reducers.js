import {combineReducers} from 'redux';
import { increment,decrement } from './actions';
const count = (state = 0, action) => {
  switch (action.type) {
    case increment:
      return state++;
    case decrement:
      return state--;
    default:
      return state
  }
}

export default combineReducers({
  count,
})