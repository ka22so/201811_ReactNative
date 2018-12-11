import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { decrementAmount, incrementAmount } from '../modules/Counter/Counter.module';
import { ReduxAction, ReduxState } from '../store';
import { App } from '../navigation';

export class ActionDispatcher {
  constructor(private dispatch: (action: ReduxAction) => void) { }

  public increment(amount: number) {
    this.dispatch(incrementAmount(amount));
  }

  public decrement(amount: number) {
    this.dispatch(decrementAmount(amount));
  }
}

export default connect(
  (state: ReduxState) => ({
    state: state.nav,
    screenProps: state.value
  }),
  (dispatch: Dispatch<ReduxAction>) => ({ actions: new ActionDispatcher(dispatch) })
)(App);
