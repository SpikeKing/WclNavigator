'use strict';

var React = require('react-native');

var {
  AppRegistry,
} = React;

var SimpleApp = require('./navigator_simple.js');

AppRegistry.registerComponent('WclNavigator', () => SimpleApp);