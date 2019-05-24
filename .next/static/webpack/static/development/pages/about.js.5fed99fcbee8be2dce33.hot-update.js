webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/NavBar/NavBar.js":
/*!*************************************!*\
  !*** ./components/NavBar/NavBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBarItem */ "./components/NavBar/NavBarItem.js");
var _jsxFileName = "/Users/katherineconnell/Projects/abroad-blog/components/NavBar/NavBar.js";


function NavBar(props) {
  var options = ["HOME", "ABOUT", "MAP", "PHOTOS", "CONTACT"];
  var layoutOptions = options.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBarItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, item);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "BLOG TITLE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.children), layoutOptions);
}

/***/ })

})
//# sourceMappingURL=about.js.5fed99fcbee8be2dce33.hot-update.js.map