import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';

import ListContact from './src/screens/ListContact';
import AddContact from './src/screens/AddContact';
import RemoveContact from './src/screens/RemoveContact';

const Root = createStackNavigator({
  ListContact: {
    screen: ListContact,
    navigationOptions: {
      title: 'ListContact'
    }
  },
  AddContact: {
    screen: AddContact,
    navigationOptions: {
      title: 'AddContact'
    }
  },
  RemoveContact: {
    screen: RemoveContact,
    navigationOptions: {
      title: 'Remove'
    }
  },
}, {
  initialRouteName: 'ListContact'
});

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

export default App;