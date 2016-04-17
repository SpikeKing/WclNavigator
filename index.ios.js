'use strict';

var React = require('react-native');

var {
  AppRegistry,
} = React;

var SimpleView = require('./navigator_simple.js');

AppRegistry.registerComponent('WclNavigator', () => SimpleView);