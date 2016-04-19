'use strict';

var React = require('react-native');

var {
  AppRegistry,
} = React;

var SimpleView = require('./navigator_simple.js');
var UniformView = require('./navigator_uniform.js');

AppRegistry.registerComponent('WclNavigator', () => UniformView);