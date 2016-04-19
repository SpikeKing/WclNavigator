'use strict';

var React = require('react-native');

var {
  AppRegistry,
} = React;

var SimpleView = require('./navigator_simple.js');
var UniformView = require('./navigator_uniform.js');

// 可以选择添加页面
AppRegistry.registerComponent('WclNavigator', () => SimpleView);