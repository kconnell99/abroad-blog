webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FilterBar/FilterButton.tsx":
/*!***********************************************!*\
  !*** ./components/FilterBar/FilterButton.tsx ***!
  \***********************************************/
/*! exports provided: FilterButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterButton", function() { return FilterButton; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FilterBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterBar */ "./components/FilterBar/FilterBar.tsx");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");




function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    // display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var FilterButton = function FilterButton(_ref) {
  var tags = _ref.tags;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isFilterBarShown = _useState2[0],
      setIsFilterBarShown = _useState2[1];

  var handleClick = function handleClick() {
    setIsFilterBarShown(!isFilterBarShown);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: function onClick() {
      return setIsFilterBarShown(!isFilterBarShown);
    }
  }, "Filter"), isFilterBarShown && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_FilterBar__WEBPACK_IMPORTED_MODULE_3__["FilterBar"], {
    id: "filterBar",
    tags: tags
  }));
};
var FilterButtonContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());

/***/ })

})
//# sourceMappingURL=index.js.e212f2c0d8b0d0e2e40b.hot-update.js.map