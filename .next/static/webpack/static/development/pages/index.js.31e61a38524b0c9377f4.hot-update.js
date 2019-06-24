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
        return filterSelection(tag);
      },
      key: tag
    }, tag);
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

/***/ }),

/***/ "./components/FilterBar/FilterButton.tsx":
/*!***********************************************!*\
  !*** ./components/FilterBar/FilterButton.tsx ***!
  \***********************************************/
/*! exports provided: FilterButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterButton", function() { return FilterButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FilterBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterBar */ "./components/FilterBar/FilterBar.tsx");


var FilterButton = function FilterButton() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return showFilterBar();
    }
  }, "Filter");
};

var showFilterBar = function showFilterBar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FilterBar__WEBPACK_IMPORTED_MODULE_1__["FilterBar"], null);
};

/***/ })

})
//# sourceMappingURL=index.js.31e61a38524b0c9377f4.hot-update.js.map