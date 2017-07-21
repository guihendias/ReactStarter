import {ACTION} from '../actions';
import {createReducer} from './utils';

const initialState = {};

const handlers = {
  [ACTION]: (state, action) => {
    console.log(action.type, ": Handling it!");
    return state;
  }
};

export default createReducer(initialState, handlers);
