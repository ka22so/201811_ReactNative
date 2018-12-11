import { Reducers, ModuleAction, ModuleState } from '../modules';
import { createStore, combineReducers, Action, applyMiddleware } from 'redux';
import { NavMiddleware } from '../navigation';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

const loggerMiddleware = createLogger();

console.log(Reducers);
export default createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    NavMiddleware
  ))
);

export type ReduxState = ModuleState;
export type ReduxAction = ModuleAction;
