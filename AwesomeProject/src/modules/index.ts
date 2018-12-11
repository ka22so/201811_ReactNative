import { combineReducers, Action } from 'redux';
import counter, { CounterActions, CounterState } from './Counter/Counter.module';
import { NavReducer } from '../navigation';

export type ModuleAction = CounterActions | Action;

export type ModuleState = {
  value: CounterState;
  nav: any;
};

export const Reducers = combineReducers({
  counter,
  nav: NavReducer
});
