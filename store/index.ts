import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { effectsState, initStateEffects } from './reducers/effects.reducer';
import { initialStateShowResult, showResult } from './reducers/shows.reducer';

const reducers = combineReducers({
    showResult,
    effectsState,
});

export default createStore(reducers,{
    showResult: initialStateShowResult,
    effectsState:initStateEffects,
    }, applyMiddleware(thunk));