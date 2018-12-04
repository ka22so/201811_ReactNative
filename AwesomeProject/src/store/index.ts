import { Reducers, ModuleAction, ModuleState } from '../modules';
import { createStore, combineReducers, Action, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();

export default createStore(
  Reducers,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

export type ReduxState = ModuleState;
export type ReduxAction = ModuleAction;
