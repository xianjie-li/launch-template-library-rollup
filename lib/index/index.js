'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('@babel/runtime/helpers/extends');
require('@babel/runtime/helpers/objectSpread');
require('react');
require('prop-types');
var Icon = require('../Icon/index.js');
require('classnames');
require('@babel/runtime/helpers/objectWithoutProperties');
var Skeleton = require('../Skeleton/index.js');
var _get = _interopDefault(require('lodash/get'));

console.log(_get({
  a: 123
}, 'a'));
var index = {
  Icon: Icon,
  Skeleton: Skeleton
};

module.exports = index;
