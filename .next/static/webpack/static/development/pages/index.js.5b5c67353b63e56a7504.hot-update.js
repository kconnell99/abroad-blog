webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FilterBar/FilterBar.tsx":
/*!********************************************!*\
  !*** ./components/FilterBar/FilterBar.tsx ***!
  \********************************************/
/*! exports provided: FilterBar, FilterContainer, FilterItemButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterBar", function() { return FilterBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterContainer", function() { return FilterContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterItemButton", function() { return FilterItemButton; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");





function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border-radius: 5px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  transition: visibility 0s, opacity 0.5s linear;\n  padding: 0;\n  display: flex;\n  margin: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var FilterBar = function FilterBar(_ref) {
  var tags = _ref.tags;
  var allTags = new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2___default.a([]);

  var addAllTags = function addAllTags(tags) {
    tags.forEach(function (tag) {
      return allTags.add(tag);
    });
    allTags.add("all");
  };

  tags.data.map(function (tag) {
    addAllTags(tag.fields.postTags);
  });

  var tagArr = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(allTags);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(FilterContainer, null, tagArr && tagArr.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      style: {
        listStyle: "none"
      }
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(FilterItemButton, {
      onClick: function onClick() {
        return filterSelection(tag);
      },
      key: tag
    }, tag));
  }));
};

function filterSelection(tag) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");

  for (i = 0; i < x.length; i++) {
    if (!x[i].classList.contains(tag)) {
      x[i].setAttribute("style", "display: none");
    } else {
      x[i].setAttribute("style", "display: block");
    }

    if (tag == "all") {
      x[i].setAttribute("style", "display: block");
    }
  }
}

var FilterContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].ul(_templateObject());
var FilterItemButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject2());

/***/ })

})
//# sourceMappingURL=index.js.5b5c67353b63e56a7504.hot-update.js.map