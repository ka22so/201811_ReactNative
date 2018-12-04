import * as React from 'react';
import { CounterState } from './Counter.module';
import { Platform, StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { ActionDispatcher } from '../../containers/Container';

interface Props {
  value: CounterState;
  actions: ActionDispatcher;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    margin: 20
  },
  beer: {
    marginLeft: -25,
  },
  button: {
    marginTop: 10,
  }
});

const buttnStyle = [{
  marginTop: 10
}];

export class Counter extends React.Component<Props, {}> {

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.content}>
            <Text>This is Content Section</Text>
            <Text>score: {this.props.value.num}</Text>
            <Button block success onPress={() => this.props.actions.increment(3)} style={buttnStyle}>
              <Text>Increment 3</Text>
            </Button>
            <Button block warning onPress={() => this.props.actions.decrement(2)} style={buttnStyle}>
              <Text>Decrement 2</Text>
            </Button>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
