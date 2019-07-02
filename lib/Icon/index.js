'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _extends = _interopDefault(require('@babel/runtime/helpers/extends'));
var _objectSpread = _interopDefault(require('@babel/runtime/helpers/objectSpread'));
var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var cls = _interopDefault(require('classnames'));

// 将number值转为 number + px
var setPxforNumber = function setPxforNumber(source) {
  return typeof source === 'number' ? source + 'px' : source;
}; // 去对象空值

var shakeFalsy = function shakeFalsy(source) {
  return Object.keys(source).reduce(function (p, v) {
    if (source[v]) p[v] = source[v];
    return p;
  }, {});
};

/* 将图标名映射为更具语义化的名称 */
var iconMap = {
  success: 'icon-RectangleCopy1',
  error: 'icon-RectangleCopy',
  info: 'icon-RectangleCopy7',
  question: 'icon-RectangleCopy4',
  search: 'icon-RectangleCopy2',
  bell: 'icon-RectangleCopy3',
  cycle: 'icon-RectangleCopy5',
  "do": 'icon-RectangleCopy15',
  undo: 'icon-RectangleCopy16',
  down: 'icon-unfold',
  up: 'icon-fold',
  left: 'icon-next',
  right: 'icon-return',
  setting: 'icon-RectangleCopy13',
  money: 'icon-RectangleCopy19',
  upload: 'icon-RectangleCopy17',
  "delete": 'icon-RectangleCopy10',
  back: 'icon-RectangleCopy11',
  catalog: 'icon-RectangleCopy18',
  catalog2: 'icon-RectangleCopy12',
  tag: 'icon-RectangleCopy20',
  img: 'icon-RectangleCopy21',
  location: 'icon-dingwei',
  add: 'icon-increase',
  visible: 'icon-visible',
  invisible: 'icon-eye_protection'
};

var Icon = function Icon(props) {
  var property = shakeFalsy({
    className: cls(props.className, iconMap[props.type], 'bk-icon', props.spin && 'bk-spin')
  });
  var sty = props.style || {};
  var style = shakeFalsy(_objectSpread({}, sty, {
    fontSize: setPxforNumber(props.size),
    color: props.color
  }));
  return React.createElement("i", _extends({
    style: style
  }, property));
};
/**
 * size: 大小
 * color: 颜色
 * className： 类名
 * style： 样式对象
 * type: 图标类型
 * */


Icon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(Object.keys(iconMap)),
  spin: PropTypes.bool
};

module.exports = Icon;
