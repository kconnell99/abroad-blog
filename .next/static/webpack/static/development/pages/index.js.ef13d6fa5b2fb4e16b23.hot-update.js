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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FilterBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterBar */ "./components/FilterBar/FilterBar.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./components/FilterBar/components.tsx");





var FilterButton = function FilterButton(_ref) {
  var tags = _ref.tags;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isFilterBarShown = _useState2[0],
      setIsFilterBarShown = _useState2[1];

  var handleClick = function handleClick() {
    setIsFilterBarShown(!isFilterBarShown);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["FilterItemButton"], {
    onClick: function onClick() {
      return setIsFilterBarShown(!isFilterBarShown);
    }
  }, "Filter"), isFilterBarShown && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FilterBar__WEBPACK_IMPORTED_MODULE_2__["FilterBar"], {
    id: "filterBar",
    tags: tags
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.ef13d6fa5b2fb4e16b23.hot-update.js.map