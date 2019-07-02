import Icon from './Icon/index';
import './Icon/style/index';

import Skeleton from './Skeleton/index';
import './Skeleton/style/index';

import _get from 'lodash/get';

console.log(_get({ a: 123 }, 'a'));

export default {
  Icon,
  Skeleton
};
