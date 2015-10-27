'use strict';

require('../css/style.css');

var TabSelector = require('./TabSelector');
var React = require('react');

var data = [
  {name: 'Skyblue', value: 'skyblue'},
  {name: 'Pink', value: 'pink'},
  {name: 'Lightgreen', value: 'lightgreen'},
  {name: 'Lightgray', value: 'lightgray'},
  {name: 'Beige', value: 'beige'}
];

var node = document.createElement('div');
document.body.appendChild(node);

React.render(
  TabSelector({label: 'Color Selector', data: data, selected: 'skyblue'}), node
);