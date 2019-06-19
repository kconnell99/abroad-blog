webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/NavBar/NavBar.tsx":
/*!**************************************!*\
  !*** ./components/NavBar/NavBar.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavBarItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBarItem */ "./components/NavBar/NavBarItem.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./components/NavBar/components.tsx");




function NavBar() {
  var options = ["HOME", "ABOUT", "MAP", "PHOTOS", "CONTACT"];
  var layoutOptions = options.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBarItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item
    }, item);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["FullNavBarContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: './'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["NavBarTitle"], null, "Blog title")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["NavBarItemsContainer"], null, layoutOptions)));
}

/***/ })

})
//# sourceMappingURL=post.js.033713b6a129b359d0a0.hot-update.js.map