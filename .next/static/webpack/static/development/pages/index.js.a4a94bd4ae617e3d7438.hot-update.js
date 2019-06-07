webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FilterBar/FilterBar.tsx":
/*!********************************************!*\
  !*** ./components/FilterBar/FilterBar.tsx ***!
  \********************************************/
/*! exports provided: FilterBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterBar", function() { return FilterBar; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Posts_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Posts/PostCard */ "./components/Posts/PostCard.tsx");



var FilterBar = function FilterBar() {
  var tagArr = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(_Posts_PostCard__WEBPACK_IMPORTED_MODULE_2__["allTags"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, tagArr && tagArr.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick() {
        return doSomething;
      },
      key: tag
    }, tag);
  }));
};

var doSomething = function doSomething() {
  console.log("something!");
};

/***/ })

})
//# sourceMappingURL=index.js.a4a94bd4ae617e3d7438.hot-update.js.map