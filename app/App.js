import React, {Component} from 'react';

// Reducers
import { Provider } from 'react-redux';
import store from './src/stores/mainStore';
import Nav from './src/containers/Navigator';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  }
}
