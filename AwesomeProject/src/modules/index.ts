import { combineReducers, Action } from 'redux';
import counter, { CounterActions, CounterState } from './Counter/Counter.module';

export type ModuleAction = CounterActions | Action;

export type ModuleState = {
  counter: CounterState;
};

export const Reducers = combineReducers({
  counter
});
