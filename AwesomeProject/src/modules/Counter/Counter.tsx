import * as React from 'react';
import { CounterState } from './Counter.module';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';
import { ActionDispatcher } from '../../containers/Container';

interface Props {
  value: CounterState;
  actions: ActionDispatcher;
}

export class Counter extends React.Component<Props, {}> {

  render() {
    return (
      <View>
        <Text>score: {this.props.value.num}</Text>
        <Button onPress={() => this.props.actions.increment(3)} title="Increment 3" />
        <Button onPress={() => this.props.actions.decrement(2)} title="Decrement 2" />
      </View>
    );
  }
}
