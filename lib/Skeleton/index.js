'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var _objectWithoutProperties = _interopDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

function getRandWidth(baseP) {
  var rand = Math.floor(Math.random() * 50);
  return rand + baseP + '%';
}

function getRand(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

var Skeleton = function Skeleton(_ref) {
  var count = _ref.count,
      img = _ref.img,
      loading = _ref.loading,
      lineCount = _ref.lineCount,
      rand = _ref.rand,
      props = _objectWithoutProperties(_ref, ["count", "img", "loading", "lineCount", "rand"]);

  if (rand) {
    lineCount = getRand(2, 5);
  }

  var renderSkeleton = function renderSkeleton() {
    return Array.apply(null, {
      length: count
    }).map(function (val, ind) {
      return React.createElement("div", {
        key: ind,
        className: "bk-skeleton_wrap"
      }, React.createElement("div", {
        className: "bk-skeleton_item  waves-effect"
      }, img && (rand ? Math.random() > 0.5 ? React.createElement("div", {
        className: "bk-skeleton_img"
      }) : null : React.createElement("div", {
        className: "bk-skeleton_img"
      })), React.createElement("div", {
        className: "bk-skeleton_cont"
      }, React.createElement("div", {
        className: "bk-skeleton_title",
        style: {
          width: getRandWidth(30)
        }
      }), Array.apply(null, {
        length: lineCount
      }).map(function (item, index) {
        return React.createElement("div", {
          key: index,
          className: "bk-skeleton_textCont"
        }, React.createElement("div", {
          className: "bk-skeleton_text",
          style: {
            width: getRandWidth(10)
          }
        }), React.createElement("div", {
          className: "bk-skeleton_text",
          style: {
            width: getRandWidth(10)
          }
        }), React.createElement("div", {
          className: "bk-skeleton_text",
          style: {
            width: getRandWidth(10)
          }
        }), React.createElement("div", {
          className: "bk-skeleton_text",
          style: {
            width: getRandWidth(10)
          }
        }));
      }), React.createElement("div", {
        className: "bk-skeleton_text",
        style: {
          width: getRandWidth(10)
        }
      }))));
    });
  };

  return loading ? renderSkeleton() : props.children || null;
};

Skeleton.defaultProps = {
  count: 3,
  lineCount: 2
};
Skeleton.propTypes = {
  loading: PropTypes.bool,
  // 是否显示
  count: PropTypes.number,
  // 需要渲染的总条数
  lineCount: PropTypes.number,
  // 行的数量，不包括行头与行尾
  img: PropTypes.bool,
  // 显示图片框
  rand: PropTypes.bool // 随机样式

};

module.exports = Skeleton;
