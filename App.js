import React from 'react';
import config from './src/config';
import Nav from './src/nav';
import { Provider } from 'react-redux';
import store from './src/redux/store';

config.hideStatusBar();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Nav/>
      </Provider>
    );
  }
}
