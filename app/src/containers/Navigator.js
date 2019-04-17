import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer,
} from 'react-navigation-redux-helpers';

export const navigatorMiddleware = createReactNavigationReduxMiddleware(
  state => state.navigation,
  "root",
);

import LoginScreen from './authentication/LoginScreen';
import ForgotPasswordScreen from './authentication/ForgotPasswordScreen';

import MessagesScreen from './main/MessagesScreen';

const AuthenticationNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  ForgotPassword: { screen: ForgotPasswordScreen },
});

const MainNavigator = createStackNavigator({
  Messages: { screen: MessagesScreen },
});

export const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthenticationNavigator,
    Main: MainNavigator,
  }
);

const App = createReduxContainer(AppNavigator);
const mapStateToProps = (state) => ({
  state: state.navigation,
});

export default connect(mapStateToProps)(App);