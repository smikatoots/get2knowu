import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { textChangeReducer, categoryChangeReducer } from './textReducer';
// import { wordListReducer, gameTimeReducer, userInputReducer } from './gameReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    textChange: textChangeReducer,
    categoryChange: categoryChangeReducer,
    routing: routerReducer,
});

export default rootReducer;
