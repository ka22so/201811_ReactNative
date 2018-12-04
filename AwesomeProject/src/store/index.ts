import counter, { CounterActions, CounterState } from '../modules/Counter/Counter.module';
import { createStore, combineReducers, Action, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();

export default createStore(
  combineReducers({
    counter
  }),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

export type ReduxState = {
  counter: CounterState;
};

export type ReduxAction = CounterActions | Action;
