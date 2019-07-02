import React from 'react';
import PropTypes from 'prop-types';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';

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

export default Skeleton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3BhY2thZ2VzL1NrZWxldG9uL1NrZWxldG9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZFdpZHRoKGJhc2VQKSB7XHJcbiAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MCk7XHJcbiAgcmV0dXJuIHJhbmQgKyBiYXNlUCArICclJztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZChtaW4sIG1heCkge1xyXG4gIHJldHVybiBwYXJzZUludChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG59XHJcblxyXG5jb25zdCBTa2VsZXRvbiA9ICh7IGNvdW50LCBpbWcsIGxvYWRpbmcsIGxpbmVDb3VudCwgcmFuZCwgLi4ucHJvcHMgfSkgPT4ge1xyXG5cclxuICBpZiAocmFuZCkge1xyXG4gICAgbGluZUNvdW50ID0gZ2V0UmFuZCgyLCA1KTsgXHJcbiAgfVxyXG4gXHJcbiAgY29uc3QgcmVuZGVyU2tlbGV0b24gPSAoKSA9PiAoXHJcbiAgICBBcnJheS5hcHBseShudWxsLCB7IGxlbmd0aDogY291bnQgfSkubWFwKCh2YWwsIGluZCkgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17aW5kfSBjbGFzc05hbWU9XCJiay1za2VsZXRvbl93cmFwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiay1za2VsZXRvbl9pdGVtICB3YXZlcy1lZmZlY3RcIj5cclxuICAgICAgICAgIHtpbWcgJiYgKFxyXG4gICAgICAgICAgICByYW5kXHJcbiAgICAgICAgICAgICAgPyBNYXRoLnJhbmRvbSgpID4gMC41XHJcbiAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiYmstc2tlbGV0b25faW1nXCIgLz5cclxuICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJiay1za2VsZXRvbl9pbWdcIiAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmstc2tlbGV0b25fY29udFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJrLXNrZWxldG9uX3RpdGxlXCIgc3R5bGU9e3sgd2lkdGg6IGdldFJhbmRXaWR0aCgzMCkgfX0gLz5cclxuICAgICAgICAgICAge0FycmF5LmFwcGx5KG51bGwsIHsgbGVuZ3RoOiBsaW5lQ291bnQgfSkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmstc2tlbGV0b25fdGV4dENvbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmstc2tlbGV0b25fdGV4dFwiIHN0eWxlPXt7IHdpZHRoOiBnZXRSYW5kV2lkdGgoMTApIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJrLXNrZWxldG9uX3RleHRcIiBzdHlsZT17eyB3aWR0aDogZ2V0UmFuZFdpZHRoKDEwKSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiay1za2VsZXRvbl90ZXh0XCIgc3R5bGU9e3sgd2lkdGg6IGdldFJhbmRXaWR0aCgxMCkgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmstc2tlbGV0b25fdGV4dFwiIHN0eWxlPXt7IHdpZHRoOiBnZXRSYW5kV2lkdGgoMTApIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJrLXNrZWxldG9uX3RleHRcIiBzdHlsZT17eyB3aWR0aDogZ2V0UmFuZFdpZHRoKDEwKSB9fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSlcclxuICApO1xyXG5cclxuICByZXR1cm4gbG9hZGluZ1xyXG4gICAgPyByZW5kZXJTa2VsZXRvbigpXHJcbiAgICA6IHByb3BzLmNoaWxkcmVuIHx8IG51bGw7XHJcbn07XHJcblxyXG5Ta2VsZXRvbi5kZWZhdWx0UHJvcHMgPSB7IFxyXG4gIGNvdW50OiAzLFxyXG4gIGxpbmVDb3VudDogMiwgXHJcbn07XHJcblxyXG5Ta2VsZXRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsICAgIC8vIOaYr+WQpuaYvuekulxyXG4gIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLCAgICAvLyDpnIDopoHmuLLmn5PnmoTmgLvmnaHmlbBcclxuICBsaW5lQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsICAgIC8vIOihjOeahOaVsOmHj++8jOS4jeWMheaLrOihjOWktOS4juihjOWwvlxyXG4gIGltZzogUHJvcFR5cGVzLmJvb2wsICAgIC8vIOaYvuekuuWbvueJh+ahhlxyXG4gIHJhbmQ6IFByb3BUeXBlcy5ib29sLCAgIC8vIOmaj+acuuagt+W8j1xyXG59O1xyXG5cclxuLyog5b2TbG9hZGluZ+S4umZhbHNl5pe277yM5Lya5pi+56S6U2tlbGV0b27nmoRjaGlsZHJlbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tlbGV0b247ICJdLCJuYW1lcyI6WyJnZXRSYW5kV2lkdGgiLCJiYXNlUCIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRSYW5kIiwibWluIiwibWF4IiwicGFyc2VJbnQiLCJTa2VsZXRvbiIsImNvdW50IiwiaW1nIiwibG9hZGluZyIsImxpbmVDb3VudCIsInByb3BzIiwicmVuZGVyU2tlbGV0b24iLCJBcnJheSIsImFwcGx5IiwibGVuZ3RoIiwibWFwIiwidmFsIiwiaW5kIiwid2lkdGgiLCJpdGVtIiwiaW5kZXgiLCJjaGlsZHJlbiIsImRl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
