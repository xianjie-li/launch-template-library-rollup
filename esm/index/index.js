import '@babel/runtime/helpers/extends';
import '@babel/runtime/helpers/objectSpread';
import 'react';
import 'prop-types';
import Icon from '../Icon/index.js';
import 'classnames';
import '@babel/runtime/helpers/objectWithoutProperties';
import Skeleton from '../Skeleton/index.js';
import _get from 'lodash/get';

console.log(_get({
  a: 123
}, 'a'));
var index = {
  Icon: Icon,
  Skeleton: Skeleton
};

export default index;
