webpackHotUpdate("static/development/pages/photos.js",{

/***/ "./components/NavBar/NavBar.tsx":
/*!**************************************!*\
  !*** ./components/NavBar/NavBar.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavBarItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavBarItem */ "./components/NavBar/NavBarItem.tsx");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    background: #c2dde6;\n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





function NavBar() {
  var options = ["HOME", "ABOUT", "MAP", "PHOTOS", "CONTACT"];
  var layoutOptions = options.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NavBarItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item
    }, item);
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavBarContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: './'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavBarTitle, null, "BLOG TITLE")), layoutOptions));
}
var NavBarContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var NavBarTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].h1(_templateObject2());

/***/ })

})
//# sourceMappingURL=photos.js.556183551e248bc39af3.hot-update.js.map